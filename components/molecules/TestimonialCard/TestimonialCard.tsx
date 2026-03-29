export interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatarSrc: string;
}

export function TestimonialCard({
  quote,
  name,
  title,
  avatarSrc,
}: TestimonialCardProps) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderLeft: "3px solid var(--primary)",
        borderRadius: 16,
        padding: 32,
        textAlign: "left" as const,
        position: "relative",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: 80,
          color: "rgba(61,220,132,0.2)",
          display: "block",
          lineHeight: 1,
          marginBottom: -24,
        }}
      >
        &ldquo;
      </span>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: 17,
          color: "var(--white)",
          lineHeight: 1.7,
          margin: 0,
          marginBottom: 32,
          position: "relative",
          zIndex: 1,
        }}
      >
        {quote}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <img
          src={avatarSrc}
          alt={name}
          width={48}
          height={48}
          style={{
            borderRadius: "50%",
            border: "2px solid var(--primary)",
            objectFit: "cover",
          }}
        />
        <div>
          <p
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              color: "var(--white)",
              margin: 0,
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 13,
              color: "var(--muted)",
              margin: 0,
            }}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
