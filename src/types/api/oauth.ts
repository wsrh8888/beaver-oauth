export interface IGetQrCodeSceneReq {
  sceneId: string
}

export interface IGetQrCodeSceneRes {
  sceneId: string
  appId: string
  appName: string
  appIcon: string
  status: "waiting" | "scanned" | "confirmed" | "cancelled" | "expired"
  expireIn: number
  scopes: string[]
}

export interface ICheckQrCodeStatusReq {
  sceneId: string
}

export interface ICheckQrCodeStatusRes {
  status: "waiting" | "scanned" | "confirmed" | "cancelled" | "expired"
  code?: string
}
