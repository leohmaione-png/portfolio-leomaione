import type { Meta, StoryObj } from "@storybook/react";
import { HeaderHomeDesktop } from "@/components/HeaderHomeDesktop";

const meta: Meta<typeof HeaderHomeDesktop> = {
  title: "Components/Organisms/HeaderHomeDesktop",
  component: HeaderHomeDesktop,
  tags: ["autodocs"],
  parameters: {
      layout: 'fullscreen',
  }
};

export default meta;
type Story = StoryObj<typeof HeaderHomeDesktop>;

export const Default: Story = {};
