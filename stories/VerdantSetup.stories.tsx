import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Verdant/Setup",
  parameters: { layout: "centered" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const StorybookReady: Story = {
  render: () => (
    <p
      style={{
        color: "var(--white)",
        fontFamily: "'Inter', sans-serif",
        maxWidth: 360,
        textAlign: "center",
      }}
    >
      Storybook is running with Next.js 16, React 19, and your Tailwind v4
      globals.
    </p>
  ),
};
