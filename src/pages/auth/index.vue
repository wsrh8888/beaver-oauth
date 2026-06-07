<template>
  <div class="auth-page">
    <p v-if="pageError" class="auth-error">{{ pageError }}</p>
    <beaver-login
      v-else
      :app-id="appId"
      :redirect-url="redirectUri"
      :state="state"
      :scope="scope"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import BeaverSDK from '@beaver/js-sdk'

export default defineComponent({
  name: 'AuthPage',
  setup() {
    const params = new URLSearchParams(window.location.search)

    const appId = ref(params.get('appId') || '')
    const redirectUri = ref(params.get('redirectUri') || params.get('redirect_uri') || '')
    const state = ref(params.get('state') || '')
    const scope = ref(params.get('scope') || '')
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
      state,
      scope,
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.auth-error {
  margin: 0;
  padding: 16px 24px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  color: #ff4d4f;
  font-size: 14px;
}
</style>
