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
  // Sort projects by date or order if needed; for now, keeping as is
  return projects;
}

const companiesDirectory = path.join(process.cwd(), 'src/content/companies');

export function getCompanyBySlug(slug: string) {
  const fullPath = path.join(companiesDirectory, `${slug}.json`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(fileContents);
}
