"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  Zap,
  Database,
  Cpu,
  Cloud,
  BarChart2,
  ShieldCheck,
  PlugZap,
  Layers,
  Rocket,
  Check,
  Info,
} from "lucide-react";

// ============================================================================
// TYPES
// ============================================================================

interface SectionProps {
  openModal: () => void;
}

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Step {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

interface Testimonial {
  avatar: string;
  name: string;
  title: string;
  quote: string;
}

interface PricingPlan {
  name: string;
  price: string;
  tag: string | null;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

interface BlogPost {
  image: string;
  tag: string;
  title: string;
  date: string;
  readTime: string;
}

// ============================================================================
// INLINE SVG ICONS (Brand icons not available in lucide-react v1)
// ============================================================================

const GitHubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const TwitterIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ============================================================================
// SECTION 1: STICKY NAVIGATION
// ============================================================================

function Navigation({ openModal }: SectionProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Product", "Solutions", "Pricing", "Blog", "Docs"];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(10,15,10,0.85)" : "transparent",
        borderColor: scrolled ? "#1E2E1E" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={openModal}
          className="text-[22px] font-bold"
          style={{ fontFamily: "'Poppins', sans-serif", color: "#3DDC84" }}
        >
          Verdant
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={openModal}
              className="text-sm transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#8A9E8A",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F0FFF0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8A9E8A")}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={openModal}
            className="px-4 py-2 text-sm rounded-lg border transition-colors"
            style={{
              fontFamily: "'Inter', sans-serif",
              borderColor: "#1E2E1E",
              color: "#F0FFF0",
            }}
          >
            Sign in
          </button>
          <button
            onClick={openModal}
            className="px-4 py-2 text-sm rounded-lg transition-colors"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              backgroundColor: "#3DDC84",
              color: "#0A0F0A",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#2AB369")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#3DDC84")
            }
          >
            Request a Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ color: "#F0FFF0" }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b"
            style={{
              backgroundColor: "rgba(10,15,10,0.95)",
              borderColor: "#1E2E1E",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    openModal();
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-sm py-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#8A9E8A",
                  }}
                >
                  {link}
                </button>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t" style={{ borderColor: "#1E2E1E" }}>
                <button
                  onClick={() => {
                    openModal();
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-2 text-sm rounded-lg border"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    borderColor: "#1E2E1E",
                    color: "#F0FFF0",
                  }}
                >
                  Sign in
                </button>
                <button
                  onClick={() => {
                    openModal();
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-2 text-sm rounded-lg"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    backgroundColor: "#3DDC84",
                    color: "#0A0F0A",
                  }}
                >
                  Request a Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ============================================================================
// SECTION 2: HERO
// ============================================================================

function Hero({ openModal }: SectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    teamSize: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openModal();
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background placeholder */}
      <div
        id="threads-bg"
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: "#0A0F0A" }}
      />
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(61,220,132,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 min-h-screen flex items-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center">
          {/* Left Side - Content */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  backgroundColor: "rgba(61,220,132,0.08)",
                  border: "1px solid #1E2E1E",
                  color: "#3DDC84",
                }}
              >
                <span style={{ fontSize: "14px" }}>&#x2B21;</span> Open-source · Apache 2.0
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[64px] leading-[1.1]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                color: "#F0FFF0",
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
                color: "#8A9E8A",
              }}
            >
              Verdant gives engineering teams a fully managed open-source data
              platform — Kafka, PostgreSQL, Redis, and more — deployed across
              any cloud in minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={openModal}
                className="px-6 py-3 rounded-lg transition-colors"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  backgroundColor: "#3DDC84",
                  color: "#0A0F0A",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#2AB369")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#3DDC84")
                }
              >
                Request a Demo
              </button>
              <button
                onClick={openModal}
                className="px-6 py-3 rounded-lg border flex items-center gap-2 transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  borderColor: "#1E2E1E",
                  color: "#F0FFF0",
                }}
              >
                <GitHubIcon size={16} />
                View on GitHub
              </button>
            </motion.div>
          </div>

          {/* Right Side - Form */}
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
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                color: "#F0FFF0",
              }}
            >
              Request a Demo
            </h2>
            <p
              className="text-sm mb-6"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#8A9E8A",
              }}
            >
              Get a personalized walkthrough from our team.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="w-full px-4 py-3 rounded-[10px] text-sm outline-none transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid #1E2E1E",
                  color: "#F0FFF0",
                }}
              />
              <input
                type="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-[10px] text-sm outline-none transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid #1E2E1E",
                  color: "#F0FFF0",
                }}
              />
              <input
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full px-4 py-3 rounded-[10px] text-sm outline-none transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid #1E2E1E",
                  color: "#F0FFF0",
                }}
              />
              <select
                value={formData.teamSize}
                onChange={(e) =>
                  setFormData({ ...formData, teamSize: e.target.value })
                }
                className="w-full px-4 py-3 rounded-[10px] text-sm outline-none transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid #1E2E1E",
                  color: formData.teamSize ? "#F0FFF0" : "#8A9E8A",
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
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-[10px] text-sm outline-none resize-none transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid #1E2E1E",
                  color: "#F0FFF0",
                }}
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg transition-colors"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  backgroundColor: "#3DDC84",
                  color: "#0A0F0A",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#2AB369")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#3DDC84")
                }
              >
                Get in Touch
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 3: LOGO STRIP
// ============================================================================

