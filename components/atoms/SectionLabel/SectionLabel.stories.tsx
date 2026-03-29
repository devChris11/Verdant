import type { Meta, StoryObj } from "@storybook/react";
import { SectionLabel } from "./SectionLabel";

const meta = {
  title: "Atoms/SectionLabel",
  component: SectionLabel,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof SectionLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "PLATFORM CAPABILITIES" },
};
