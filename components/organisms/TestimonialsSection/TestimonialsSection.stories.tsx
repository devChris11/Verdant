import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialsSection } from "./TestimonialsSection";

const meta = {
  title: "Organisms/TestimonialsSection",
  component: TestimonialsSection,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  args: {
    onOpenModal: () => {},
  },
} satisfies Meta<typeof TestimonialsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
