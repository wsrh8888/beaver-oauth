import config from "@/config/env"
import { ajax } from "@/utils/request"
import type {
  IConfirmQrCodeLoginReq,
  IConfirmQrCodeLoginRes,
  ICheckQrCodeStatusReq,
  ICheckQrCodeStatusRes
} from "@/types/api/oauth"

// ==================== OAuth 扫码登录接口 ====================

/**
 * 确认扫码登录（由移动端 App 调用）
 */
export function confirmQrCodeLoginApi(data: IConfirmQrCodeLoginReq) {
  return ajax<IConfirmQrCodeLoginRes>({
    method: "POST",
    url: `${config.baseAPI}/api/open/oauth_public/v1/qrcode_confirm`,
    data
  })
}

/**
 * 查询扫码状态（PC 端轮询）
 */
export function checkQrCodeStatusApi(params: ICheckQrCodeStatusReq) {
  return ajax<ICheckQrCodeStatusRes>({
    method: "GET",
    url: `${config.baseAPI}/api/open/oauth_public/v1/qrcode_status`,
    params
  })
}
