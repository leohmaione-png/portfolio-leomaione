import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@/components/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Atomic/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    fallback: "LM",
  },
};

export const WithImage: Story = {
  args: {
    src: "https://github.com/shadcn.png",
    alt: "Shadcn",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    fallback: "LM",
  },
};
