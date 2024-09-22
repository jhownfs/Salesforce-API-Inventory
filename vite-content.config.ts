import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    emptyOutDir: false,
    rollupOptions:{
      input:{
        content: "src/services/content-script.ts",
      },
      output:{
        entryFileNames: "assets/[name].js"
      }
    },
  },
})