import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import viteImagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    // base: mode === 'production' ? '/home/' : '/',
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()], // 默认路径./auto-import.d.ts
        // imports: ['vue'],
        // dts: 'src/auto-import.d.ts',
      }),
      Components({
        resolvers: [ElementPlusResolver()], // 默认路径./components.d.ts
        // extensions: ['vue'], // 文件类型
        // dts: 'src/components.d.ts', // 输出文件，里面都是一些import的组件键值对
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
      viteCompression(), // 代码压缩
      visualizer({ open: true }),
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 20,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
    ],
    build: {
      sourcemap: 'hidden',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // 去掉console
          // drop_debugger: true,// 去掉debugger
        },
      },
    },
    optimizeDeps: {},
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
