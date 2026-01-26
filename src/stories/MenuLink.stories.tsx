import type { Meta, StoryObj } from "@storybook/react";
import { MenuLink } from "@/components/MenuLink";

const meta: Meta<typeof MenuLink> = {
  title: "Components/Atomic/MenuLink",
  component: MenuLink,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MenuLink>;

export const Default: Story = {
  args: {
    children: "About",
    href: "#",
  },
};

export const Active: Story = {
  args: {
    children: "Work",
    active: true,
  },
};

export const SerifLabel: Story = {
    args: {
        children: "label",
        variant: "serif-label"
    }
}
