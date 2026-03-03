# Cloud Ladder

一个 AI 营销聚合平台，支持多平台内容分发与 AI 辅助创作。

## 功能特性

- **用户认证** - JWT 登录/注册，安全的用户身份管理
- **多平台账号管理** - 绑定抖音、小红书等社交平台账号
- **任务管理** - 创建、编辑、发布营销内容任务
- **一键多平台发布** - 将内容同时发布到多个社交平台
- **AI 内容生成** - 根据提示词自动生成适配不同平台的营销文案

## 技术栈

- **框架**: NestJS
- **数据库**: SQLite (Prisma ORM)
- **认证**: JWT

## 快速开始

```bash
# 安装依赖
npm install

# 初始化数据库
npx prisma migrate dev

# 启动开发服务器
npm run start:dev
```

## 项目结构

```
src/
├── auth/          # 认证模块 (登录/注册)
├── accounts/      # 平台账号管理
├── tasks/         # 任务管理与发布
├── platforms/     # 社交平台适配器 (抖音/小红书)
└── ai/            # AI 内容生成服务
```

## API 文档

启动服务后访问 `/api` 查看 Swagger 文档。

## 相关项目

- [cloud-ladder-web](../cloud-ladder-web) - 前端项目
