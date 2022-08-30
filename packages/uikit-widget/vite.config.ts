import { defineConfig } from 'vite'
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";
import react from '@vitejs/plugin-react'

const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const safelist = [
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-700`),
];



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      safelist,
      presets: [presetUno(), presetAttributify(), presetIcons()],
    })
],
  build: {
    rollupOptions: {
    },
    minify:false,
    lib: {
      entry: "./src/entry.ts",
      name: "uikit",
      fileName: "uikit",
      // 导出模块格式
      formats: ["esm", "umd","iife"],
    },
  },
})
