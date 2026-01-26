import type { Meta, StoryObj } from "@storybook/react";
import { LinktreeContainer } from "@/components/LinktreeContainer";

const meta: Meta<typeof LinktreeContainer> = {
  title: "Components/LinktreeContainer",
  component: LinktreeContainer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LinktreeContainer>;

export const Default: Story = {
  args: {
    rootLabel: "Work",
    brandLabel: "Brand Name",
    caseLabel: "Case 00",
  },
};

export const TwoLevels: Story = {
  args: {
    rootLabel: "Work",
    brandLabel: "Brand Name",
  },
};
