import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  // Avoids dev-only "$RefreshSig$ is not a function" when Fast Refresh wiring misbehaves.
  // Trade-off: React components full-reload on save instead of hot-updating in place.
  plugins: [react({ fastRefresh: false })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
