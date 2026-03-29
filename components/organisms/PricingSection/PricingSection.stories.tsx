import type { Meta, StoryObj } from "@storybook/react";
import type { PricingPlanData } from "@/components/providers/ModalProvider";
import { PricingSection } from "./PricingSection";

const mockSanityPlans: PricingPlanData[] = [
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
    price: "$99/mo",
    features: ["Unlimited services", "Priority support"],
    ctaLabel: "Start trial",
    isPopular: true,
  },
];

const meta = {
  title: "Organisms/PricingSection",
  component: PricingSection,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  args: {
    onOpenModal: () => {},
    pricingPlans: [] as PricingPlanData[],
  },
} satisfies Meta<typeof PricingSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FromSanity: Story = {
  args: {
    pricingPlans: mockSanityPlans,
  },
};
