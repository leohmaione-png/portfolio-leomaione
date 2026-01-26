import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

const reader = createReader(process.cwd(), keystaticConfig);

export async function getProjectBySlugKeystatic(slug: string) {
    const project = await reader.collections.projects.read(slug, { resolveLinkedFiles: true });
    return project;
}

export async function getAllProjectSlugs() {
    return await reader.collections.projects.list();
}

export async function getProjectsGroupedByCompany() {
    // This function reconstructs the logical grouping for the home page list
    // It fetches all projects, then groups them by company name.
    const projects = await reader.collections.projects.all();
    const companies = await reader.collections.companies.all();

    // Grouping
    const groups: { company: string; icon: string; projects: any[] }[] = [];

    // Map company slugs/names to icons
    const companyIconMap = new Map<string, string>();
    companies.forEach(c => {
        companyIconMap.set(c.entry.name, c.entry.icon || '');
    });
    
    // Sort projects into groups
    projects.forEach(p => {
        const companyName = p.entry.company;
        let group = groups.find(g => g.company === companyName);
        if (!group) {
            group = {
                company: companyName,
                icon: companyIconMap.get(companyName) || '', // Fallback or empty
                projects: []
            };
            groups.push(group);
        }
        
        group.projects.push({
            id: p.slug,
            title: p.entry.title,
            image: p.entry.coverImage || '',
            company: p.entry.company
        });
    });

    return groups;
}

export async function getCompanyIcon(companyName: string) {
    const companiesRaw = await reader.collections.companies.all();
    const companyEntry = companiesRaw.find(c => c.entry.name === companyName);
    return companyEntry?.entry.icon || '';
}
