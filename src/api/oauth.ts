import config from "@/config/env"
import { ajax } from "@/utils/request"
import type {
  ICheckQrCodeStatusReq,
  ICheckQrCodeStatusRes,
  IGetQrCodeSceneReq,
  IGetQrCodeSceneRes
} from "@/types/api/oauth"

export function getQrCodeSceneApi(sceneId: string) {
  return ajax<IGetQrCodeSceneRes>({
    method: "GET",
    url: `${config.baseAPI}/api/open/oauth_public/v1/qrcode_scene`,
    params: { sceneId } as IGetQrCodeSceneReq
  })
}

export function checkQrCodeStatusApi(params: ICheckQrCodeStatusReq) {
  return ajax<ICheckQrCodeStatusRes>({
    method: "GET",
    url: `${config.baseAPI}/api/open/oauth_public/v1/qrcode_status`,
    params
  })
}
