import type { Meta, StoryObj } from "@storybook/react";
import { PricingCard } from "./PricingCard";

const meta = {
  title: "Molecules/PricingCard",
  component: PricingCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof PricingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hobby: Story = {
  args: {
    plan: "Hobby",
    price: "Free",
    description: "For side projects and experiments",
    features: ["1 service", "5GB storage", "Community support"],
    ctaLabel: "Get started free",
    isPopular: false,
  },
};

export const Pro: Story = {
  args: {
    plan: "Pro",
    price: "$99/mo",
    description: "For growing engineering teams",
    features: ["Unlimited services", "500GB storage", "Email support", "99.9% SLA"],
    ctaLabel: "Start free trial",
    isPopular: true,
  },
};

export const Enterprise: Story = {
  args: {
    plan: "Enterprise",
    price: "Custom",
    description: "For mission-critical workloads",
    features: ["Dedicated clusters", "Custom SLA", "SAML SSO", "Dedicated support"],
    ctaLabel: "Contact sales",
    isPopular: false,
  },
};
