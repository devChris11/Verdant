"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { NavLink } from "@/components/molecules/NavLink";

export interface NavbarProps {
  onOpenModal: () => void;
}

const navLabels = ["Product", "Solutions", "Pricing", "Blog", "Docs"];

export function Navbar({ onOpenModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md border-b" : "bg-transparent"
      }`}
      style={{
        backgroundColor: isScrolled ? "rgba(10,15,10,0.85)" : "transparent",
        borderColor: isScrolled ? "var(--border)" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={onOpenModal}
          className="text-[22px] font-bold"
          style={{
            fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            color: "var(--primary)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          Verdant
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLabels.map((label) => (
            <NavLink key={label} label={label} onClick={onOpenModal} />
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={onOpenModal}>
            Sign in
          </Button>
          <Button variant="primary" size="sm" onClick={onOpenModal}>
            Request a Demo
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          style={{ color: "var(--white)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b"
            style={{
              backgroundColor: "rgba(10,15,10,0.95)",
              borderColor: "var(--border)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLabels.map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => {
                    onOpenModal();
                    setIsMobileOpen(false);
                  }}
                  className="text-left text-sm py-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "var(--muted)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {label}
                </button>
              ))}
              <div
                className="flex flex-col gap-3 pt-4 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  fullWidth
                  onClick={() => {
                    onOpenModal();
                    setIsMobileOpen(false);
                  }}
                >
                  Sign in
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  onClick={() => {
                    onOpenModal();
                    setIsMobileOpen(false);
                  }}
                >
                  Request a Demo
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
