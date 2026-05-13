<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import BeaverSDK from '@beaver/js-sdk'

export default defineComponent({
  name: 'App',
  
  setup() {
    onMounted(() => {
      // 注册 Web Component
      BeaverSDK.register()
    })
  }
})
</script>

<template>
  <beaver-login
    app-id="app_3d70caad"
  />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
