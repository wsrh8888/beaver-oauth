import config from "@/config/env"
import { ajax } from "@/utils/request"
import type {
  IGetOAuthConfigReq,
  IGetOAuthConfigRes,
  IUpdateOAuthConfigReq,
  IUpdateOAuthConfigRes
} from "@/types/api/oauth"

// ==================== OAuth 配置 ====================

// 获取 OAuth 配置
export function getOAuthConfigApi(params: IGetOAuthConfigReq) {
  return ajax<IGetOAuthConfigRes>({
    method: "GET",
    url: `${config.baseAPI}/portal/open/v1/oauth/config`,
    params
  })
}

// 更新 OAuth 配置
export function updateOAuthConfigApi(data: IUpdateOAuthConfigReq) {
  return ajax<IUpdateOAuthConfigRes>({
    method: "POST",
    url: `${config.baseAPI}/portal/open/v1/oauth/config_update`,
    data
  })
}
