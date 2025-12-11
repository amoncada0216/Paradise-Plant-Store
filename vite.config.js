import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Paradise-Plant-Store/',
  plugins: [react()],
})