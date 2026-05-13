// ==================== 应用管理 ====================

export interface ICreateAppReq {
  name: string
  description?: string
  icon?: string
}

export interface ICreateAppRes {
  appId: string
  appSecret: string
}

export interface IUpdateAppReq {
  appId: string
  name?: string
  description?: string
  icon?: string
  status?: number
}

export interface IUpdateAppRes {}

export interface IDeleteAppReq {
  appId: string
}

export interface IDeleteAppRes {}

export interface IAppInfo {
  appId: string
  name: string
  description: string
  icon?: string
  appSecret: string // 应用密钥（掩码形式）
  status: number // 0=草稿，1=已发布，2=禁用
  // 能力开关（对标飞书）
  enableBot: number // 是否启用机器人能力
  enableOAuth: number // 是否启用OAuth能力
  enableWebhook: number // 是否启用Webhook能力
  // 安全配置
  ipWhitelist?: string // IP白名单(JSON数组)
  webhookUrl?: string // Webhook回调地址
  createdAt: number
}

export interface IGetAppDetailReq {
  appId: string
}

export interface IGetAppDetailRes {
  app: IAppInfo
}

export interface IGetAppListReq {
  page?: number
  pageSize?: number
  status?: number
}

export interface IGetAppListRes {
  total: number
  list: IAppInfo[]
}

// ==================== 应用密钥管理 ====================

export interface IResetAppSecretReq {
  appId: string
}

export interface IResetAppSecretRes {
  appId: string
  appSecret: string
  message: string
}

// ==================== 应用发布（对标飞书版本发布）====================

export interface IPublishAppReq {
  appId: string
  version?: string // 版本号，如 1.0.0
  description?: string // 版本说明
}

export interface IPublishAppRes {
  status: number // 发布后状态：1已发布
}

// ==================== 应用能力管理（对标飞书）====================

export interface IToggleAppCapabilityReq {
  appId: string
  capability: 'bot' | 'oauth' | 'webhook' // 能力类型
  enable: boolean // true=启用，false=禁用
}

export interface IToggleAppCapabilityRes {
  enabled: boolean // 当前状态
}
