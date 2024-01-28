import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteSvgPlugin from 'vite-plugin-svg';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),ViteSvgPlugin()]
})
