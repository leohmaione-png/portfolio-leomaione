import type { Meta, StoryObj } from "@storybook/react";
import { Linktree } from "@/components/Linktree";

const meta: Meta<typeof Linktree> = {
  title: "Components/Linktree",
  component: Linktree,
  args: {
    children: "Work",
    href: "#",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Linktree>;

export const Active: Story = {
  args: {
    state: "active",
  },
};

export const Hover: Story = {
  args: {
    state: "hover",
  },
};

export const Focus: Story = {
  args: {
    state: "focus",
  },
};

export const Selected: Story = {
  args: {
    state: "selected",
    children: "Case 00",
  },
};
