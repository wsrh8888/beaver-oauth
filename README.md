# Beaver Open Platform - 海狸开放平台

Beaver Open Platform 是 Beaver IM 的开放平台，为第三方开发者提供 API 接入、应用管理、Webhook 配置等功能。

## 项目架构

```
beaver-open/
├── src/
│   ├── api/              # API 接口定义
│   ├── assets/           # 静态资源
│   ├── components/       # 公共组件
│   ├── config/           # 配置文件
│   ├── layouts/          # 布局组件
│   ├── pages/            # 页面组件
│   │   ├── console/      # 控制台页面
│   │   │   ├── dashboard/    # 控制台首页
│   │   │   ├── apps/         # 应用管理
│   │   │   ├── app-detail/   # 应用详情
│   │   │   ├── stats/        # 数据统计
│   │   │   └── webhooks/     # Webhook 管理
│   │   ├── docs/         # API 文档
│   │   └── sdk/          # SDK 下载
│   ├── pinia/            # 状态管理
│   ├── router/           # 路由配置
│   ├── types/            # TypeScript 类型定义
│   └── utils/            # 工具函数
├── public/               # 公共资源
└── types/                # 类型声明文件
```

## 技术栈

- **前端框架**: Vue 3 + TypeScript
- **UI 组件库**: Element Plus
- **构建工具**: Vite
- **状态管理**: Pinia
- **路由管理**: Vue Router
- **HTTP 客户端**: Axios

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3334

### 构建生产版本

```bash
npm run build
```

## 功能模块

### 1. 控制台 (Console)

- **控制台首页**: 展示应用统计、API 调用趋势等概览信息
- **应用管理**: 创建、编辑、删除应用，管理 AppID 和 AppSecret
- **应用详情**: 查看应用详细信息，配置 Webhook
- **数据统计**: API 调用统计、Webhook 推送统计
- **Webhook 管理**: 配置和管理 Webhook 事件订阅

### 2. API 文档 (Docs)

提供完整的 API 接口文档，包括：
- 认证授权
- 消息发送
- 用户管理
- 群组管理
- Bot 功能

### 3. SDK 下载 (SDK)

提供多语言 SDK 下载：
- JavaScript/TypeScript
- Python
- Java
- Go
- PHP

## 与 beaver-manager 的区别

| 特性 | beaver-manager | beaver-open |
|------|----------------|-------------|
| 用户群体 | 平台管理员 | 第三方开发者 |
| 主要功能 | 系统管理、用户管理、内容审核 | 应用管理、API 接入、数据统计 |
| 访问权限 | 内部管理员 | 注册开发者 |
| 界面风格 | 后台管理系统 | 开放平台门户 |

## 后端接口

开放平台使用的后端接口位于 `beaver-server/app/open`：

- **open_api**: 面向开发者的 API 接口（获取 Token、发送消息等）
- **open_admin**: 开放平台管理接口（应用管理、Webhook 配置等）

## 大厂对标

本开放平台参考了以下大厂的开放平台设计：

- **微信开放平台**: 应用管理、权限控制、Webhook 机制
- **支付宝开放平台**: API 文档、SDK 下载、沙箱环境
- **钉钉开放平台**: 企业内部应用、第三方应用
- **飞书开放平台**: 事件订阅、消息卡片、机器人

## 许可证

MIT License
