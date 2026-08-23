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
  <div class="scan-page">
    <p v-if="error" class="scan-error">{{ error }}</p>
    <div v-else-if="loaded" class="scan-card">
      <h2 class="scan-title">{{ appName }} 登录</h2>
      <p class="scan-desc">
        请打开 <strong>海狸 IM</strong>，使用「扫一扫」扫描<strong>电脑屏幕上的二维码</strong>，并在 App 内点击「确认授权」。
      </p>
      <p class="scan-sub">此页面无法在浏览器内完成扫码确认，请使用 App。</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { getQrCodeSceneApi } from '@/api/oauth'

export default defineComponent({
  name: 'ScanPage',
  setup() {
    const error = ref('')
    const loaded = ref(false)
    const appName = ref('')

    onMounted(async () => {
      const sceneId = new URLSearchParams(window.location.search).get('sceneId')
      if (!sceneId) {
        error.value = 'sceneId 缺失'
        return
      }

      const res = await getQrCodeSceneApi(sceneId)
      if (res.code !== 0) {
        error.value = res.msg || '二维码已失效'
        return
      }
      if (!res.result) {
        error.value = '扫码会话不存在'
        return
      }

      appName.value = res.result.appName || '第三方应用'
      loaded.value = true
    })

    return { error, loaded, appName }
  }
})
</script>

<style scoped lang="less">
.scan-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff7d45 0%, #e86835 100%);
  padding: 24px;
}

.scan-card {
  width: 100%;
  max-width: 420px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.scan-title {
  margin: 0 0 16px;
  font-size: 22px;
  font-weight: 500;
  color: #2d3436;
  line-height: 1.3;
}

.scan-desc {
  margin: 0 0 12px;
  font-size: 13px;
  line-height: 1.5;
  color: #636e72;
}

.scan-sub {
  margin: 0;
  font-size: 12px;
  color: #b2bec3;
}

.scan-error {
  margin: 0;
  padding: 16px 24px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  color: #ff5252;
  font-size: 13px;
  line-height: 1.5;
}
</style>