function LogoStrip() {
  const logos = [
    "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/logo-strip/Company=FeatherDev,%20Style=Badge,%20Dark%20mode=False.svg",
    "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/logo-strip/Company=Ephemeral,%20Style=Badge,%20Dark%20mode=False.svg",
    "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/logo-strip/Company=Capsule,%20Style=Badge,%20Dark%20mode=False.svg",
    "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/logo-strip/Company=BuildingBlocks,%20Style=Badge,%20Dark%20mode=False.svg",
    "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/logo-strip/Company=CloudWatch,%20Style=Badge,%20Dark%20mode=False.svg",
    "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/logo-strip/Company=Acme%20Corp,%20Style=Badge,%20Dark%20mode=False.svg",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-16 overflow-hidden"
      style={{ borderTop: "1px solid #1E2E1E", borderBottom: "1px solid #1E2E1E" }}
    >
      <p
        className="text-center text-sm mb-10"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "#8A9E8A",
        }}
      >
        Trusted by engineering teams at
      </p>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
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

// ============================================================================
// SECTION 4: FEATURES GRID
// ============================================================================

function FeaturesGrid({ openModal }: SectionProps) {
  const features: FeatureCard[] = [
    {
      icon: <Zap size={20} style={{ color: "#3DDC84" }} />,
      title: "Apache Kafka",
      description:
        "Production-ready event streaming with guaranteed delivery and millisecond latency.",
    },
    {
      icon: <Database size={20} style={{ color: "#3DDC84" }} />,
      title: "PostgreSQL",
      description:
        "Fully managed relational databases with automated backups and point-in-time recovery.",
    },
    {
      icon: <Cpu size={20} style={{ color: "#3DDC84" }} />,
      title: "Redis",
      description:
        "In-memory caching and message brokering to keep your applications blazing fast.",
    },
    {
      icon: <Cloud size={20} style={{ color: "#3DDC84" }} />,
      title: "Multi-cloud",
      description:
        "Deploy across AWS, GCP, or Azure. Switch or spread workloads without vendor lock-in.",
    },
    {
      icon: <BarChart2 size={20} style={{ color: "#3DDC84" }} />,
      title: "Observability",
      description:
        "Real-time metrics, alerts, and logs unified in one dashboard. Know before your users do.",
    },
    {
      icon: <ShieldCheck size={20} style={{ color: "#3DDC84" }} />,
      title: "Security First",
      description:
        "SOC 2 Type II, encryption at rest and in transit, VPC peering, and RBAC out of the box.",
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#0A0F0A" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-xs uppercase tracking-[2px] mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              color: "#3DDC84",
            }}
          >
            PLATFORM CAPABILITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[48px] mb-6"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              color: "#F0FFF0",
            }}
          >
            Everything your data stack needs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#8A9E8A",
            }}
          >
            From event streaming to caching to relational databases — Verdant
            manages the complexity so your team can focus on building.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.button
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              onClick={openModal}
              className="p-7 rounded-2xl text-left transition-all duration-300 group"
              style={{
                backgroundColor: "#111812",
                border: "1px solid #1E2E1E",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(61,220,132,0.08)";
                e.currentTarget.style.borderColor = "rgba(61,220,132,0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#1E2E1E";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(61,220,132,0.1)" }}
              >
                {feature.icon}
              </div>
              <h3
                className="text-lg mb-3"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  color: "#F0FFF0",
                }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#8A9E8A",
                }}
              >
                {feature.description}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 5: HOW IT WORKS
