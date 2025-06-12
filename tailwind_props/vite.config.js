// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()], 
// })

// upper wala old he jo by default aata he

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//This Line is new Baaki sab already hota he
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()], // sirf yeh add kiya ', tailwindcss()' baaki sab already hota he 
})