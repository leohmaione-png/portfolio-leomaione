import type { Meta, StoryObj } from "@storybook/react";
import { ProjectList } from "@/components/ProjectList";

const meta: Meta<typeof ProjectList> = {
  title: "Components/ProjectList",
  component: ProjectList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProjectList>;

export const Default: Story = {
  args: {
    projects: [
      {
        name: "Itaú App",
        year: "2024",
        tags: ["Design System", "Mobile"],
      },
      {
        name: "EcoStore",
        year: "2023",
        tags: ["E-commerce", "Web"],
      },
      {
        name: "Personal Brand",
        tags: ["Branding"],
      },
    ],
  },
};
