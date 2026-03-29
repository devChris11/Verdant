"use client";

import { motion } from "motion/react";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import {
  PricingCard,
  type PricingCardProps,
} from "@/components/molecules/PricingCard";
import type { PRICING_PLANS_QUERY_RESULT } from "@/sanity.types"; 

type SanityPricingPlan = PRICING_PLANS_QUERY_RESULT[number];

type HardcodedPlan = Omit<PricingCardProps, "onCtaClick">;

const hardcodedPlans: HardcodedPlan[] = [
  {
    plan: "Hobby",
    price: "Free",
    description: "",
    features: ["1 service", "5GB storage", "Community support"],
    ctaLabel: "Get started free",
    isPopular: false,
  },
  {
    plan: "Pro",
    price: "$99/mo",
    description: "",
    features: [
      "Unlimited services",
      "500GB storage",
      "Email support",
      "99.9% SLA",
    ],
    ctaLabel: "Start free trial",
    isPopular: true,
  },
  {
    plan: "Enterprise",
    price: "Custom",
    description: "",
    features: [
      "Dedicated clusters",
      "Custom SLA",
      "SAML SSO",
      "Dedicated support",
    ],
    ctaLabel: "Contact sales",
    isPopular: false,
  },
];

function isSanityPlan(
  item: SanityPricingPlan | HardcodedPlan,
): item is SanityPricingPlan {
  return "_id" in item;
}

function toPricingCardProps(
  item: SanityPricingPlan | HardcodedPlan,
): PricingCardProps {
  if (isSanityPlan(item)) {
    return {
      plan: item.priceHeading ?? "",
      price: item.price ?? "",
      description: item.chipText?.trim() ?? "",
      features: item.features ?? [],
      ctaLabel: item.ctaLabel ?? "",
      isPopular: Boolean(item.isPopular),
    };
  }
  return {
    plan: item.plan,
    price: item.price,
    description: item.description,
    features: item.features,
    ctaLabel: item.ctaLabel,
    isPopular: item.isPopular,
  };
}

export interface PricingSectionProps {
  onOpenModal: () => void;
  pricingPlans: PRICING_PLANS_QUERY_RESULT;
}

export function PricingSection({ onOpenModal, pricingPlans }: PricingSectionProps) {
  const items: (SanityPricingPlan | HardcodedPlan)[] =
    pricingPlans.length > 0 ? pricingPlans : hardcodedPlans;

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
            <SectionLabel>PRICING</SectionLabel>
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
            Start free. Scale without surprises.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--muted)",
            }}
          >
            No upfront costs. Pay only for what you use, with predictable pricing
            and no egress fees.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const card = toPricingCardProps(item);
            return (
              <motion.div
                key={isSanityPlan(item) ? item._id : item.plan}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                <PricingCard {...card} onCtaClick={onOpenModal} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
