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

/**
 * 环境配置（缺失即报错，不做兜底）
 */

function requireEnv(value: string | undefined, key: string): string {
  if (!value || !value.trim()) {
    throw new Error(`请配置 ${key}`)
  }
  return value.trim()
}

export const config = {
  env: import.meta.env.VITE_APP_ENV,
  baseAPI: requireEnv(import.meta.env.VITE_API_BASE, 'VITE_API_BASE'),
}

console.info('🚀 当前环境:', config.env)
console.info('🌐 API地址:', config.baseAPI)

export default config
