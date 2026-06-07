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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.scan-card {
  width: 100%;
  max-width: 420px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.scan-title {
  margin: 0 0 16px;
  font-size: 18px;
  color: #303133;
}

.scan-desc {
  margin: 0 0 12px;
  font-size: 14px;
  line-height: 1.6;
  color: #606266;
}

.scan-sub {
  margin: 0;
  font-size: 12px;
  color: #909399;
}

.scan-error {
  margin: 0;
  padding: 16px 24px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  color: #ff4d4f;
  font-size: 14px;
}
</style>
