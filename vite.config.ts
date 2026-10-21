import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig, lazyPlugins } from "vite-plus";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { renderLlmsTxt } from "./src/content/llms";

function llmsTxt() {
  const write = () => {
    writeFileSync(resolve("public/llms.txt"), renderLlmsTxt());
  };

  return {
    name: "llms-txt",
    buildStart: write,
    configureServer: write,
  };
}

const config = defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    ignorePatterns: ["src/routeTree.gen.ts"],
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  resolve: { tsconfigPaths: true },
  plugins: [
    llmsTxt(),
    lazyPlugins(() => [devtools(), tailwindcss(), tanstackStart(), viteReact()]),
  ],
});

export default config;
