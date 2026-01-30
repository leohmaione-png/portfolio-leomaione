"use client";

import React, { useRef } from "react";
import { WorkSectionHeader } from "./WorkSectionHeader";
import { Carousel, CarouselItem } from "./Carousel";
import { CarouselNav } from "./CarouselNav";
import { CardPortfolio } from "./CardPortfolio";

interface Project {
  id: string | number;
  image: string | null;
  title: string;
}

interface ProjectGroupProps {
  company: string;
  icon: string | null;
  projects: Project[];
}

export function ProjectGroup({ company, icon, projects }: ProjectGroupProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);

  const checkScroll = () => {
    if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setCanScrollPrev(scrollLeft > 0);
        // Using a small buffer (1px) for floating point precision or rounding
        setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  React.useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
        carousel.addEventListener("scroll", checkScroll);
        // Check initially
        checkScroll();
        // Also check on window resize to be safe
        window.addEventListener("resize", checkScroll);
    }

    return () => {
        if (carousel) {
            carousel.removeEventListener("scroll", checkScroll);
        }
        window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -600, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 600, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full">
      <WorkSectionHeader
        brandName={company}
        brandIconSrc={icon}
        className="mb-8"
      />
      {/* Carousel Container - Standard Contained Layout */}
      <div className="w-full max-w-[1356px] mx-auto px-24 lg:px-48">
        <Carousel ref={carouselRef}>
          {projects.map((project) => (
            <CarouselItem key={project.id} className="w-full md:w-[calc((100%_-_64px)_/_3)]">
              <CardPortfolio
                title={project.title}
                imageSrc={project.image}
                imageAlt={project.title}
                href={`/work/${project.id}`}
              />
            </CarouselItem>
          ))}
        </Carousel>

        {/* Navigation - Bottom Centered */}
        <div className="flex justify-center mt-[60px]">
             <CarouselNav 
                onPrev={scrollPrev} 
                onNext={scrollNext} 
                disabledPrev={!canScrollPrev}
                disabledNext={!canScrollNext}
             />
        </div>
      </div>
    </section>
  );
}
