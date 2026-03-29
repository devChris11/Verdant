"use client";

import { motion } from "motion/react";
import { PlugZap, Layers, Rocket } from "lucide-react";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { StepCard } from "@/components/molecules/StepCard";

const steps = [
  {
    stepNumber: 1,
    icon: <PlugZap size={20} style={{ color: "var(--primary)" }} />,
    title: "Connect your cloud",
    description:
      "Link your AWS, GCP, or Azure account. Verdant provisions resources directly in your VPC.",
  },
  {
    stepNumber: 2,
    icon: <Layers size={20} style={{ color: "var(--primary)" }} />,
    title: "Choose your services",
    description:
      "Pick from Kafka, PostgreSQL, Redis, OpenSearch, and more. Configure in the UI or via Terraform.",
  },
  {
    stepNumber: 3,
    icon: <Rocket size={20} style={{ color: "var(--primary)" }} />,
    title: "Ship with confidence",
    description:
      "Your services go live with SLAs, monitoring, and auto-scaling built in from day one.",
  },
];

export interface HowItWorksSectionProps {
  onOpenModal: () => void;
}

export function HowItWorksSection({ onOpenModal }: HowItWorksSectionProps) {
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
            <SectionLabel>HOW IT WORKS</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[48px]"
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 700,
              color: "var(--white)",
            }}
          >
            From zero to production in three steps
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          <div
            className="hidden lg:block absolute top-[80px] left-[20%] right-[20%] h-px"
            style={{
              borderTop: "2px dashed var(--border)",
            }}
          />

          {steps.map((step, index) => (
            <motion.button
              key={step.stepNumber}
              type="button"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
              onClick={onOpenModal}
              className="relative flex flex-col items-center text-center"
              style={{
                padding: 0,
                margin: 0,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                width: "100%",
              }}
            >
              <StepCard
                stepNumber={step.stepNumber}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
