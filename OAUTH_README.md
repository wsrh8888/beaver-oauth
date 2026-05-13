# Beaver OAuth 授权服务

独立的 OAuth 2.0 授权页面服务，用于第三方应用集成 Beaver 登录。

## 📋 功能

- ✅ OAuth 2.0 授权码模式
- ✅ 授权确认页面
- ✅ 用户登录
- ✅ 权限展示
- ✅ 安全重定向

## 🚀 启动开发环境

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问：http://localhost:5173/oauth/authorize?appId=xxx&redirectUri=xxx

## 🔧 配置

编辑 `src/config/env.ts` 修改 API 地址：

```typescript
const config = {
  dev: {
    baseAPI: 'http://localhost:8888'  // 后端 API 地址
  }
}
```

## 📖 使用流程

### 1. 第三方网站引导用户授权

```javascript
const authUrl = `http://beaver-oauth.com/oauth/authorize?appId=${APP_ID}&redirectUri=${REDIRECT_URI}&scope=user_info&state=random123`;
window.location.href = authUrl;
```

### 2. 用户在 Beaver OAuth 页面

- 如果未登录 → 显示登录页面
- 如果已登录 → 显示授权确认页面
- 用户点击"同意授权"

### 3. Beaver 生成授权码并重定向

```
http://third-party.com/callback?code=AUTH_CODE&state=random123
```

### 4. 第三方网站用 code 换取 token

```javascript
POST http://localhost:8888/api/open/v1/oauth/token
{
  "appId": "your_app_id",
  "appSecret": "your_app_secret",
  "code": "AUTH_CODE"
}
```

## 🏗️ 项目结构

```
beaver-oauth/
├── src/
│   ├── pages/
│   │   └── oauth/
│   │       └── authorize.vue    # OAuth 授权页面（内嵌 SDK）
│   ├── api/                      # API 接口
│   ├── config/                   # 配置文件
│   ├── router/                   # 路由配置
│   ├── types/                    # 类型定义
│   └── utils/                    # 工具函数
├── package.json
└── ...
```

**依赖：**
- `@beaver/js-sdk` - Beaver 登录 SDK（提供扫码/密码登录组件）

## 🔐 安全说明

1. **授权页面必须在 Beaver 域名下**
   - 防止钓鱼攻击
   - 确保用户信任

2. **Code 一次性使用**
   - 有效期 10 分钟
   - 使用后失效

3. **State 参数防 CSRF**
   - 第三方网站生成随机 state
   - 回调时验证 state 是否一致

4. **App Secret 保密**
   - 不要在前端暴露
   - 只在后端服务器使用

## 📝 待完善

- [ ] 添加样式优化
- [ ] 添加错误处理
- [ ] 添加国际化支持
- [ ] 添加单元测试
