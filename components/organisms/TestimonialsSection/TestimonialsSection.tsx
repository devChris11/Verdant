"use client";

import { motion } from "motion/react";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";

const testimonials = [
  {
    avatarSrc:
      "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/testimonial-avatar-1.png",
    name: "Marcus Webb",
    title: "Staff Engineer, FeatherDev",
    quote:
      "We migrated three Kafka clusters to Verdant in a single sprint. What used to take weeks of ops work is now a config file.",
  },
  {
    avatarSrc:
      "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/testimonial-avatar-2.png",
    name: "Yuki Tanaka",
    title: "CTO, Capsule",
    quote:
      "Verdant's multi-cloud support meant we could run PostgreSQL in AWS and Redis in GCP without any custom infrastructure code.",
  },
];

export interface TestimonialsSectionProps {
  onOpenModal: () => void;
}

export function TestimonialsSection({ onOpenModal }: TestimonialsSectionProps) {
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
            <SectionLabel>CUSTOMER STORIES</SectionLabel>
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
            Built on Verdant, trusted in production
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.button
              key={t.name}
              type="button"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
              onClick={onOpenModal}
              className="relative text-left"
              style={{
                padding: 0,
                margin: 0,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                width: "100%",
              }}
            >
              <TestimonialCard
                quote={t.quote}
                name={t.name}
                title={t.title}
                avatarSrc={t.avatarSrc}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
