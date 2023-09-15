import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    base: mode === 'production' ? '/home/' : '/',
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            // logo: loadEnv(mode, process.cwd()).VITE_SITE_LOGO,
            avatar: loadEnv(mode, process.cwd()).VITE_HOME_AVATAR,
            title: loadEnv(mode, process.cwd()).VITE_HOME_TITLE,
            penName: loadEnv(mode, process.cwd()).VITE_HOME_PEN_NAME,
            author: loadEnv(mode, process.cwd()).VITE_HOME_ANTHOR,
            keywords: loadEnv(mode, process.cwd()).VITE_HOME_KEYWORDS,
          },
        },
      }),
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src'),
        },
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          additionalData: `@import "./src/styles/global.scss";`,
        },
      },
    },
  })