// ============================================================================

function HowItWorks({ openModal }: SectionProps) {
  const steps: Step[] = [
    {
      number: "01",
      icon: <PlugZap size={24} style={{ color: "#3DDC84" }} />,
      title: "Connect your cloud",
      description:
        "Link your AWS, GCP, or Azure account. Verdant provisions resources directly in your VPC.",
    },
    {
      number: "02",
      icon: <Layers size={24} style={{ color: "#3DDC84" }} />,
      title: "Choose your services",
      description:
        "Pick from Kafka, PostgreSQL, Redis, OpenSearch, and more. Configure in the UI or via Terraform.",
    },
    {
      number: "03",
      icon: <Rocket size={24} style={{ color: "#3DDC84" }} />,
      title: "Ship with confidence",
      description:
        "Your services go live with SLAs, monitoring, and auto-scaling built in from day one.",
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#0A0F0A" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-xs uppercase tracking-[2px] mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              color: "#3DDC84",
            }}
          >
            HOW IT WORKS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[48px]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              color: "#F0FFF0",
            }}
          >
            From zero to production in three steps
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Dashed line connector (desktop only) */}
          <div
            className="hidden lg:block absolute top-[80px] left-[20%] right-[20%] h-px"
            style={{
              borderTop: "2px dashed #1E2E1E",
            }}
          />

          {steps.map((step, index) => (
            <motion.button
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
              onClick={openModal}
              className="relative flex flex-col items-center text-center p-6"
            >
              <span
                className="text-6xl mb-6"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  color: "rgba(61,220,132,0.15)",
                }}
              >
                {step.number}
              </span>
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(61,220,132,0.1)" }}
              >
                {step.icon}
              </div>
              <h3
                className="text-xl mb-3"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  color: "#F0FFF0",
                }}
              >
                {step.title}
              </h3>
              <p
                className="text-[15px] leading-relaxed"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#8A9E8A",
                }}
              >
                {step.description}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 6: TESTIMONIALS
// ============================================================================

function Testimonials({ openModal }: SectionProps) {
  const testimonials: Testimonial[] = [
    {
      avatar:
        "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/testimonial-avatar-1.png",
      name: "Marcus Webb",
      title: "Staff Engineer, FeatherDev",
      quote:
        "We migrated three Kafka clusters to Verdant in a single sprint. What used to take weeks of ops work is now a config file.",
    },
    {
      avatar:
        "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/testimonial-avatar-2.png",
      name: "Yuki Tanaka",
      title: "CTO, Capsule",
      quote:
        "Verdant's multi-cloud support meant we could run PostgreSQL in AWS and Redis in GCP without any custom infrastructure code.",
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#0A0F0A" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-xs uppercase tracking-[2px] mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              color: "#3DDC84",
            }}
          >
            CUSTOMER STORIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[48px]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              color: "#F0FFF0",
            }}
          >
            Built on Verdant, trusted in production
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
              onClick={openModal}
              className="relative p-8 rounded-2xl text-left"
              style={{
                backgroundColor: "#111812",
                border: "1px solid #1E2E1E",
                borderLeft: "3px solid #3DDC84",
              }}
            >
              <span
                className="absolute top-4 left-6 text-7xl leading-none"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  color: "rgba(61,220,132,0.2)",
                }}
              >
                &ldquo;
              </span>
              <p
                className="text-[17px] leading-[1.7] mb-8 relative z-10 pt-8"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#F0FFF0",
                }}
              >
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  style={{ border: "2px solid #3DDC84" }}
                />
                <div>
                  <p
                    className="text-[15px]"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      color: "#F0FFF0",
                    }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-[13px]"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#8A9E8A",
                    }}
                  >
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 7: PRICING TEASER
// ============================================================================

