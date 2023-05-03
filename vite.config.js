import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "regenerator-runtime/runtime";

export default defineConfig({
  plugins: [react()],
  base: "/Personal-Password-Manager/",
  server: {
    port: 3000,
  },
});
