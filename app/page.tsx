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

export default function Home() {
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
      <TestimonialsSection onOpenModal={openModal} />
      <PricingSection onOpenModal={openModal} />
      <BlogSection onOpenModal={openModal} />
      <CTABanner onOpenModal={openModal} />
      <Footer onOpenModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