function PricingTeaser({ openModal }: SectionProps) {
  const plans: PricingPlan[] = [
    {
      name: "Hobby",
      price: "Free",
      tag: null,
      features: ["1 service", "5GB storage", "Community support"],
      cta: "Get started free",
    },
    {
      name: "Pro",
      price: "$99/mo",
      tag: "Most Popular",
      features: [
        "Unlimited services",
        "500GB storage",
        "Email support",
        "99.9% SLA",
      ],
      cta: "Start free trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      tag: null,
      features: [
        "Dedicated clusters",
        "Custom SLA",
        "SAML SSO",
        "Dedicated support",
      ],
      cta: "Contact sales",
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#0A0F0A" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-xs uppercase tracking-[2px] mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              color: "#3DDC84",
            }}
          >
            PRICING
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[48px] mb-6"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              color: "#F0FFF0",
            }}
          >
            Start free. Scale without surprises.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#8A9E8A",
            }}
          >
            No upfront costs. Pay only for what you use, with predictable
            pricing and no egress fees.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl flex flex-col"
              style={{
                backgroundColor: "#111812",
                border: plan.highlighted
                  ? "1px solid #3DDC84"
                  : "1px solid #1E2E1E",
                boxShadow: plan.highlighted
                  ? "0 0 40px rgba(61,220,132,0.12)"
                  : "none",
                transform: plan.highlighted ? "scale(1.02)" : "scale(1)",
              }}
            >
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <h3
                    className="text-xl"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      color: "#F0FFF0",
                    }}
                  >
                    {plan.name}
                  </h3>
                  {plan.tag && (
                    <span
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        backgroundColor: "#3DDC84",
                        color: "#0A0F0A",
                      }}
                    >
                      {plan.tag}
                    </span>
                  )}
                </div>
                <p
                  className="text-4xl"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    color: "#F0FFF0",
                  }}
                >
                  {plan.price}
                </p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check size={16} style={{ color: "#3DDC84" }} />
                    <span
                      className="text-sm"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "#8A9E8A",
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={openModal}
                className="w-full py-3 rounded-lg transition-colors"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  backgroundColor: plan.highlighted ? "#3DDC84" : "transparent",
                  color: plan.highlighted ? "#0A0F0A" : "#F0FFF0",
                  border: plan.highlighted ? "none" : "1px solid #1E2E1E",
                }}
                onMouseEnter={(e) => {
                  if (plan.highlighted) {
                    e.currentTarget.style.backgroundColor = "#2AB369";
                  } else {
                    e.currentTarget.style.borderColor = "#3DDC84";
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.highlighted) {
                    e.currentTarget.style.backgroundColor = "#3DDC84";
                  } else {
                    e.currentTarget.style.borderColor = "#1E2E1E";
                  }
                }}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 8: BLOG PREVIEW
// ============================================================================

function BlogPreview({ openModal }: SectionProps) {
  const posts: BlogPost[] = [
    {
      image:
        "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/blog-cover-1.png",
      tag: "Infrastructure",
      title:
        "Why we chose Apache Kafka over RabbitMQ for high-throughput pipelines",
      date: "March 12, 2025",
      readTime: "6 min read",
    },
    {
      image:
        "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/blog-cover-2.png",
      tag: "Deep Dive",
      title:
        "Multi-cloud PostgreSQL: avoiding the pitfalls of cross-region replication",
      date: "February 28, 2025",
      readTime: "8 min read",
    },
    {
      image:
        "https://ik.imagekit.io/ChristoFernando/Case%20Study%20Projects/Verdant/blog-cover-3.png",
      tag: "Open Source",
      title:
        "Open source sustainability: how Verdant funds core contributors",
      date: "February 10, 2025",
      readTime: "4 min read",
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#0A0F0A" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-xs uppercase tracking-[2px] mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              color: "#3DDC84",
            }}
          >
            FROM THE BLOG
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[48px]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              color: "#F0FFF0",
            }}
          >
            Data engineering, decoded.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden group transition-all duration-300"
              style={{
                backgroundColor: "#111812",
                border: "1px solid #1E2E1E",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div className="h-[200px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs mb-4"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    backgroundColor: "rgba(61,220,132,0.08)",
                    color: "#3DDC84",
                  }}
                >
                  {post.tag}
                </span>
                <h3
                  className="text-[17px] leading-[1.4] mb-3"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    color: "#F0FFF0",
                  }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-[13px] mb-4"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#8A9E8A",
                  }}
                >
                  {post.date} · {post.readTime}
                </p>
                <button
                  onClick={openModal}
                  className="text-sm transition-colors"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    color: "#3DDC84",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#2AB369")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#3DDC84")
                  }
                >
                  Read article &rarr;
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 9: FINAL CTA BANNER
// ============================================================================

