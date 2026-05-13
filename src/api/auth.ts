import type { ILoginReq, ILoginRes } from "@/types/auth"
import config from "@/config/env"
import { ajax } from "@/utils/request"

// 用户登录
export const loginApi = (data: ILoginReq) =>{
  return ajax<ILoginRes>({
    method: "POST",
    url: `${config.baseAPI}/portal/open/v1/auth/login`,
    data
  })
}
