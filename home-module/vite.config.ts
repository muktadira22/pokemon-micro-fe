/// <reference types="vitest/config" />
// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [
    react(),
    federation({
      name: "homePageModule",
      filename: "homePageModule.js",
      exposes: {
        "./Home": "./src/components/Home",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  preview: {
    host: "localhost",
    port: 5001,
    strictPort: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    css: true,
  },
}));
