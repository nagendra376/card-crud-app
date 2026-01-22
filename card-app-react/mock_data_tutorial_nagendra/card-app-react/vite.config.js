import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Use a base path for GitHub Pages project deployment.
// For local dev, base is '/'. For production builds (e.g., GH Pages), set to repo name.
const isProd = process.env.NODE_ENV === 'production'
const base = isProd ? '/card-crud-app/' : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
