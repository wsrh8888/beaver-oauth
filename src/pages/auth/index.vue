<!--
  Copyright (c) 2024-2026 Beaver IM Team
  SPDX-License-Identifier: MIT
  Project: beaver-oauth
  https://github.com/wsrh8888/beaver-oauth

  中文：
  本文件为海狸 IM（Beaver IM）开源项目源代码。
  版权所有 © 2024-2026 Beaver IM Team，基于 MIT 协议授权。
  禁止删除、篡改或替换本文件头部版权与许可声明。
  使用与商业授权说明：https://wsrh8888.github.io/beaver-docs/community/license.html

  English:
  This file is part of the Beaver IM open-source project.
  Copyright (c) 2024-2026 Beaver IM Team. Licensed under the MIT License.
  Do not remove, alter, or replace this copyright and license header.
  Usage & commercial licensing: https://wsrh8888.github.io/beaver-docs/community/license.html

  beaver-oauth-header-v1
-->

<template>
  <div class="auth-page">
    <p v-if="pageError" class="auth-error">{{ pageError }}</p>
    <div v-else class="auth-card">
      <beaver-login
        :app-id="appId"
        :api-base="apiBase"
        :redirect-url="redirectUri"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import BeaverSDK from '@beaver-im/js-sdk'
import { config } from '@/config/env'

export default defineComponent({
  name: 'AuthPage',
  setup() {
    const params = new URLSearchParams(window.location.search)

    const appId = ref(params.get('appId') || '')
    const redirectUri = ref(params.get('redirectUri') || '')
    const apiBase = config.baseAPI
    const pageError = ref('')

    onMounted(() => {
      BeaverSDK.register()

      if (!appId.value) {
        pageError.value = '缺少 appId，请从第三方应用授权入口进入'
      }
    })

    return {
      appId,
      redirectUri,
      apiBase,
      pageError
    }
  }
})
</script>

<style scoped lang="less">
.auth-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff7d45 0%, #e86835 100%);
  padding: 24px;
  box-sizing: border-box;

  .auth-card {
    width: 100%;
    max-width: 520px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    overflow: hidden;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
}

.auth-error {
  margin: 0;
  padding: 16px 24px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  color: #ff5252;
  font-size: 13px;
  line-height: 1.5;
}
</style>
