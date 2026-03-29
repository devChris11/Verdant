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
import type { TESTIMONIALS_QUERY_RESULT, PRICING_PLANS_QUERY_RESULT, BLOG_POSTS_QUERY_RESULT } from "@/sanity.types";

export interface ModalProviderProps {
  children?: React.ReactNode;
  testimonials: TESTIMONIALS_QUERY_RESULT;
  pricingPlans: PRICING_PLANS_QUERY_RESULT;
  blogPosts: BLOG_POSTS_QUERY_RESULT;
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
