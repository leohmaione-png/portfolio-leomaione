import type { Meta, StoryObj } from '@storybook/react';
import { ProjectNavigation } from '@/components/mdx/ProjectNavigation';

const meta = {
  title: 'Project/MDX/ProjectNavigation',
  component: ProjectNavigation,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    nextProject: {
        slug: "next-project",
        title: "Personal Finance Manager",
        company: "Itaú"
    }
  },
};
