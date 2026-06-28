import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite' // <-- Étape 1 : Importer

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // <-- Étape 2 : Ajouter aux plugins
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})