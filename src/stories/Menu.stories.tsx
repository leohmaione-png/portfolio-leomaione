import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "@/components/Menu";

const meta: Meta<typeof Menu> = {
  title: "Components/Molecules/Menu",
  component: Menu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {};
