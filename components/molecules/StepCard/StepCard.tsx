export interface StepCardProps {
  stepNumber: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function StepCard({ stepNumber, icon, title, description }: StepCardProps) {
  const label = String(stepNumber).padStart(2, "0");

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: 24,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: 64,
          color: "rgba(61,220,132,0.15)",
          marginBottom: 24,
          lineHeight: 1,
        }}
      >
        {label}
      </span>
      <div
        style={{
          width: 48,
          height: 48,
          background: "rgba(61,220,132,0.1)",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--primary)",
          marginBottom: 20,
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: 20,
          color: "var(--white)",
          margin: "0 0 12px 0",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: 15,
          color: "var(--muted)",
          lineHeight: 1.625,
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}
