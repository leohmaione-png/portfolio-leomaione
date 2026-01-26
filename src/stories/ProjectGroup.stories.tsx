import type { Meta, StoryObj } from "@storybook/react";
import { ProjectGroup } from "@/components/ProjectGroup";

const meta: Meta<typeof ProjectGroup> = {
  title: "Components/Organisms/ProjectGroup (Carousel+Nav)",
  component: ProjectGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ProjectGroup>;

const products = [
    {
      id: 1,
      image: "/projects/nu-ui.jpg",
      title: "Design System & UI",
    },
    {
      id: 3,
      image: "/projects/nu-transport.jpg",
      title: "Transport Ecosystem",
    },
    {
      id: 4,
       image: "/projects/ub-peace.jpg",
       title: "Peace Interaction",
    },
];

export const Default: Story = {
  args: {
    company: "Nubank",
    icon: "/icons/brand-nubank.svg",
    projects: products,
  },
  render: (args) => (
      <div className="py-12 bg-neutral-50 min-h-screen">
          <ProjectGroup {...args} />
      </div>
  )
};
