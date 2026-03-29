import type { Meta, StoryObj } from "@storybook/react";
import { BlogCard } from "./BlogCard";

const meta = {
  title: "Molecules/BlogCard",
  component: BlogCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Infrastructure: Story = {
  args: {
    coverSrc:
      "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/blog-cover-1.png",
    tag: "Infrastructure",
    title: "Why we chose Apache Kafka over RabbitMQ for high-throughput pipelines",
    date: "March 12, 2025",
    readTime: "6 min read",
  },
};

export const DeepDive: Story = {
  args: {
    coverSrc:
      "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/blog-cover-2.png",
    tag: "Deep Dive",
    title: "Multi-cloud PostgreSQL: avoiding the pitfalls of cross-region replication",
    date: "February 28, 2025",
    readTime: "8 min read",
  },
};

export const OpenSource: Story = {
  args: {
    coverSrc:
      "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/blog-cover-3.png",
    tag: "Open Source",
    title: "Open source sustainability: how Verdant funds core contributors",
    date: "February 10, 2025",
    readTime: "4 min read",
  },
};
