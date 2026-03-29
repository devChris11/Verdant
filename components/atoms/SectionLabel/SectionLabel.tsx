export interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={className}
      style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: 11,
        letterSpacing: 2,
        color: "var(--primary)",
        textTransform: "uppercase",
        display: "block",
      }}
    >
      {children}
    </span>
  );
}
