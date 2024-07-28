import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

import { resolve } from "node:path";

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: "./index.html",
  },
  source: {
    tsconfigPath: "./tsconfig.json",
    entry: {
      index: "./src/index.tsx",
    },
    alias: {
      "@styles": resolve(__dirname, "src/shared/styles"),
    },
  },
});
