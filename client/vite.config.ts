import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const port = 8000

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: port,
    proxy: {
      '/api': {
        target: 'http://localhost:9528',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
    }
  },
})
