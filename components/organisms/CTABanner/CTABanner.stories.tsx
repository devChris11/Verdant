import type { Meta, StoryObj } from "@storybook/react";
import { CTABanner } from "./CTABanner";

const meta = {
  title: "Organisms/CTABanner",
  component: CTABanner,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  args: {
    onOpenModal: () => {},
  },
} satisfies Meta<typeof CTABanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
