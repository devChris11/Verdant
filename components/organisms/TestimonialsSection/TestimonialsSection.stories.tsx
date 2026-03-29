import type { Meta, StoryObj } from "@storybook/react";
import type { TestimonialData } from "@/components/providers/ModalProvider";
import { TestimonialsSection } from "./TestimonialsSection";

const mockSanityTestimonials: TestimonialData[] = [
  {
    _id: "story-testimonial-1",
    fullName: "Jordan Lee",
    jobTitle: "VP Engineering, Northwind",
    quote:
      "These entries mirror the shape returned from GROQ so Storybook matches production mapping.",
    avatar: {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: "image-storybook-placeholder",
      },
    },
  },
  {
    _id: "story-testimonial-2",
    fullName: "Sam Morgan",
    jobTitle: "SRE, Contoso",
    quote:
      "When avatar is omitted in Sanity, the section uses the same fallback image as the hardcoded cards.",
  },
];

const meta = {
  title: "Organisms/TestimonialsSection",
  component: TestimonialsSection,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  args: {
    onOpenModal: () => {},
    testimonials: [],
  },
} satisfies Meta<typeof TestimonialsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Empty CMS list → built-in demo quotes and avatars. */
export const Default: Story = {};

/** Populated list → map `fullName`, `jobTitle`, `quote`, and `avatar` via `urlFor`. */
export const FromSanity: Story = {
  args: {
    testimonials: mockSanityTestimonials,
  },
};
