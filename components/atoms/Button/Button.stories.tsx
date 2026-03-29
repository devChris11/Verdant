import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: "primary", children: "Request a Demo" },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Sign in" },
};

export const Outline: Story = {
  args: { variant: "outline", children: "View on GitHub" },
};

export const PrimaryFullWidth: Story = {
  args: { variant: "primary", fullWidth: true, children: "Get in Touch" },
};

export const Disabled: Story = {
  args: { variant: "primary", disabled: true, children: "Request a Demo" },
};
