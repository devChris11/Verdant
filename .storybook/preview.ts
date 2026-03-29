import type { Preview } from "@storybook/react";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "verdant-dark",
      values: [{ name: "verdant-dark", value: "#0A0F0A" }],
    },
    layout: "fullscreen",
  },
};

export default preview;
