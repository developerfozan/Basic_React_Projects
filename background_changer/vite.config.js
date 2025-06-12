import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' //add this by me
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()], // add this tailwindcss() by me
})
