import type { Meta, StoryObj } from "@storybook/react";
import type { BLOG_POSTS_QUERY_RESULT } from "@/sanity.types";
import { BlogSection } from "./BlogSection";

/** Matches `BLOG_POSTS_QUERY_RESULT` / GROQ projection used in `app/page.tsx`. */
const mockSanityPosts: BLOG_POSTS_QUERY_RESULT = [
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
        _ref: "image-storybookplaceholder-1200x800-jpg", // syntactic Sanity asset id for urlFor in Storybook
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
    coverImage: null,
  },
];

const meta = {
  title: "Organisms/BlogSection",
  component: BlogSection,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  args: {
    onOpenModal: () => {},
    blogPosts: [] as BLOG_POSTS_QUERY_RESULT,
  },
} satisfies Meta<typeof BlogSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Empty array → hardcoded ImageKit posts. */
export const Default: Story = {};

/** Non-empty → `urlFor` / `formatPublishedDate` / cover fallback like production. */
export const FromSanity: Story = {
  args: {
    blogPosts: mockSanityPosts,
  },
};
