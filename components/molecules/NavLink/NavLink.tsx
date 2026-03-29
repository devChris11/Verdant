"use client";

export interface NavLinkProps {
  label: string;
  onClick?: () => void;
}

export function NavLink({ label, onClick }: NavLinkProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: "transparent",
        border: "none",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: 15,
        color: "var(--muted)",
        cursor: "pointer",
        transition: "color 0.2s ease",
        textDecoration: "none",
        padding: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--white)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--muted)";
      }}
    >
      {label}
    </button>
  );
}
