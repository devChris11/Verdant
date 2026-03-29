import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/nextjs";
import webpack from "webpack";

// @next/env is CJS; Storybook evaluates main.ts as ESM.
const require = createRequire(import.meta.url);
const { loadEnvConfig } = require("@next/env") as {
  loadEnvConfig: typeof import("@next/env").loadEnvConfig;
};

// Same as Next dev: pick up .env.local when present (local Storybook).
// Chromatic/CI have no file → webpack EnvironmentPlugin supplies safe fallbacks below.
const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
loadEnvConfig(projectRoot, true);

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(ts|tsx)",
    "../components/**/*.mdx",
    "../components/**/*.stories.@(ts|tsx)",
  ],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: async (webpackConfig) => {
    webpackConfig.plugins = webpackConfig.plugins ?? [];
    webpackConfig.plugins.push(
      new webpack.EnvironmentPlugin({
        // Only used when unset (e.g. Chromatic). Real app + local Storybook use .env.local.
        NEXT_PUBLIC_SANITY_PROJECT_ID: "storybook-placeholder",
        NEXT_PUBLIC_SANITY_DATASET: "production",
      }),
    );
    return webpackConfig;
  },
};

export default config;
