import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Zaza-photographer/', // << أضف السطر ده
  plugins: [react()],
})