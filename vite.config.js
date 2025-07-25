import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve:{
    alias: [
      {find: "@", replacement: "/src/*"},
      {find: "@pages", replacement: "/src/pages"},
      {find: "@components", replacement: "/src/components"},
    ],
  },
});
