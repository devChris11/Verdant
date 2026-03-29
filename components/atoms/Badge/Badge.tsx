export interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "muted" | "popular";
  className?: string;
}

export function Badge({ children, variant = "primary", className }: BadgeProps) {
  const base: React.CSSProperties = {
    borderRadius: 99,
    padding: "4px 12px",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
  };

  const styles: React.CSSProperties =
    variant === "primary"
      ? {
          ...base,
          background: "rgba(61,220,132,0.08)",
          border: "1px solid rgba(61,220,132,0.2)",
          color: "var(--primary)",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: 12,
        }
      : variant === "muted"
        ? {
            ...base,
            background: "rgba(61,220,132,0.08)",
            border: "1px solid var(--border)",
            color: "var(--muted)",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 12,
          }
        : {
            ...base,
            background: "var(--primary)",
            color: "var(--bg)",
            fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: 11,
            border: "none",
          };

  return (
    <span className={className} style={styles}>
      {children}
    </span>
  );
}
