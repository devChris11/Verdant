import type { Meta, StoryObj } from "@storybook/react";
import { FeaturesSection } from "./FeaturesSection";

const meta = {
  title: "Organisms/FeaturesSection",
  component: FeaturesSection,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof FeaturesSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
