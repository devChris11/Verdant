import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "⬡ Open-source · Apache 2.0" },
};

export const Muted: Story = {
  args: { variant: "muted", children: "Infrastructure" },
};

export const Popular: Story = {
  args: { variant: "popular", children: "Most Popular" },
};
