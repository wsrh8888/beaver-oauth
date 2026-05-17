<template>
  <div class="auth-page">
    <!-- 授权登录组件 -->
    <beaver-login
      :app-id="appId"
      :redirect-url="redirectUri"
      :state="state"
      :scope="scope"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import '@beaver/js-sdk' // 导入 SDK，自动注册 Web Component

export default defineComponent({
  name: 'AuthPage',
  setup() {
    // 从 URL 获取参数
    const params = new URLSearchParams(window.location.search)
    
    return {
      appId: params.get('appId') || '',
      redirectUri: params.get('redirectUri') || '',
      state: params.get('state') || '',
      scope: params.get('scope') || 'user_info'
    }
  }
})
</script>

<style scoped lang="less">
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}
</style>
