// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Polyfill Node.js globals for the browser
      buffer: "buffer",
      process: "process/browser",
    },
  },
  define: {
    global: {}, // This polyfills `global` as an empty object
  },
});
