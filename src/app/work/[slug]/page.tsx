import React from 'react';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProjectBySlug, getAllProjects, getProjectSlugs, getCompanyBySlug } from '@/lib/mdx';
import { cn } from '@/lib/utils';
import { ProjectStats } from '@/components/mdx/ProjectStats';
import { ProjectSection } from '@/components/mdx/ProjectSection';
import { ProjectNavigation } from '@/components/mdx/ProjectNavigation';
import { ProjectGridLists } from '@/components/mdx/ProjectGridLists';
import { ProjectDetailedHeader } from '@/components/mdx/ProjectDetailedHeader';
import { HeaderHome } from '@/components/HeaderHome';
import { WorkSectionHeader } from '@/components/WorkSectionHeader';
import { ProjectHero } from '@/components/ProjectHero';
import { FullWidthSection } from '@/components/mdx/FullWidthSection';
import { HighlightBlock } from '@/components/mdx/HighlightBlock';
import { GridImage } from '@/components/mdx/GridImage';
import { SectionHeader } from '@/components/mdx/SectionHeader';
import { BeforeAfterSlider } from '@/components/mdx/BeforeAfterSlider';
import { RelatedProjects } from '@/components/RelatedProjects';
import Image from 'next/image';
import { ProjectVideo } from '@/components/mdx/ProjectVideo';

/*
  This ensures the build process knows which paths to generate statistically if we were using static export.
  For now, standard Next.js dynamic routing.
*/
export async function generateStaticParams() {
  const posts = getProjectSlugs();
  return posts.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  let project;
  
  try {
    project = getProjectBySlug(slug);
  } catch {
    notFound();
  }

  const { frontmatter, content } = project;

  // Resolve Company Relation
  const companySlug = typeof frontmatter.company === 'string' 
      ? frontmatter.company.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')
      : '';
  
  const companyData = getCompanyBySlug(companySlug);
  
  const brandName = companyData ? companyData.name : frontmatter.company;
  const brandIcon = companyData ? companyData.icon : frontmatter.icon;

  const allProjects = getAllProjects();

  // Filter projects for the current company first
  const companyProjects = allProjects.filter(p => p.frontmatter.company === frontmatter.company);
  
  // Find index within the company specific list
  const currentCompanyIndex = companyProjects.findIndex(p => p.slug === slug);
  
  // Format Case Number (e.g. "Case 01") - 1-based index
  const caseNumber = `Case ${String(currentCompanyIndex + 1).padStart(2, '0')}`;

  // Related Projects: All other projects from the same company
  // We map them to include their 1-based index relative to the company list
  const relatedProjects = companyProjects
    .map((p, index) => ({ 
        slug: p.slug, 
        title: p.frontmatter.title, 
        index: index + 1 // 1-based index
    }))
    .filter(p => p.slug !== slug);





  const StandardElement = (Tag: any) => (props: any) => (
    <Tag {...props} className={cn("col-span-4 md:col-start-2 md:col-span-10 font-serif text-[18px] md:text-[20px] leading-[1.6] text-[#212121] mb-6", props.className)} />
  );

  const BlockWrapper = (Component: any) => (props: any) => (
    <div className="col-span-4 md:col-span-12 w-full">
      <Component {...props} />
    </div>
  );

  const components = {
    // Standard Elements
    p: StandardElement('p'),
    h1: StandardElement('h1'),
    h2: StandardElement('h2'),
    h3: StandardElement('h3'),
    h4: StandardElement('h4'),
    h5: StandardElement('h5'),
    h6: StandardElement('h6'),
    ul: (props: any) => <ul {...props} className="col-span-4 md:col-start-2 md:col-span-10 list-disc pl-4 mb-6" />,
    ol: (props: any) => <ol {...props} className="col-span-4 md:col-start-2 md:col-span-10 list-decimal pl-4 mb-6" />,
    blockquote: (props: any) => <blockquote {...props} className="col-span-4 md:col-start-2 md:col-span-10 border-l-4 border-neutral-200 pl-4 italic mb-6" />,

    // Standard MDX matching Keystatic Blocks
    KeyResults: BlockWrapper(ProjectStats),
    GridList: BlockWrapper(ProjectGridLists),
    HighlightBlock: BlockWrapper(HighlightBlock),
    StandardGridImage: BlockWrapper(GridImage),
    ProjectVideo: BlockWrapper(ProjectVideo),
    SectionHeader: BlockWrapper(SectionHeader),
    BeforeAfterSlider: BlockWrapper(BeforeAfterSlider),
    FullWidthSection: BlockWrapper(FullWidthSection),
    ProjectSection: BlockWrapper(ProjectSection),
    
    // Fallbacks
    ProjectStats: BlockWrapper(ProjectStats),
    ProjectGridLists: BlockWrapper(ProjectGridLists),
    ProjectDetailedHeader: BlockWrapper(ProjectDetailedHeader),
    Image, 
  };

  return (
    <div className="min-h-screen bg-background">
      <HeaderHome />
      
      <main className="pt-20">
        {/* Work Section Header with Brand and Breadcrumbs */}
                <WorkSectionHeader 
                    brandName={brandName}
                    brandIconSrc={brandIcon}
                    caseName={caseNumber}
                    className="pt-16 mb-[72px] md:mb-[100px]"
                />

        <ProjectHero 
            title={frontmatter.title}
            subtitle={frontmatter.description}
            heroImageSrc={frontmatter.heroImage || undefined}
        />

        {/* MDX Content & Footer - Grid Cols 2-11 */}
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-4 md:grid-cols-12 gap-x-6">
            <div className="contents">
                <MDXRemote source={content} components={components} />
            </div>
        </div>

        {/* Related Projects Footer - Grid Cols 2-11 */}
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="col-span-4 md:col-span-12">
                <RelatedProjects
                    companyName={brandName}
                    companyIcon={brandIcon}
                    projects={relatedProjects}
                    className="mt-[100px]"
                />
            </div>
        </div>
      </main>
    </div>
  );
}
