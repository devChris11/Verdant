"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";

export interface HeroSectionProps {
  onOpenModal: () => void;
}

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    teamSize: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenModal();
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      <div
        id="threads-bg"
        className="absolute inset-0 -z-10"
        style={{ background: "var(--bg)" }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(61,220,132,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 min-h-screen flex items-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center">
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <Badge variant="primary">
                <span style={{ fontSize: 14 }}>&#x2B21;</span> Open-source · Apache 2.0
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[64px] leading-[1.1]"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                fontWeight: 700,
                color: "var(--white)",
              }}
            >
              Stream, Store, and Scale Your Data Without Limits
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg max-w-[480px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "var(--muted)",
              }}
            >
              Verdant gives engineering teams a fully managed open-source data platform — Kafka,
              PostgreSQL, Redis, and more — deployed across any cloud in minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" size="md" onClick={onOpenModal}>
                Request a Demo
              </Button>
              <Button variant="ghost" size="md" onClick={onOpenModal}>
                <GitHubIcon size={16} />
                View on GitHub
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="p-8 rounded-[20px]"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h2
              className="text-2xl mb-2"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                fontWeight: 600,
                color: "var(--white)",
              }}
            >
              Request a Demo
            </h2>
            <p
              className="text-sm mb-6"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "var(--muted)",
              }}
            >
              Get a personalized walkthrough from our team.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 rounded-[10px] text-sm outline-none transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border)",
                  color: "var(--white)",
                }}
              />
              <input
                type="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-[10px] text-sm outline-none transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border)",
                  color: "var(--white)",
                }}
              />
              <input
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-[10px] text-sm outline-none transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border)",
                  color: "var(--white)",
                }}
              />
              <select
                value={formData.teamSize}
                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                className="w-full px-4 py-3 rounded-[10px] text-sm outline-none transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border)",
                  color: formData.teamSize ? "var(--white)" : "var(--muted)",
                }}
              >
                <option value="" disabled>
                  Team Size
                </option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="200+">200+</option>
              </select>
              <textarea
                placeholder="Message (optional)"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-[10px] text-sm outline-none resize-none transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border)",
                  color: "var(--white)",
                }}
              />
              <Button type="submit" variant="primary" fullWidth>
                Get in Touch
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
