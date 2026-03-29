"use client";

import { motion } from "motion/react";

export interface ButtonProps {
  variant: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, React.CSSProperties> = {
  sm: { padding: "8px 16px", fontSize: 14 },
  md: { padding: "12px 24px", fontSize: 15 },
  lg: { padding: "14px 32px", fontSize: 16 },
};

export function Button({
  variant,
  size = "md",
  children,
  onClick,
  fullWidth,
  disabled,
  className,
  type = "button",
}: ButtonProps) {
  const base: React.CSSProperties = {
    borderRadius: 10,
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 0.2s ease",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontWeight: 600,
    width: fullWidth ? "100%" : undefined,
    opacity: disabled ? 0.6 : 1,
    ...sizeStyles[size],
  };

  const variantBase: React.CSSProperties =
    variant === "primary"
      ? {
          background: "var(--primary)",
          color: "var(--bg)",
          fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
          border: "none",
        }
      : variant === "ghost"
        ? {
            background: "transparent",
            border: "1px solid var(--border)",
            color: "var(--white)",
            fontFamily: "'Inter', sans-serif",
          }
        : {
            background: "transparent",
            border: "1px solid var(--primary)",
            color: "var(--primary)",
            fontFamily: "'Inter', sans-serif",
          };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === "primary") el.style.background = "var(--primary-dark)";
    if (variant === "ghost") el.style.borderColor = "var(--primary)";
    if (variant === "outline") el.style.background = "rgba(61,220,132,0.08)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === "primary") el.style.background = "var(--primary)";
    if (variant === "ghost") el.style.borderColor = "var(--border)";
    if (variant === "outline") el.style.background = "transparent";
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
      style={{ ...base, ...variantBase }}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.button>
  );
}
