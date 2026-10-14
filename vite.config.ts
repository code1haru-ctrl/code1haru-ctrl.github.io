import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Dev server uses "/", while the production build and preview use the GitHub Pages path.
// If you later rename the repo to "code1haru-ctrl.github.io", change the path to "/".
export default defineConfig(({ command, isPreview }) => ({
  plugins: [react()],
  base: command === "build" || isPreview ? "/codeharu-ctrl.github.io/" : "/",
}));
