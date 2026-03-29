"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";

export interface PricingCardProps {
  plan: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  isPopular?: boolean;
  onCtaClick?: () => void;
}

export function PricingCard({
  plan,
  price,
  description,
  features,
  ctaLabel,
  isPopular,
  onCtaClick,
}: PricingCardProps) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: isPopular ? "1px solid var(--primary)" : "1px solid var(--border)",
        borderRadius: 16,
        padding: 32,
        display: "flex",
        flexDirection: "column",
        boxShadow: isPopular ? "0 0 40px rgba(61,220,132,0.12)" : "none",
        transform: isPopular ? "scale(1.02)" : "scale(1)",
      }}
    >
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <h3
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: 20,
              color: "var(--white)",
              margin: 0,
            }}
          >
            {plan}
          </h3>
          {isPopular ? <Badge variant="popular">Most Popular</Badge> : null}
        </div>
        {description ? (
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              color: "var(--muted)",
              margin: "0 0 16px 0",
            }}
          >
            {description}
          </p>
        ) : null}
        <p
          style={{
            fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: 36,
            lineHeight: 1,
            color: "var(--white)",
            margin: 0,
          }}
        >
          {price}
        </p>
      </div>

      <ul style={{ flex: 1, listStyle: "none", padding: 0, margin: "0 0 32px 0" }}>
        {features.map((feature) => (
          <li
            key={feature}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 12,
            }}
          >
            <Check size={16} color="var(--primary)" />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                color: "var(--muted)",
              }}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={isPopular ? "primary" : "ghost"}
        fullWidth
        onClick={onCtaClick}
      >
        {ctaLabel}
      </Button>
    </div>
  );
}
