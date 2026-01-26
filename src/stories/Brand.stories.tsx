import type { Meta, StoryObj } from "@storybook/react";
import { Brand } from "@/components/Brand";

const meta: Meta<typeof Brand> = {
  title: "Components/Atomic/Brand",
  component: Brand,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Brand>;

export const Default: Story = {};

export const CustomSize: Story = {
    args: {
        className: "w-20 h-20"
    }
}
