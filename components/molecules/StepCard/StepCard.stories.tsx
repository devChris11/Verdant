import type { Meta, StoryObj } from "@storybook/react";
import { PlugZap, Layers, Rocket } from "lucide-react";
import { StepCard } from "./StepCard";

const meta = {
  title: "Molecules/StepCard",
  component: StepCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof StepCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ConnectCloud: Story = {
  args: {
    stepNumber: 1,
    icon: <PlugZap size={20} />,
    title: "Connect your cloud",
    description:
      "Link your AWS, GCP, or Azure account. Verdant provisions resources directly in your VPC.",
  },
};

export const ChooseServices: Story = {
  args: {
    stepNumber: 2,
    icon: <Layers size={20} />,
    title: "Choose your services",
    description:
      "Pick from Kafka, PostgreSQL, Redis, OpenSearch, and more. Configure in the UI or via Terraform.",
  },
};

export const ShipConfidence: Story = {
  args: {
    stepNumber: 3,
    icon: <Rocket size={20} />,
    title: "Ship with confidence",
    description:
      "Your services go live with SLAs, monitoring, and auto-scaling built in from day one.",
  },
};
