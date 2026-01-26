import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@/components/Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Atomic/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: { type: "text" }, // In a real app we'd list all keys, but text is fine for now
      description: "Name of the icon from Lucide React",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Star: Story = {
  args: {
    name: "Star",
  },
};

export const ArrowRight: Story = {
  args: {
    name: "ArrowRight",
  },
};
