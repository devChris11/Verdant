"use client";

import { SocialIcon } from "@/components/atoms/SocialIcon";

export interface FooterProps {
  onOpenModal: () => void;
}

const productLinks = ["Features", "Pricing", "Changelog", "Roadmap"];
const companyLinks = ["About", "Blog", "Careers", "Contact"];

export function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer
      className="pt-16 pb-10"
      style={{
        backgroundColor: "#080D08",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <button
              type="button"
              onClick={onOpenModal}
              className="text-xl mb-4"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                fontWeight: 700,
                color: "var(--primary)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "block",
              }}
            >
              Verdant
            </button>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "var(--muted)",
              }}
            >
              Open-source data infrastructure for teams that move fast.
            </p>
          </div>

          <div>
            <h4
              className="text-sm mb-4"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                fontWeight: 600,
                color: "var(--white)",
              }}
            >
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    onClick={onOpenModal}
                    className="text-sm transition-colors"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "var(--muted)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--white)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--muted)";
                    }}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-sm mb-4"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                fontWeight: 600,
                color: "var(--white)",
              }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    onClick={onOpenModal}
                    className="text-sm transition-colors"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "var(--muted)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--white)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--muted)";
                    }}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-sm mb-4"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                fontWeight: 600,
                color: "var(--white)",
              }}
            >
              Connect
            </h4>
            <div className="flex gap-4">
              <SocialIcon platform="github" onClick={onOpenModal} />
              <SocialIcon platform="twitter" onClick={onOpenModal} />
              <SocialIcon platform="linkedin" onClick={onOpenModal} />
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p
            className="text-[13px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--muted)",
            }}
          >
            &copy; 2025 Verdant, Inc. All rights reserved.
          </p>
          <div className="flex gap-4 items-center">
            <button
              type="button"
              onClick={onOpenModal}
              className="text-[13px] transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "var(--muted)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--white)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--muted)";
              }}
            >
              Privacy Policy
            </button>
            <span style={{ color: "var(--muted)" }}>·</span>
            <button
              type="button"
              onClick={onOpenModal}
              className="text-[13px] transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "var(--muted)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--white)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--muted)";
              }}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
