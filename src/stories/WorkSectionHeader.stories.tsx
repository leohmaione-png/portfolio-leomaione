import type { Meta, StoryObj } from "@storybook/react";
import { WorkSectionHeader } from "@/components/WorkSectionHeader";

const meta: Meta<typeof WorkSectionHeader> = {
  title: "Components/WorkSectionHeader",
  component: WorkSectionHeader,
  tags: ["autodocs"],
  parameters: {
     layout: 'fullscreen',
  }
};

export default meta;
type Story = StoryObj<typeof WorkSectionHeader>;

export const Default: Story = {
  args: {
    brandName: "Itaú",
    caseName: "App Redesign",
  },
};
