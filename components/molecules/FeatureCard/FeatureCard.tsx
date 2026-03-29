"use client";

import { motion } from "motion/react";

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: 28,
        textAlign: "left" as const,
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          background: "rgba(61,220,132,0.1)",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--primary)",
          marginBottom: 20,
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: 18,
          color: "var(--white)",
          marginBottom: 12,
          marginTop: 0,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: 14,
          color: "var(--muted)",
          lineHeight: 1.625,
          margin: 0,
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}
