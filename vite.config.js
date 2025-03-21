import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
	base: process.env.NODE_ENV === 'production' ? '/recipe-app/' : '/', // Keep your local setting for GitHub Pages
	plugins: [react()]
  });