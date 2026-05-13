import config from "@/config/env"
import { ajax } from "@/utils/request"
import type {
  ICreateAppReq,
  ICreateAppRes,
  IUpdateAppReq,
  IUpdateAppRes,
  IDeleteAppReq,
  IDeleteAppRes,
  IGetAppDetailReq,
  IGetAppDetailRes,
  IGetAppListReq,
  IGetAppListRes,
  IResetAppSecretReq,
  IResetAppSecretRes,
  IPublishAppReq,
  IPublishAppRes,
  IToggleAppCapabilityReq,
  IToggleAppCapabilityRes,
} from "@/types/api/app"

export type {
  IAppInfo,
  ICreateAppReq,
  ICreateAppRes,
  IUpdateAppReq,
  IUpdateAppRes,
  IDeleteAppReq,
  IDeleteAppRes,
  IGetAppDetailReq,
  IGetAppDetailRes,
  IGetAppListReq,
  IGetAppListRes,
  IResetAppSecretReq,
  IResetAppSecretRes,
  IPublishAppReq,
  IPublishAppRes,
  IToggleAppCapabilityReq,
  IToggleAppCapabilityRes
} from "@/types/api/app"

// ==================== 应用管理 ====================

// 创建应用
export function createAppApi(data: ICreateAppReq) {
  return ajax<ICreateAppRes>({
    method: "POST",
    url: `${config.baseAPI}/portal/open/v1/app/create`,
    data
  })
}

// 更新应用
export function updateAppApi(data: IUpdateAppReq) {
  return ajax<IUpdateAppRes>({
    method: "POST",
    url: `${config.baseAPI}/portal/open/v1/app/update`,
    data
  })
}

// 删除应用
export function deleteAppApi(data: IDeleteAppReq) {
  return ajax<IDeleteAppRes>({
    method: "POST",
    url: `${config.baseAPI}/portal/open/v1/app/delete`,
    data
  })
}

// 获取应用详情
export function getAppDetailApi(params: IGetAppDetailReq) {
  return ajax<IGetAppDetailRes>({
    method: "GET",
    url: `${config.baseAPI}/portal/open/v1/app/detail`,
    params
  })
}

// 获取应用列表
export function getAppListApi(params: IGetAppListReq) {
  return ajax<IGetAppListRes>({
    method: "GET",
    url: `${config.baseAPI}/portal/open/v1/app/list`,
    params
  })
}

// 重置应用密钥
export function resetAppSecretApi(data: IResetAppSecretReq) {
  return ajax<IResetAppSecretRes>({
    method: "POST",
    url: `${config.baseAPI}/portal/open/v1/app/reset_secret`,
    data
  })
}

// 发布应用（对标飞书版本发布）
export function publishAppApi(data: IPublishAppReq) {
  return ajax<IPublishAppRes>({
    method: "POST",
    url: `${config.baseAPI}/portal/open/v1/app/publish`,
    data
  })
}

// 启用/禁用应用能力（对标飞书）
export function toggleAppCapabilityApi(data: IToggleAppCapabilityReq) {
  return ajax<IToggleAppCapabilityRes>({
    method: "POST",
    url: `${config.baseAPI}/portal/open/v1/app/capability/toggle`,
    data
  })
}
