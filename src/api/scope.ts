import config from "@/config/env"
import { ajax } from "@/utils/request"
import type {
  IGetAppScopesReq,
  IGetAppScopesRes,
  IUpdateAppScopesReq,
  IUpdateAppScopesRes
} from "@/types/api/scope"

export type {
  IScopeInfo,
  IGetAppScopesReq,
  IGetAppScopesRes,
  IUpdateAppScopesReq,
  IUpdateAppScopesRes
} from "@/types/api/scope"

// ==================== 权限管理（对标飞书/钉钉）====================

// 获取应用权限列表
export function getAppScopesApi(params: IGetAppScopesReq) {
  return ajax<IGetAppScopesRes>({
    method: "GET",
    url: `${config.baseAPI}/portal/open/v1/app/scopes`,
    params
  })
}

// 更新应用权限
export function updateAppScopesApi(data: IUpdateAppScopesReq) {
  return ajax<IUpdateAppScopesRes>({
    method: "POST",
    url: `${config.baseAPI}/portal/open/v1/app/scopes/update`,
    data
  })
}
