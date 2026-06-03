<template>
  <div class="auth-page">
    <beaver-login
      :app-id="appId"
      :redirect-url="redirectUri"
      :state="state"
      :scope="scope"
      @login-error="handleLoginError"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import BeaverSDK from '@beaver/js-sdk'

export default defineComponent({
  name: 'AuthPage',
  setup() {
    const params = new URLSearchParams(window.location.search)

    const appId = params.get('appId') || ''
    const redirectUri = params.get('redirectUri') || params.get('redirect_uri') || ''
    const state = params.get('state') || ''
    const scope = params.get('scope') || 'user_info'

    const handleLoginError = (error: Error) => {
      console.error('登录失败:', error)
    }

    onMounted(() => {
      BeaverSDK.register()
    })

    return {
      appId,
      redirectUri,
      state,
      scope,
      handleLoginError
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
