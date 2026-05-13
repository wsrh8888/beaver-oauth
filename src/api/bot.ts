import config from "@/config/env"
import { ajax } from "@/utils/request"
import type {
  IGetBotConfigReq,
  IGetBotConfigRes,
  IUpdateBotConfigReq,
  IUpdateBotConfigRes
} from "@/types/api/bot"

// ==================== Bot 机器人配置 ====================

// 获取 Bot 配置
export function getBotConfigApi(params: IGetBotConfigReq) {
  return ajax<IGetBotConfigRes>({
    method: "GET",
    url: `${config.baseAPI}/portal/open/v1/bot/config`,
    params
  })
}

// 更新 Bot 配置
export function updateBotConfigApi(data: IUpdateBotConfigReq) {
  return ajax<IUpdateBotConfigRes>({
    method: "POST",
    url: `${config.baseAPI}/portal/open/v1/bot/config_update`,
    data
  })
}
