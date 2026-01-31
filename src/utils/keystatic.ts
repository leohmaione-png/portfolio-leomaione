import { createReader } from '@keystatic/core/reader';
import config from '@/keystatic.config';

const reader = createReader(process.cwd(), config);

export interface Project {
  id: string;
  title: string;
  image: string | null;
  company: string;
  sortOrder: number;
}

export interface ProjectGroupData {
  company: string;
  icon: string | null;
  projects: Project[];
}

export async function getProjectsGroupedByCompany(): Promise<ProjectGroupData[]> {
  const allProjects = await reader.collections.projects.all();
  
  // Group by company
  const groups: Record<string, ProjectGroupData> = {};

  for (const project of allProjects) {
    const data = project.entry;
    // data.company is now the slug (e.g. 'itau')
    const companySlug = data.company || ''; 
    
    let companyName = 'Other';
    let companyIcon: string | null = null;

    if (companySlug) {
       const companyData = await reader.collections.companies.read(companySlug);
       if (companyData) {
            companyName = companyData.name;
            companyIcon = companyData.icon || null;
       }
    }
    
    if (!groups[companyName]) {
      groups[companyName] = {
        company: companyName,
        icon: companyIcon, 
        projects: []
      };
    }
    
    groups[companyName].projects.push({
      id: project.slug,
      title: data.title,
      image: data.coverImage || null,
      company: companyName,
      sortOrder: data.sortOrder ?? 99,
    });
  }

  // Sort projects inside each group
  const result = Object.values(groups).map(group => ({
    ...group,
    projects: group.projects.sort((a, b) => a.sortOrder - b.sortOrder)
  }));

  return result;
}
