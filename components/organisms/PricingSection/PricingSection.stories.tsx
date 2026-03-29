import type { Meta, StoryObj } from "@storybook/react";
import type { PRICING_PLANS_QUERY_RESULT } from "@/sanity.types";
import { PricingSection } from "./PricingSection";

/** Matches `PRICING_PLANS_QUERY_RESULT` / GROQ projection used in `app/page.tsx`. */
const mockSanityPlans: PRICING_PLANS_QUERY_RESULT = [
  {
    _id: "story-plan-1",
    priceHeading: "Starter",
    chipText: "For small teams",
    price: "$29/mo",
    features: ["10 services", "50GB storage"],
    ctaLabel: "Subscribe",
    isPopular: false,
  },
  {
    _id: "story-plan-2",
    priceHeading: "Growth",
    chipText: null,
    price: "$99/mo",
    features: ["Unlimited services", "Priority support"],
    ctaLabel: "Start trial",
    isPopular: true,
  },
  {
    _id: "story-plan-3",
    priceHeading: "Enterprise",
    chipText: "Volume pricing",
    price: "Custom",
    features: null,
    ctaLabel: "Contact sales",
    isPopular: false,
  },
];

const meta = {
  title: "Organisms/PricingSection",
  component: PricingSection,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  args: {
    onOpenModal: () => {},
    pricingPlans: [] as PRICING_PLANS_QUERY_RESULT,
  },
} satisfies Meta<typeof PricingSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Empty array → hardcoded Hobby / Pro / Enterprise cards. */
export const Default: Story = {};

/** Non-empty → same mapping as production (`toPricingCardProps`). */
export const FromSanity: Story = {
  args: {
    pricingPlans: mockSanityPlans,
  },
};
