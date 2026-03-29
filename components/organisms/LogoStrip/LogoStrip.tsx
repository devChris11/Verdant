"use client";

import { motion } from "motion/react";

const logos = [
  "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/logo-strip/Company=FeatherDev,%20Style=Badge,%20Dark%20mode=True.png",
  "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/logo-strip/Company=Ephemeral,%20Style=Badge,%20Dark%20mode=True.png",
  "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/logo-strip/Company=Capsule,%20Style=Badge,%20Dark%20mode=True.png",
  "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/logo-strip/Company=BuildingBlocks,%20Style=Badge,%20Dark%20mode=True.png",
  "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/logo-strip/Company=CloudWatch,%20Style=Badge,%20Dark%20mode=True.png",
  "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/logo-strip/Company=Acme%20Corp,%20Style=Badge,%20Dark%20mode=True.png",
];

export function LogoStrip() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-16 overflow-hidden"
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <p
        className="text-center text-sm mb-10"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--muted)",
        }}
      >
        Trusted by engineering teams at
      </p>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
              <img
                src={logo}
                alt="Company logo"
                className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
