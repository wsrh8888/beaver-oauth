<template>
  <div class="scan-page">
    <div class="tip-card">
      <!-- 应用信息 -->
      <div class="app-info" v-if="appInfo">
        <img :src="appInfo.logo || logoImage" alt="App Logo" class="app-logo" />
        <h2 class="app-name">{{ appInfo.name }}</h2>
      </div>

      <!-- 提示信息 -->
      <div class="tip-content">
        <div class="tip-icon">📱</div>
        <h3>请使用海狸 IM App 扫码</h3>
        <p>当前页面不支持浏览器扫码，请打开海狸 IM App 使用"扫一扫"功能</p>
        
        <div class="download-links">
          <a href="#" class="download-btn ios">iOS 下载</a>
          <a href="#" class="download-btn android">Android 下载</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import logoImage from '@/assets/logo.png'

interface AppInfo {
  name: string
  logo?: string
}

export default defineComponent({
  name: 'ScanPage',
  setup() {
    const appInfo = ref<AppInfo | null>(null)

    // 从 URL 获取 sceneId
    const sceneId = new URLSearchParams(window.location.search).get('sceneId')

    // 加载应用信息
    const loadAppInfo = async () => {
      // TODO: 调用后端接口获取应用信息
      // const res = await axios.get(`/api/open/v1/oauth/app/info?sceneId=${sceneId}`)
      // appInfo.value = res.data.result
      
      // 临时模拟数据
      appInfo.value = {
        name: '第三方应用',
        logo: ''
      }
    }

    onMounted(() => {
      loadAppInfo()
    })

    return {
      appInfo,
      logoImage
    }
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

.tip-card {
  background: white;
  border-radius: 12px;
  padding: 40px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.app-info {
  margin-bottom: 30px;

  .app-logo {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    margin-bottom: 12px;
  }

  .app-name {
    font-size: 20px;
    color: #303133;
    margin: 0;
  }
}

.tip-content {
  .tip-icon {
    font-size: 48px;
    margin-bottom: 16px;
  }

  h3 {
    color: #303133;
    margin-bottom: 12px;
    font-size: 18px;
  }

  p {
    color: #606266;
    margin-bottom: 24px;
    line-height: 1.6;
  }
}

.download-links {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.download-btn {
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s;

  &.ios {
    background: #007AFF;
    color: white;

    &:hover {
      background: #0051D5;
    }
  }

  &.android {
    background: #3DDC84;
    color: white;

    &:hover {
      background: #2BB56A;
    }
  }
}
</style>
