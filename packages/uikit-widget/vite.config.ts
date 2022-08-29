import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
