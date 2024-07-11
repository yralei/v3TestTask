import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'

export default defineConfig({
  plugins: [
    VueRouter(),
    vue(),
    Layouts(),
    Components({
      dirs: ['src/components'],
      dts: true
    }),
    AutoImport({
      imports: ['vue', VueRouterAutoImports],
      dirs: ['./composables/**'],
      vueTemplate: true,
      dts: true,
      eslintrc: {
        enabled: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
