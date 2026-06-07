/**
 * 环境配置（缺失即报错，不做兜底）
 */

function requireEnv(value: string | undefined, key: string): string {
  if (!value || !value.trim()) {
    throw new Error(`请配置 ${key}`)
  }
  return value.trim()
}

export const config = {
  env: import.meta.env.VITE_APP_ENV,
  baseAPI: requireEnv(import.meta.env.VITE_API_BASE, 'VITE_API_BASE'),
}

console.info('🚀 当前环境:', config.env)
console.info('🌐 API地址:', config.baseAPI)

export default config
