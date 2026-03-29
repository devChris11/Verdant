"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/atoms/Badge";

export interface BlogCardProps {
  coverSrc: string;
  tag: string;
  title: string;
  date: string;
  readTime: string;
  onReadMore?: () => void;
}

export function BlogCard({
  coverSrc,
  tag,
  title,
  date,
  readTime,
  onReadMore,
}: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <div style={{ height: 200, overflow: "hidden" }}>
        <img
          src={coverSrc}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ padding: 24 }}>
        <div style={{ marginBottom: 16 }}>
          <Badge variant="muted">{tag}</Badge>
        </div>
        <h3
          style={{
            fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: 17,
            color: "var(--white)",
            lineHeight: 1.4,
            margin: "0 0 12px 0",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 13,
            color: "var(--muted)",
            margin: "0 0 16px 0",
          }}
        >
          {date} · {readTime}
        </p>
        <button
          type="button"
          onClick={onReadMore}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 14,
            color: "var(--primary)",
            cursor: "pointer",
            background: "none",
            border: "none",
            padding: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--primary-dark)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--primary)";
          }}
        >
          Read article →
        </button>
      </div>
    </motion.div>
  );
}
