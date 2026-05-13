import config from "@/config/env"
import { ajax } from "@/utils/request"
import type {
  ICreateVersionReq,
  ICreateVersionRes,
  IGetVersionListReq,
  IGetVersionListRes,
  ISubmitVersionReviewReq,
  ISubmitVersionReviewRes,
  IPublishVersionReq,
  IPublishVersionRes
} from "@/types/api/version"

// ==================== 版本管理 ====================

// 创建新版本
export function createVersionApi(data: ICreateVersionReq) {
  return ajax<ICreateVersionRes>({
    method: "POST",
    url: `${config.baseAPI}/portal/open/v1/version/create`,
    data
  })
}

// 获取版本列表
export function getVersionListApi(params: IGetVersionListReq) {
  return ajax<IGetVersionListRes>({
    method: "GET",
    url: `${config.baseAPI}/portal/open/v1/version/list`,
    params
  })
}

// 提交版本审核
export function submitVersionReviewApi(data: ISubmitVersionReviewReq) {
  return ajax<ISubmitVersionReviewRes>({
    method: "POST",
    url: `${config.baseAPI}/portal/open/v1/version/submit_review`,
    data
  })
}

// 发布版本
export function publishVersionApi(data: IPublishVersionReq) {
  return ajax<IPublishVersionRes>({
    method: "POST",
    url: `${config.baseAPI}/portal/open/v1/version/publish`,
    data
  })
}
