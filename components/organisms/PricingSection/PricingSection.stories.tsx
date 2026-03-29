import type { Meta, StoryObj } from "@storybook/react";
import { PricingSection } from "./PricingSection";

const meta = {
  title: "Organisms/PricingSection",
  component: PricingSection,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  args: {
    onOpenModal: () => {},
  },
} satisfies Meta<typeof PricingSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
