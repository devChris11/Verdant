import type { Meta, StoryObj } from "@storybook/react";
import type { BlogPostData } from "@/components/providers/ModalProvider";
import { BlogSection } from "./BlogSection";

const mockSanityPosts: BlogPostData[] = [
  {
    _id: "story-post-1",
    blogTitle: "Shipping faster with a CMS-backed marketing site",
    blogSlug: "cms-marketing-site",
    tag: "Engineering",
    publishedAt: "2025-06-15T12:00:00.000Z",
    readTime: "5 min read",
    coverImage: {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: "image-storybook-placeholder",
      },
    },
  },
  {
    _id: "story-post-2",
    blogTitle: "Post without cover uses the same fallback as hardcoded cards",
    blogSlug: "no-cover",
    tag: "Notes",
    publishedAt: "2025-05-01T08:30:00.000Z",
    readTime: "2 min read",
  },
];

const meta = {
  title: "Organisms/BlogSection",
  component: BlogSection,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  args: {
    onOpenModal: () => {},
    blogPosts: [] as BlogPostData[],
  },
} satisfies Meta<typeof BlogSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FromSanity: Story = {
  args: {
    blogPosts: mockSanityPosts,
  },
};
