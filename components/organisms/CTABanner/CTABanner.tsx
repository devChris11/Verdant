"use client";

import { motion } from "motion/react";
import { Button } from "@/components/atoms/Button";

export interface CTABannerProps {
  onOpenModal: () => void;
}

export function CTABanner({ onOpenModal }: CTABannerProps) {
  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(61,220,132,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-[56px] mb-6"
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 700,
              color: "var(--white)",
            }}
          >
            Your data deserves better infrastructure.
          </h2>
          <p
            className="text-lg mb-10 max-w-xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--muted)",
            }}
          >
            Join 2,000+ engineering teams who&apos;ve moved their data stack to Verdant.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" onClick={onOpenModal}>
              Request a Demo
            </Button>
            <Button variant="ghost" size="lg" onClick={onOpenModal}>
              Read the Docs
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
