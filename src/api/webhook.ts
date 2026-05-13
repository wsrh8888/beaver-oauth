import config from "@/config/env"
import { ajax } from "@/utils/request"
import type {
  IConfigWebhookReq,
  IConfigWebhookRes,
  IGetWebhookLogsReq,
  IGetWebhookLogsRes
} from "@/types/api/webhook"

// ==================== Webhook 配置 ====================

// 配置 Webhook
export function configWebhookApi(data: IConfigWebhookReq) {
  return ajax<IConfigWebhookRes>({
    method: "POST",
    url: `${config.baseAPI}/portal/open/v1/webhook/config`,
    data
  })
}

// 获取 Webhook 日志
export function getWebhookLogsApi(params: IGetWebhookLogsReq) {
  return ajax<IGetWebhookLogsRes>({
    method: "GET",
    url: `${config.baseAPI}/portal/open/v1/webhook/logs`,
    params
  })
}
