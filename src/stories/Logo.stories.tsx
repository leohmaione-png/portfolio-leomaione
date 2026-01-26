import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "@/components/Logo";

const meta: Meta<typeof Logo> = {
  title: "Components/Atomic/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "white", "blue"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Blue: Story = {
  args: {
    variant: "blue",
  },
};

export const White: Story = {
  args: {
    variant: "white",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};
