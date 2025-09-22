import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/gps-beacon-pwa/',  // <-- ОБЯЗАТЕЛЬНО имя репозитория
  plugins: [react()],
})
