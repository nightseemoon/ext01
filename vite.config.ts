import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        "src/pages/default": "src/pages/default.html", // html 入口文件的键名只是名字，不影响目录，
        "src/pages/new_tab": "src/pages/new_tab.html", // 目录是源的目录结构,路径和命名规则: 
                                                       // output.assetFileNames 和 output.chunkFileNames
                                                       //  
        "scripts/background": "src/scripts/background.ts", // ts、js 入口文件的键名会规划生的文件的目录
        "scripts/content": "src/scripts/content.ts"        // 生成命名和路径规则采用output.entryFileNames. 
      },
      output: {
        entryFileNames: "[name].js",    // 以 XXX.ts 为入口的文件的生成规则，
        assetFileNames: "assets/[name].[ext]", // 以 XXX.html 为入口生成的非 *.js 文件名，目录是 assets；
        chunkFileNames: "assets/[name].js",    // 以 XXX.html 为入口生成的 *.js 文件名，目录是 assets；
      }
    }
  },
  plugins: [react()],
})