function FinalCTA({ openModal }: SectionProps) {
  return (
    <section
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: "#0A0F0A" }}
    >
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
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              color: "#F0FFF0",
            }}
          >
            Your data deserves better infrastructure.
          </h2>
          <p
            className="text-lg mb-10 max-w-xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#8A9E8A",
            }}
          >
            Join 2,000+ engineering teams who&apos;ve moved their data stack to
            Verdant.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openModal}
              className="px-8 py-4 rounded-lg transition-colors"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                backgroundColor: "#3DDC84",
                color: "#0A0F0A",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#2AB369")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#3DDC84")
              }
            >
              Request a Demo
            </button>
            <button
              onClick={openModal}
              className="px-8 py-4 rounded-lg border transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                borderColor: "#1E2E1E",
                color: "#F0FFF0",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#3DDC84")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#1E2E1E")
              }
            >
              Read the Docs
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 10: FOOTER
// ============================================================================

function Footer({ openModal }: SectionProps) {
  const productLinks = ["Features", "Pricing", "Changelog", "Roadmap"];
  const companyLinks = ["About", "Blog", "Careers", "Contact"];

  return (
    <footer
      className="pt-16 pb-10"
      style={{
        backgroundColor: "#080D08",
        borderTop: "1px solid #1E2E1E",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <button
              onClick={openModal}
              className="text-xl mb-4"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                color: "#3DDC84",
              }}
            >
              Verdant
            </button>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#8A9E8A",
              }}
            >
              Open-source data infrastructure for teams that move fast.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h4
              className="text-sm mb-4"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                color: "#F0FFF0",
              }}
            >
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={openModal}
                    className="text-sm transition-colors"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#8A9E8A",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#F0FFF0")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#8A9E8A")
                    }
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4
              className="text-sm mb-4"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                color: "#F0FFF0",
              }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={openModal}
                    className="text-sm transition-colors"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#8A9E8A",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#F0FFF0")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#8A9E8A")
                    }
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4
              className="text-sm mb-4"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                color: "#F0FFF0",
              }}
            >
              Connect
            </h4>
            <div className="flex gap-4">
              <button
                onClick={openModal}
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  color: "#8A9E8A",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(61,220,132,0.1)";
                  e.currentTarget.style.color = "#3DDC84";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255,255,255,0.04)";
                  e.currentTarget.style.color = "#8A9E8A";
                }}
              >
                <GitHubIcon size={20} />
              </button>
              <button
                onClick={openModal}
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  color: "#8A9E8A",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(61,220,132,0.1)";
                  e.currentTarget.style.color = "#3DDC84";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255,255,255,0.04)";
                  e.currentTarget.style.color = "#8A9E8A";
                }}
              >
                <TwitterIcon size={20} />
              </button>
              <button
                onClick={openModal}
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  color: "#8A9E8A",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(61,220,132,0.1)";
                  e.currentTarget.style.color = "#3DDC84";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255,255,255,0.04)";
                  e.currentTarget.style.color = "#8A9E8A";
                }}
              >
                <LinkedInIcon size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid #1E2E1E" }}
        >
          <p
            className="text-[13px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#8A9E8A",
            }}
          >
            &copy; 2025 Verdant, Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <button
              onClick={openModal}
              className="text-[13px] transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#8A9E8A",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F0FFF0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8A9E8A")}
            >
              Privacy Policy
            </button>
            <span style={{ color: "#8A9E8A" }}>·</span>
            <button
              onClick={openModal}
              className="text-[13px] transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#8A9E8A",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F0FFF0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8A9E8A")}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// GLOBAL MODAL
// ============================================================================

function Modal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(8px)",
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-[420px] p-10 rounded-[20px] text-center"
            style={{
              backgroundColor: "#111812",
              border: "1px solid #1E2E1E",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "rgba(61,220,132,0.1)" }}
            >
              <Info size={32} style={{ color: "#3DDC84" }} />
            </div>
            <h3
              className="text-[22px] mb-4"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                color: "#F0FFF0",
              }}
            >
              Not Available in Preview
            </h3>
            <p
              className="text-[15px] mb-8 leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#8A9E8A",
              }}
            >
              This feature isn&apos;t available in this preview. Verdant is
              currently in private beta — join the waitlist to get early
              access.
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-lg transition-colors"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                backgroundColor: "#3DDC84",
                color: "#0A0F0A",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#2AB369")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#3DDC84")
              }
            >
              Got it
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;600&display=swap');
      `}</style>

      <Navigation openModal={openModal} />
      <Hero openModal={openModal} />
      <LogoStrip />
      <FeaturesGrid openModal={openModal} />
      <HowItWorks openModal={openModal} />
      <Testimonials openModal={openModal} />
      <PricingTeaser openModal={openModal} />
      <BlogPreview openModal={openModal} />
      <FinalCTA openModal={openModal} />
      <Footer openModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
