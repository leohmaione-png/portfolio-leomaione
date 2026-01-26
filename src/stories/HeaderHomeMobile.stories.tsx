import type { Meta, StoryObj } from "@storybook/react";
import { HeaderHomeMobile } from "@/components/HeaderHomeMobile";

const meta: Meta<typeof HeaderHomeMobile> = {
  title: "Components/Organisms/HeaderHomeMobile",
  component: HeaderHomeMobile,
  tags: ["autodocs"],
  parameters: {
      layout: 'fullscreen',
      viewport: {
        defaultViewport: 'mobile1',
      },
  }
};

export default meta;
type Story = StoryObj<typeof HeaderHomeMobile>;

export const Default: Story = {};
