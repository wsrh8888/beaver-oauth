/**
 * 环境配置
 */
export const config = {
  // 当前环境
  env: import.meta.env.VITE_APP_ENV,

  // API 基础地址
  baseAPI: import.meta.env.VITE_API_BASE,

}

// 打印当前环境信息
console.info("🚀 当前环境:", config.env)
console.info("🌐 API地址:", config.baseAPI)

export default config
