import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 取一个别名，__dirname代表项目的绝对路径
      '@': resolve(__dirname, "src")
    }
  },
  base: './', // 打包路径
  server: {
    port: 4000, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true // 允许跨域
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        // 去除生产环境的console
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
