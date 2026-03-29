import type { Meta, StoryObj } from "@storybook/react";
import { BlogSection } from "./BlogSection";

const meta = {
  title: "Organisms/BlogSection",
  component: BlogSection,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  args: {
    onOpenModal: () => {},
  },
} satisfies Meta<typeof BlogSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
