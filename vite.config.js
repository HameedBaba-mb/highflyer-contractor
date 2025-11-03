import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/highflyer-contractor/', // must match your repo name
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
