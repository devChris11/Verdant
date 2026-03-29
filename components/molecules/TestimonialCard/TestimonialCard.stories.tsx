import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialCard } from "./TestimonialCard";

const meta = {
  title: "Molecules/TestimonialCard",
  component: TestimonialCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof TestimonialCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MarcusWebb: Story = {
  args: {
    avatarSrc:
      "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/testimonial-avatar-1.png",
    name: "Marcus Webb",
    title: "Staff Engineer, FeatherDev",
    quote:
      "We migrated three Kafka clusters to Verdant in a single sprint. What used to take weeks of ops work is now a config file.",
  },
};

export const YukiTanaka: Story = {
  args: {
    avatarSrc:
      "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/testimonial-avatar-2.png",
    name: "Yuki Tanaka",
    title: "CTO, Capsule",
    quote:
      "Verdant's multi-cloud support meant we could run PostgreSQL in AWS and Redis in GCP without any custom infrastructure code.",
  },
};
