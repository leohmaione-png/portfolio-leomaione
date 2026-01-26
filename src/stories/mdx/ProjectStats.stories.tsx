import type { Meta, StoryObj } from '@storybook/react';
import { ProjectStats } from '@/components/mdx/ProjectStats';

const meta = {
  title: 'Project/MDX/ProjectStats',
  component: ProjectStats,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectStats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stats: [
      { value: "54%", label: "Time Reduction", description: "for paying bills" },
      { value: "32%", label: "Conversion", description: "Increase in digital sales" },
      { value: "92%", label: "Satisfaction", description: "App Store / Google Play" },
      { value: "20bps", label: "Reduction", description: "in churn rate" },
    ]
  },
};
