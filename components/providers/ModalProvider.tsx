"use client";

import { useState } from "react";
import { Navbar } from "@/components/organisms/Navbar";
import { HeroSection } from "@/components/organisms/HeroSection";
import { LogoStrip } from "@/components/organisms/LogoStrip";
import { FeaturesSection } from "@/components/organisms/FeaturesSection";
import { HowItWorksSection } from "@/components/organisms/HowItWorksSection";
import { TestimonialsSection } from "@/components/organisms/TestimonialsSection";
import { PricingSection } from "@/components/organisms/PricingSection";
import { BlogSection } from "@/components/organisms/BlogSection";
import { CTABanner } from "@/components/organisms/CTABanner";
import { Footer } from "@/components/organisms/Footer";
import { Modal } from "@/components/molecules/Modal";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface TestimonialData {
  _id: string;
  fullName: string;
  jobTitle: string;
  avatar?: SanityImage | null;
  quote: string;
}

export interface PricingPlanData {
  _id: string;
  priceHeading: string;
  /** Optional in Studio; shown under the plan name when set. */
  chipText?: string | null;
  price: string;
  features?: string[] | null;
  ctaLabel: string;
  isPopular?: boolean | null;
}

export interface BlogPostData {
  _id: string;
  blogTitle: string;
  /** From GROQ: `"blogSlug": blogSlug.current` */
  blogSlug?: string | null;
  coverImage?: SanityImage | null;
  tag: string;
  publishedAt: string;
  readTime: string;
}

export interface ModalProviderProps {
  children?: React.ReactNode;
  testimonials: TestimonialData[];
  pricingPlans: PricingPlanData[];
  blogPosts: BlogPostData[];
}

export function ModalProvider({ testimonials, pricingPlans, blogPosts }: ModalProviderProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <main>
      <Navbar onOpenModal={openModal} />
      <HeroSection onOpenModal={openModal} />
      <LogoStrip />
      <FeaturesSection />
      <HowItWorksSection onOpenModal={openModal} />
      <TestimonialsSection onOpenModal={openModal} testimonials={testimonials} />
      <PricingSection onOpenModal={openModal} pricingPlans={pricingPlans} />
      <BlogSection onOpenModal={openModal} blogPosts={blogPosts} />
      <CTABanner onOpenModal={openModal} />
      <Footer onOpenModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
