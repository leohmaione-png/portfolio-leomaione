import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

export function getProjectSlugs() {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(projectsDirectory, `${realSlug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Project not found: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    frontmatter: data,
    content,
  };
}

export function getAllProjects() {
  const slugs = getProjectSlugs();
  const projects = slugs.map((slug) => getProjectBySlug(slug));
  
  // Sort projects by sortOrder (asc), defaulting to 99
  return projects.sort((a, b) => {
    const orderA = typeof a.frontmatter.sortOrder === 'number' ? a.frontmatter.sortOrder : 99;
    const orderB = typeof b.frontmatter.sortOrder === 'number' ? b.frontmatter.sortOrder : 99;
    return orderA - orderB;
  });
}

const companiesDirectory = path.join(process.cwd(), 'src/content/companies');

export function getCompanyBySlug(slug: string) {
  // Try JSON first
  const jsonPath = path.join(companiesDirectory, `${slug}.json`);
  if (fs.existsSync(jsonPath)) {
    const fileContents = fs.readFileSync(jsonPath, 'utf8');
    return JSON.parse(fileContents);
  }

  // Try YAML
  const yamlPath = path.join(companiesDirectory, `${slug}.yaml`);
  if (fs.existsSync(yamlPath)) {
    const fileContents = fs.readFileSync(yamlPath, 'utf8');
    // Ensure we have fences for gray-matter to parse it as data
    const contentToParse = fileContents.startsWith('---') 
        ? fileContents 
        : `---\n${fileContents}\n---`;
    
    const { data } = matter(contentToParse);
    return data;
  }

  return null;
}
