import { resolve } from "node:path"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import { defineConfig, loadEnv } from "vite"

export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  const env = loadEnv(mode, process.cwd(), "")

  return {
    resolve: {
      alias: {
        "@": resolve(__dirname, "src")
      }
    },
    server: {
      host: true,
      open: true
    },
    // 为了在渲染中使用环境变量
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_APP_ENV)
    },
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "vue-router", "pinia"],
        dts: "types/auto/auto-imports.d.ts",
      })
    ]
  }
})
