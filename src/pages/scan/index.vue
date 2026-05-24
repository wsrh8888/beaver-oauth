<template>
  <div class="scan-page">
    <div class="confirm-card">
      <!-- 应用信息 -->
      <div class="app-info" v-if="appInfo">
        <img :src="appInfo.logo || logoImage" alt="App Logo" class="app-logo" />
        <h2 class="app-name">{{ appInfo.name }}</h2>
      </div>

      <!-- 未登录状态 -->
      <div v-if="!isLoggedIn" class="login-section">
        <h3>请先登录海狸 IM</h3>
        <div class="login-form">
          <input
            v-model="loginForm.username"
            type="text"
            placeholder="手机号/邮箱"
            class="input-field"
          />
          <input
            v-model="loginForm.password"
            type="password"
            placeholder="密码"
            class="input-field"
          />
          <button
            class="btn btn-primary"
            :disabled="loggingIn"
            @click="handleLogin"
          >
            {{ loggingIn ? '登录中...' : '登录' }}
          </button>
        </div>
      </div>

      <!-- 已登录状态 - 确认授权 -->
      <div v-else-if="userInfo" class="confirm-section">
        <div class="user-info">
          <img :src="userInfo.avatar || logoImage" alt="Avatar" class="user-avatar" />
          <p class="user-name">{{ userInfo.nickname }}</p>
        </div>

        <div class="confirm-message">
          <p><strong>{{ appInfo?.name }}</strong> 请求获取以下权限：</p>
          <ul class="scope-list">
            <li>获取你的基本信息</li>
          </ul>
        </div>

        <div class="action-buttons">
          <button class="btn btn-cancel" @click="handleCancel">取消</button>
          <button
            class="btn btn-primary"
            :disabled="confirming"
            @click="handleConfirm"
          >
            {{ confirming ? '处理中...' : '确认授权' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import logoImage from '@/assets/logo.png'
import { confirmQrCodeLoginApi } from '@/api/oauth'

interface AppInfo {
  name: string
  logo?: string
}

interface UserInfo {
  nickname: string
  avatar?: string
  userId: string
}

export default defineComponent({
  name: 'ScanPage',
  setup() {
    const router = useRouter()
    const appInfo = ref<AppInfo | null>(null)
    const isLoggedIn = ref(false)
    const loggingIn = ref(false)
    const confirming = ref(false)
    const userInfo = ref<UserInfo | null>(null)
    
    const loginForm = ref({
      username: '',
      password: ''
    })

    // 从 URL 获取 sceneId
    const sceneId = new URLSearchParams(window.location.search).get('sceneId')

    // 加载应用信息
    const loadAppInfo = async () => {
      if (!sceneId) {
        alert('无效的二维码')
        return
      }
      
      // TODO: 调用后端接口获取应用信息
      // const res = await axios.get(`/api/open/v1/oauth/app/info?sceneId=${sceneId}`)
      // appInfo.value = res.data.result
      
      // 临时模拟数据
      appInfo.value = {
        name: '第三方应用',
        logo: ''
      }
    }

    // 检查登录状态
    const checkLoginStatus = () => {
      const token = localStorage.getItem('oauth_token')
      const userStr = localStorage.getItem('oauth_user')
      
      if (token && userStr) {
        isLoggedIn.value = true
        try {
          userInfo.value = JSON.parse(userStr)
        } catch {
          isLoggedIn.value = false
        }
      }
    }

    // 处理登录
    const handleLogin = async () => {
      if (!loginForm.value.username || !loginForm.value.password) {
        alert('请输入用户名和密码')
        return
      }

      loggingIn.value = true
      try {
        // TODO: 调用登录接口
        // const res = await axios.post('/api/open/v1/auth/login', loginForm.value)
        // localStorage.setItem('oauth_token', res.data.result.token)
        // localStorage.setItem('oauth_user', JSON.stringify(res.data.result.user))
        
        // 模拟登录成功
        setTimeout(() => {
          isLoggedIn.value = true
          userInfo.value = {
            nickname: '当前用户',
            avatar: '',
            userId: 'user_123'
          }
          localStorage.setItem('oauth_token', 'mock_token')
          localStorage.setItem('oauth_user', JSON.stringify(userInfo.value))
        }, 1000)
      } catch (error) {
        alert('登录失败')
      } finally {
        loggingIn.value = false
      }
    }

    // 处理确认授权
    const handleConfirm = async () => {
      if (!sceneId || !userInfo.value) {
        alert('参数错误')
        return
      }

      confirming.value = true
      try {
        const res = await confirmQrCodeLoginApi({
          sceneId,
          userId: userInfo.value.userId
        })

        if (res.code === 0 && res.result.success) {
          alert('授权成功')
          // 延迟关闭页面
          setTimeout(() => {
            window.close()
          }, 1500)
        } else {
          alert(res.msg || '授权失败')
        }
      } catch (error) {
        alert('网络错误，请重试')
      } finally {
        confirming.value = false
      }
    }

    // 处理取消
    const handleCancel = () => {
      if (confirm('确定要取消授权吗？')) {
        window.close()
      }
    }

    onMounted(() => {
      loadAppInfo()
      checkLoginStatus()
    })

    return {
      appInfo,
      isLoggedIn,
      loggingIn,
      confirming,
      userInfo,
      loginForm,
      logoImage,
      handleLogin,
      handleConfirm,
      handleCancel
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

.confirm-card {
  background: white;
  border-radius: 12px;
  padding: 40px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.app-info {
  text-align: center;
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

.login-section {
  h3 {
    text-align: center;
    color: #606266;
    margin-bottom: 24px;
  }
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input-field {
  padding: 12px;
  border: 1px solid #dcdfe6;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #667eea;
  }
}

.user-info {
  text-align: center;
  margin-bottom: 24px;

  .user-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 8px;
  }

  .user-name {
    color: #606266;
    margin: 0;
  }
}

.confirm-message {
  margin-bottom: 24px;
  padding: 16px;
  background: #f5f7fa;
  border-radius: 8px;

  p {
    margin: 0 0 12px 0;
    color: #606266;
  }

  .scope-list {
    margin: 0;
    padding-left: 20px;
    color: #909399;
    font-size: 14px;

    li {
      margin: 4px 0;
    }
  }
}

.action-buttons {
  display: flex;
  gap: 12px;
}

.btn {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &.btn-cancel {
    background: #f5f7fa;
    color: #606266;

    &:hover:not(:disabled) {
      background: #e4e7ed;
    }
  }

  &.btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;

    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  }
}
</style>
