import config from "@/config/env"
import { ajax } from "@/utils/request"
import type {
  IApplyDeveloperReq,
  IApplyDeveloperRes
} from "@/types/api/developer"

export type {
  IApplyDeveloperReq,
  IApplyDeveloperRes
} from "@/types/api/developer"

// ==================== 开发者管理 ====================

// 申请成为开发者
export function applyDeveloperApi(data: IApplyDeveloperReq) {
  return ajax<IApplyDeveloperRes>({
    method: "POST",
    url: `${config.baseAPI}/portal/open/v1/developer/apply`,
    data
  })
}
