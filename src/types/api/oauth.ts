// ==================== OAuth 扫码登录接口 ====================

/**
 * 确认扫码登录（由移动端 App 调用）
 */
export interface IConfirmQrCodeLoginReq {
  sceneId: string
  userId: string
}

export interface IConfirmQrCodeLoginRes {
  success: boolean
}

/**
 * 查询扫码状态（PC 端轮询）
 */
export interface ICheckQrCodeStatusReq {
  sceneId: string
}

export interface ICheckQrCodeStatusRes {
  status: "waiting" | "scanned" | "confirmed" | "cancelled" | "expired"
  code?: string
}
