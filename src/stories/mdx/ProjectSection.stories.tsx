import type { Meta, StoryObj } from '@storybook/react';
import { ProjectSection } from '@/components/mdx/ProjectSection';

const meta = {
  title: 'Project/MDX/ProjectSection',
  component: ProjectSection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Objective",
    children: (
        <ul className="list-disc pl-5 space-y-2 font-sans text-gray-600">
            <li>Increase NPS and be #1 among digital active players</li>
            <li>Consolidate all products from the bank into a main bank app</li>
            <li>Offer a Complete digital product suite</li>
        </ul>
    ),
  },
};

export const TextContent: Story = {
    args: {
      title: "Background",
      children: (
          <p className="font-sans text-gray-600 leading-relaxed">
              This project started with a clear mission: to unify the disparate mobile experiences of the bank into a single, cohesive super-app. The challenge was not just technical, but cultural, requiring a shift from product-centric to customer-centric thinking.
          </p>
      ),
    },
  };
