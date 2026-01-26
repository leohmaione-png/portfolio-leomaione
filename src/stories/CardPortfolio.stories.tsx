import type { Meta, StoryObj } from "@storybook/react";
import { CardPortfolio } from "@/components/CardPortfolio";

const meta: Meta<typeof CardPortfolio> = {
  title: "Components/CardPortfolio",
  component: CardPortfolio,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-[800px] mx-auto py-10">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CardPortfolio>;

export const Default: Story = {
  args: {
    title: "Name of the project",
    imageSrc: "https://placehold.co/1600x1000/png",
    imageAlt: "Project Placeholder",
  },
};
