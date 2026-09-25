import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // importacion de tailwind,cd MovieTeca pnpm install tailwindcss @tailwindcss/vite

import path from 'node:path' 
import { fileURLToPath } from 'node:url'// dentro de defineConfig:


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
  alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
  }
})
