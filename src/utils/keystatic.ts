import { createReader } from '@keystatic/core/reader';
import config from '@/keystatic.config';

const reader = createReader(process.cwd(), config);

export interface Project {
  id: string;
  title: string;
  image: string;
  company: string;
}

export interface ProjectGroupData {
  company: string;
  icon: string;
  projects: Project[];
}

export async function getProjectsGroupedByCompany(): Promise<ProjectGroupData[]> {
  const allProjects = await reader.collections.projects.all();
  
  // Sort or filter if needed? Currently just all.
  // Group by company
  const groups: Record<string, ProjectGroupData> = {};

  // Preserve order based on appearance or just predefined? 
  // Maybe we want to sort companies? For now insertion order.
  
  for (const project of allProjects) {
    const data = project.entry;
    // data.company is now the slug (e.g. 'itau')
    const companySlug = data.company || ''; 
    
    // Resolve company data using the helper we added to mdx.ts
    // We need to import getCompanyBySlug in this file.
    // However, since this file uses keystatic reader, maybe we can use reader to fetch company?
    // Let's stick to the JSON helper for simplicity if possible, or use reader.collections.companies.read(slug)
    
    let companyName = 'Other';
    let companyIcon = '';

    if (companySlug) {
       const companyData = await reader.collections.companies.read(companySlug);
       if (companyData) {
            companyName = companyData.name;
            companyIcon = companyData.icon || '';
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
      image: data.coverImage || '',
      company: companyName,
    });
  }

  return Object.values(groups);
}
