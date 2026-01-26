import type { Meta, StoryObj } from "@storybook/react";
import { Carousel, CarouselItem } from "@/components/Carousel";
import { CardPortfolio } from "@/components/CardPortfolio";

const meta: Meta<typeof Carousel> = {
  title: "Components/Organisms/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const projects = [
  {
    image: "/projects/nu-ui.jpg",
    title: "Design System & UI",
    description: "Nubank",
  },
  {
    image: "/projects/ub-peace.jpg",
    title: "Peace Interaction",
    description: "Universal",
  },
  {
    image: "/projects/nu-transport.jpg",
    title: "Transport Ecosystem",
    description: "Nubank",
  },
   {
    image: "/projects/ub-square.jpg",
    title: "Square Identity",
    description: "Itaú",
  },
];

export const Default: Story = {
  render: () => (
    <div className="w-full py-10 bg-neutral-50">
        <div className="max-w-[1356px] mx-auto">
            <h2 className="px-5 lg:px-0 mb-6 font-primary text-xl">Project Carousel</h2>
            <Carousel>
            {projects.map((project, index) => (
                <CarouselItem key={index} className="w-[85vw] md:w-[600px]">
                <CardPortfolio
                    title={project.title}
                    imageSrc={project.image}
                    imageAlt={project.title}
                />
                </CarouselItem>
            ))}
            </Carousel>
        </div>
    </div>
  ),
};
