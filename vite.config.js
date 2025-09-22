import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/gps-beacon-pwa/', // имя репозитория на GitHub
  plugins: [react()],
})

