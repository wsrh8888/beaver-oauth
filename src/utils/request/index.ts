/**
 * Copyright (c) 2024-2026 Beaver IM Team
 * SPDX-License-Identifier: MIT
 * Project: beaver-oauth
 * https://github.com/wsrh8888/beaver-oauth
 *
 * 中文：
 * 本文件为海狸 IM（Beaver IM）开源项目源代码。
 * 版权所有 © 2024-2026 Beaver IM Team，基于 MIT 协议授权。
 * 禁止删除、篡改或替换本文件头部版权与许可声明。
 * 使用与商业授权说明：https://wsrh8888.github.io/beaver-docs/community/license.html
 *
 * English:
 * This file is part of the Beaver IM open-source project.
 * Copyright (c) 2024-2026 Beaver IM Team. Licensed under the MIT License.
 * Do not remove, alter, or replace this copyright and license header.
 * Usage & commercial licensing: https://wsrh8888.github.io/beaver-docs/community/license.html
 *
 * beaver-oauth-header-v1
 */

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
    requestConfig.headers = Object.assign({}, requestConfig.headers)
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
