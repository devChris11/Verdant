import type { Meta, StoryObj } from "@storybook/react";
import { LogoStrip } from "./LogoStrip";

const meta = {
  title: "Organisms/LogoStrip",
  component: LogoStrip,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof LogoStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
