import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // (2) import

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // (3) add --> App.css
})
