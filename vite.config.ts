/** @type {import('vite').UserConfig} */

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePluginFonts } from 'vite-plugin-fonts'
import { createHtmlPlugin } from 'vite-plugin-html'
import viteImagemin from 'vite-plugin-imagemin'
import svgr from "vite-plugin-svgr";

import config from './config.js'
import postcss from './postcss.config.js'

const { imagemin } = config

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin(imagemin),
    createHtmlPlugin({
      minify: true,
      entry: 'src/main.tsx'
    }),
    VitePluginFonts({
      // Custom fonts
      custom: {
        families: [
          {
            name: 'inconsolata',
            src: './src/assets/fonts/inconsolata/*.woff2'
          },
          {
            name: 'inter',
            src: './src/assets/fonts/inter/*.woff2'
          },
          {
            name: 'lora',
            src: './src/assets/fonts/lora/*.woff2'
          }
        ],
        display: 'swap',
        preload: true,
        prefetch: false,
        injectTo: 'head-prepend'
      }
    }),
    svgr()
  ],
  css: {
    postcss
  },
  resolve: {
    alias: [
      { find: '@/', replacement: '/src' },
      { find: '@/Assets', replacement: '/src/assets' },
      { find: '@/Components', replacement: '/src/components' },
      { find: '@/Hooks', replacement: '/src/hooks' },
    ]
  }
})
