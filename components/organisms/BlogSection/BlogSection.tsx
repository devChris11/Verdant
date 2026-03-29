"use client";

import { motion } from "motion/react";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { BlogCard } from "@/components/molecules/BlogCard";

export interface BlogSectionProps {
  onOpenModal: () => void;
}

const posts = [
  {
    coverSrc:
      "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/blog-cover-1.png",
    tag: "Infrastructure",
    title: "Why we chose Apache Kafka over RabbitMQ for high-throughput pipelines",
    date: "March 12, 2025",
    readTime: "6 min read",
  },
  {
    coverSrc:
      "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/blog-cover-2.png",
    tag: "Deep Dive",
    title: "Multi-cloud PostgreSQL: avoiding the pitfalls of cross-region replication",
    date: "February 28, 2025",
    readTime: "8 min read",
  },
  {
    coverSrc:
      "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/blog-cover-3.png",
    tag: "Open Source",
    title: "Open source sustainability: how Verdant funds core contributors",
    date: "February 10, 2025",
    readTime: "4 min read",
  },
];

export function BlogSection({ onOpenModal }: BlogSectionProps) {
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
            <SectionLabel>FROM THE BLOG</SectionLabel>
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
            Data engineering, decoded.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <BlogCard
                coverSrc={post.coverSrc}
                tag={post.tag}
                title={post.title}
                date={post.date}
                readTime={post.readTime}
                onReadMore={onOpenModal}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
