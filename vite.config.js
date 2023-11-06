import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "/periodensystem-des-schwurbels/",
  build:  {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        element: resolve(__dirname, 'element.html')
      }
    }
  }
})
