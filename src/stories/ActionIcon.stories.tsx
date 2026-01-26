import type { Meta, StoryObj } from "@storybook/react";
import { ActionIcon } from "@/components/ActionIcon";

const meta: Meta<typeof ActionIcon> = {
  title: "Components/Atomic/ActionIcon",
  component: ActionIcon,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["outline", "solid-blue", "solid-white", "ghost"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActionIcon>;

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const SolidBlue: Story = {
  args: {
    variant: "solid-blue",
  },
};

export const SolidWhite: Story = {
  args: {
    variant: "solid-white",
  },
  parameters: {
      backgrounds: { default: 'dark' }
  }
};

export const GroupHoverTest: Story = {
  render: () => (
    <div className="group p-10 border border-dashed border-gray-400 hover:border-blue-500 cursor-pointer flex items-center gap-4">
        <span>Hover this container</span>
        <ActionIcon variant="ghost" />
    </div>
  )
}
