"use client";

import { motion } from "motion/react";
import {
  Zap,
  Database,
  Cpu,
  Cloud,
  BarChart2,
  ShieldCheck,
} from "lucide-react";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { FeatureCard } from "@/components/molecules/FeatureCard";

const features = [
  {
    icon: <Zap size={20} style={{ color: "var(--primary)" }} />,
    title: "Apache Kafka",
    description:
      "Production-ready event streaming with guaranteed delivery and millisecond latency.",
  },
  {
    icon: <Database size={20} style={{ color: "var(--primary)" }} />,
    title: "PostgreSQL",
    description:
      "Fully managed relational databases with automated backups and point-in-time recovery.",
  },
  {
    icon: <Cpu size={20} style={{ color: "var(--primary)" }} />,
    title: "Redis",
    description:
      "In-memory caching and message brokering to keep your applications blazing fast.",
  },
  {
    icon: <Cloud size={20} style={{ color: "var(--primary)" }} />,
    title: "Multi-cloud",
    description:
      "Deploy across AWS, GCP, or Azure. Switch or spread workloads without vendor lock-in.",
  },
  {
    icon: <BarChart2 size={20} style={{ color: "var(--primary)" }} />,
    title: "Observability",
    description:
      "Real-time metrics, alerts, and logs unified in one dashboard. Know before your users do.",
  },
  {
    icon: <ShieldCheck size={20} style={{ color: "var(--primary)" }} />,
    title: "Security First",
    description:
      "SOC 2 Type II, encryption at rest and in transit, VPC peering, and RBAC out of the box.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-4"
          >
            <SectionLabel>PLATFORM CAPABILITIES</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[48px] mb-6"
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 700,
              color: "var(--white)",
            }}
          >
            Everything your data stack needs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--muted)",
            }}
          >
            From event streaming to caching to relational databases — Verdant manages the complexity
            so your team can focus on building.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
