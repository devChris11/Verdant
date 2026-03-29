import type { Meta, StoryObj } from "@storybook/react";
import { Zap, Database, Cpu, Cloud, BarChart2, ShieldCheck } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const meta = {
  title: "Molecules/FeatureCard",
  component: FeatureCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Zap size={20} />,
    title: "Apache Kafka",
    description:
      "Production-ready event streaming with guaranteed delivery and millisecond latency.",
  },
};

export const AllFeatures: Story = {
  args: {
    icon: <Zap size={20} />,
    title: "",
    description: "",
  },
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 24,
        padding: 32,
      }}
    >
      <FeatureCard
        icon={<Zap size={20} />}
        title="Apache Kafka"
        description="Production-ready event streaming with guaranteed delivery and millisecond latency."
      />
      <FeatureCard
        icon={<Database size={20} />}
        title="PostgreSQL"
        description="Fully managed relational databases with automated backups and point-in-time recovery."
      />
      <FeatureCard
        icon={<Cpu size={20} />}
        title="Redis"
        description="In-memory caching and message brokering to keep your applications blazing fast."
      />
      <FeatureCard
        icon={<Cloud size={20} />}
        title="Multi-cloud"
        description="Deploy across AWS, GCP, or Azure. Switch or spread workloads without vendor lock-in."
      />
      <FeatureCard
        icon={<BarChart2 size={20} />}
        title="Observability"
        description="Real-time metrics, alerts, and logs unified in one dashboard. Know before your users do."
      />
      <FeatureCard
        icon={<ShieldCheck size={20} />}
        title="Security First"
        description="SOC 2 Type II, encryption at rest and in transit, VPC peering, and RBAC out of the box."
      />
    </div>
  ),
};
