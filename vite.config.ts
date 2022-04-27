import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports:["vue", "vue-router",'pinia'],
      dts:'auto-import.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "@/assets/scss/global.scss";',
      }
    }
  },
  resolve:{
    alias:{
      '@':resolve(__dirname,'src')
    },
    extensions:['.ts','.js']
  },
  server:{
    port:8080,
  },
})
