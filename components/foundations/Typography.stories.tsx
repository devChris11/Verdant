import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Foundations/Typography",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const rows: {
  label: string;
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  color: string;
  sample: string;
  letterSpacing?: number;
  textTransform?: "uppercase";
}[] = [
  {
    label: "Display / 64px",
    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
    fontSize: 64,
    fontWeight: 700,
    color: "var(--white)",
    sample: "Stream, Store, Scale",
  },
  {
    label: "Heading 1 / 48px",
    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
    fontSize: 48,
    fontWeight: 700,
    color: "var(--white)",
    sample: "Everything your data stack needs",
  },
  {
    label: "Heading 2 / 40px",
    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
    fontSize: 40,
    fontWeight: 700,
    color: "var(--white)",
    sample: "From zero to production",
  },
  {
    label: "Heading 3 / 24px",
    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
    fontSize: 24,
    fontWeight: 600,
    color: "var(--white)",
    sample: "Apache Kafka",
  },
  {
    label: "Body Large / 18px",
    fontFamily: "'Inter', sans-serif",
    fontSize: 18,
    fontWeight: 400,
    color: "var(--white)",
    sample:
      "Verdant gives engineering teams a fully managed open-source data platform.",
  },
  {
    label: "Body / 16px",
    fontFamily: "'Inter', sans-serif",
    fontSize: 16,
    fontWeight: 400,
    color: "var(--white)",
    sample: "Deploy across AWS, GCP, or Azure.",
  },
  {
    label: "Body Small / 14px",
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    fontWeight: 400,
    color: "var(--muted)",
    sample: "Real-time metrics, alerts, and logs unified in one dashboard.",
  },
  {
    label: "Label / 12px",
    fontFamily: "'Inter', sans-serif",
    fontSize: 12,
    fontWeight: 600,
    color: "var(--primary)",
    sample: "PLATFORM CAPABILITIES",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  {
    label: "Caption / 12px",
    fontFamily: "'Inter', sans-serif",
    fontSize: 12,
    fontWeight: 400,
    color: "var(--muted)",
    sample: "March 12, 2025 · 6 min read",
  },
];

export const Default: Story = {
  render: () => (
    <div>
      {rows.map((row, i) => (
        <div key={row.label}>
          {i > 0 ? (
            <hr
              style={{
                border: "none",
                borderTop: "1px solid var(--border)",
                margin: "16px 0",
              }}
            />
          ) : null}
          <div style={{ display: "flex", alignItems: "baseline", gap: 24 }}>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: 11,
                color: "var(--muted)",
                minWidth: 160,
                flexShrink: 0,
              }}
            >
              {row.label}
            </span>
            <span
              style={{
                fontFamily: row.fontFamily,
                fontSize: row.fontSize,
                fontWeight: row.fontWeight,
                color: row.color,
                letterSpacing: row.letterSpacing,
                textTransform: row.textTransform,
              }}
            >
              {row.sample}
            </span>
          </div>
        </div>
      ))}
    </div>
  ),
};
