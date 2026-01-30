import React from 'react';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProjectBySlug, getAllProjects, getProjectSlugs, getCompanyBySlug } from '@/lib/mdx';
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

  // Determine next project for navigation
  // Logic: find current index, get next, loop back to start if at end
  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex(p => p.slug === slug);
  const nextIndex = (currentIndex + 1) % allProjects.length;
  const nextProjectData = allProjects[nextIndex];

  // Format Case Number (e.g. "Case 01")
  const caseNumber = `Case ${String(currentIndex + 1).padStart(2, '0')}`;

  // Filter Related Projects (Same Company, excluding current)
  // We want to list ALL projects from this company to allow navigation between them.
  // Ideally, we assign them indexes based on their order in the global list or company specific list?
  // Let's use their global index for the number "02", "03", etc.
  const relatedProjects = allProjects
    .map((p, index) => ({ ...p, globalIndex: index + 1 }))
    .filter(p => p.frontmatter.company === frontmatter.company && p.slug !== slug)
    .map(p => ({
        slug: p.slug,
        title: p.frontmatter.title,
        index: p.globalIndex
    }));





  const components = {
    // Standard MDX matching Keystatic Blocks
    KeyResults: ProjectStats,
    GridList: ProjectGridLists,
    HighlightBlock: HighlightBlock,
    StandardGridImage: GridImage,
    ProjectVideo: ProjectVideo,
    SectionHeader: SectionHeader,
    BeforeAfterSlider: BeforeAfterSlider,
    FullWidthSection: FullWidthSection,
    ProjectSection: ProjectSection,
    
    // Fallbacks
    ProjectStats,
    ProjectGridLists,
    ProjectDetailedHeader,
    Image, 
  };

  return (
    <div className="min-h-screen bg-background">
      <HeaderHome />
      
      <main className="pt-20">
        {/* Work Section Header with Brand and Breadcrumbs */}
        {/* Header & Title - Grid Cols 2-11 */}
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6 pt-16 mb-[72px] md:mb-[100px]">
            <div className="col-span-1 md:col-start-2 md:col-span-10 flex flex-col">
                <WorkSectionHeader 
                    brandName={brandName}
                    brandIconSrc={brandIcon}
                    caseName={caseNumber}
                    className="px-0 py-0 lg:px-0 max-w-none"
                />
            </div>
        </div>

        <ProjectHero 
            title={frontmatter.title}
            subtitle={frontmatter.description}
            heroImageSrc={frontmatter.heroImage || undefined}
        />

        {/* MDX Content & Footer - Grid Cols 2-11 */}
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="col-span-1 md:col-span-12">
                <MDXRemote source={content} components={components} />
            </div>
        </div>

        {/* Related Projects Footer - Grid Cols 2-11 */}
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="col-span-1 md:col-start-2 md:col-span-10">
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
