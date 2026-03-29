import type { Meta, StoryObj } from "@storybook/react";
import { SocialIcon } from "./SocialIcon";

const meta = {
  title: "Atoms/SocialIcon",
  component: SocialIcon,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof SocialIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Github: Story = {
  args: { platform: "github", onClick: () => {} },
};

export const Twitter: Story = {
  args: { platform: "twitter", onClick: () => {} },
};

export const Linkedin: Story = {
  args: { platform: "linkedin", onClick: () => {} },
};
