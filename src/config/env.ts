// API 配置
const config = {
  // 开发环境
  dev: {
    baseAPI: 'http://localhost:8888'
  },
  // 测试环境
  test: {
    baseAPI: 'http://test.beaver.com'
  },
  // 生产环境
  prod: {
    baseAPI: 'https://api.beaver.com'
  }
}

// 根据环境变量选择配置
const env = import.meta.env.MODE || 'dev'

export default config[env as keyof typeof config] || config.dev
