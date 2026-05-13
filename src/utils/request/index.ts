import type { AxiosError, AxiosRequestConfig } from "axios"
import axios from "axios"

/**
 * 统一的响应数据结构
 */
export interface IResponseSuccessData<T> {
  code: number
  msg: string
  result: T
}

/**
 * 请求头配置
 */
export interface HeaderRequest {
  [key: string]: string | number
}

/**
 * 创建axios实例
 */
const request = axios.create({
  timeout: 600000, // 请求超时时间，10分钟，文件上传需要更长的超时时间
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  }
})

/**
 * 请求拦截器
 */
request.interceptors.request.use(
  (requestConfig) => {
    // 添加token和其他公共头部
    const token = localStorage.getItem("token") || ""

    const headers: HeaderRequest = {
      Token: token, // 对应auth_admin.api中的Token header
      deviceId: localStorage.getItem("deviceId") || ""
    }

    requestConfig.headers = Object.assign({}, requestConfig.headers, headers)
    return requestConfig
  },
  (error: Error) => {
    return Promise.reject(error)
  }
)

/**
 * 响应拦截器
 */
request.interceptors.response.use(
  (response) => {
    const data = response.data as IResponseSuccessData<any>

    // 处理认证失败的情况
    if (data.code !== 0 && response.config.url?.includes("authentication")) {
      // 清除token并跳转到登录页
      localStorage.removeItem("token")
      localStorage.removeItem("userId")
      localStorage.removeItem("phone")

      // 可以在这里添加路由跳转逻辑
      window.location.href = "/login"

      return Promise.reject(new Error("认证失败，请重新登录"))
    }

    return response.data
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

/**
 * 统一的请求方法
 * @param config axios请求配置
 * @returns 返回统一格式的数据
 */
function ajax<T>(config: AxiosRequestConfig): Promise<IResponseSuccessData<T>> {
  return request(config)
    .then((response) => {
      return response as unknown as IResponseSuccessData<T>
    })
    .catch((err: AxiosError) => {
      return Promise.reject(err)
    }) as Promise<IResponseSuccessData<T>>
}

export { ajax }
