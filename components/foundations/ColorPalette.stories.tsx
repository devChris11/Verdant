import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Foundations/Color Palette",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const swatches: { token: string; hex: string; label: string; border?: string }[] = [
  { token: "--bg", hex: "#0A0F0A", label: "Page Background", border: "1px solid #1E2E1E" },
  { token: "--surface", hex: "#111812", label: "Surface / Card" },
  { token: "--border", hex: "#1E2E1E", label: "Border" },
  { token: "--primary", hex: "#3DDC84", label: "Primary Green" },
  { token: "--primary-dark", hex: "#2AB369", label: "Primary Hover" },
  { token: "--muted", hex: "#8A9E8A", label: "Muted Text" },
  { token: "--white", hex: "#F0FFF0", label: "Primary Text" },
];

export const Default: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: 24,
      }}
    >
      {swatches.map((s) => (
        <div key={s.token} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 10,
              background: s.hex,
              border: s.border ?? "none",
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              color: "var(--white)",
            }}
          >
            {s.token}
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 12,
              color: "var(--muted)",
            }}
          >
            {s.hex}
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 12,
              color: "var(--muted)",
            }}
          >
            {s.label}
          </span>
        </div>
      ))}
    </div>
  ),
};
