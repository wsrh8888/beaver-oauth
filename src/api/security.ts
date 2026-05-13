import config from "@/config/env"
import { ajax } from "@/utils/request"
import type {
  IGetSecurityConfigReq,
  IGetSecurityConfigRes,
  IUpdateSecurityConfigReq,
  IUpdateSecurityConfigRes
} from "@/types/api/security"

// ==================== 安全设置 ====================

// 获取安全配置
export function getSecurityConfigApi(params: IGetSecurityConfigReq) {
  return ajax<IGetSecurityConfigRes>({
    method: "GET",
    url: `${config.baseAPI}/portal/open/v1/security/config`,
    params
  })
}

// 更新安全配置
export function updateSecurityConfigApi(data: IUpdateSecurityConfigReq) {
  return ajax<IUpdateSecurityConfigRes>({
    method: "POST",
    url: `${config.baseAPI}/portal/open/v1/security/config_update`,
    data
  })
}
