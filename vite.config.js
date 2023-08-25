import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        cleanupOutdatedCaches: false,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}']
      },
      includeAssets: ['https://res.cloudinary.com/famosa-adegbite/image/upload/q_auto,f_auto/v1659647575/myPotfolio/logo4a_ec1p2w.png'],
      manifest: {
        name: 'Vue PWA',
        short_name: 'Vue PWA',
        description: 'Progressive Web App with Vue.js',
        theme_color: '#52a8f2',
        background_color: "#52a8f2",
        display: "standalone",
        icons: [
          {
            src: 'favicon.ico',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'favicon.ico',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'favicon.ico',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'favicon.ico',
            sizes: '512x512',
            type: 'image/png'
          },
        ]
      },
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
