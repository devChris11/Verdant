"use client";

import { motion } from "motion/react";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import {
  TestimonialCard,
  type TestimonialCardProps,
} from "@/components/molecules/TestimonialCard";
import { TestimonialData } from "@/components/providers/ModalProvider";
import { urlFor } from "@/sanity/lib/image";

type HardcodedTestimonial = {
  avatarSrc: string;
  name: string;
  title: string;
  quote: string;
};

const hardcodedTestimonials: HardcodedTestimonial[] = [
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

/** Used when a Sanity testimonial has no avatar image. */
const sanityAvatarFallback = hardcodedTestimonials[0].avatarSrc;

function isSanityTestimonial(
  item: TestimonialData | HardcodedTestimonial,
): item is TestimonialData {
  return "_id" in item;
}

function toTestimonialCardProps(
  item: TestimonialData | HardcodedTestimonial,
): TestimonialCardProps {
  if (isSanityTestimonial(item)) {
    const avatar = item.avatar;
    const hasImage = Boolean(avatar?.asset?._ref);
    return {
      quote: item.quote,
      name: item.fullName,
      title: item.jobTitle,
      avatarSrc:
        hasImage && avatar
          ? urlFor(avatar).width(96).height(96).url()
          : sanityAvatarFallback,
    };
  }
  return {
    quote: item.quote,
    name: item.name,
    title: item.title,
    avatarSrc: item.avatarSrc,
  };
}

export interface TestimonialsSectionProps {
  onOpenModal: () => void;
  testimonials: TestimonialData[];
}

export function TestimonialsSection({
  onOpenModal,
  testimonials,
}: TestimonialsSectionProps) {
  const items: (TestimonialData | HardcodedTestimonial)[] =
    testimonials.length > 0 ? testimonials : hardcodedTestimonials;

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
          {items.map((item, index) => {
            const card = toTestimonialCardProps(item);
            return (
              <motion.button
                key={isSanityTestimonial(item) ? item._id : item.name}
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
                <TestimonialCard {...card} />
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
