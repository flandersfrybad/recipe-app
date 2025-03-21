import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
	base: '/recipe-app/', // Keep your local setting for GitHub Pages
	plugins: [React()]
  });