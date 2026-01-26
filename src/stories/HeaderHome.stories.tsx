import type { Meta, StoryObj } from "@storybook/react";
import { HeaderHome } from "@/components/HeaderHome";

const meta: Meta<typeof HeaderHome> = {
  title: "Components/Organisms/HeaderHome",
  component: HeaderHome,
  tags: ["autodocs"],
  parameters: {
      layout: 'fullscreen',
  }
};

export default meta;
type Story = StoryObj<typeof HeaderHome>;

export const Default: Story = {};
