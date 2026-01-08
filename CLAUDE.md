# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 Vue 3 + Vite 的企业级前端模板项目，采用模块化架构设计，集成了常用的功能和最佳实践。

**技术栈：**
- **框架**: Vue 3 + Vite
- **状态管理**: Vuex 4 (模块化，支持持久化)
- **路由**: Vue Router 4 (模块化，带守卫)
- **UI 组件**: Element Plus (按需自动导入)
- **HTTP 请求**: Axios (封装拦截器和错误处理)
- **CSS**: Tailwind CSS + Less + SCSS
- **代码规范**: Prettier

## 核心架构

### 1. 目录结构
```
src/
├── api/              # API 接口层
│   ├── modules/      # 业务模块API
│   └── request.js    # Axios实例和拦截器
├── assets/           # 静态资源
│   ├── images/
│   └── styles/       # 全局样式
├── components/       # 公共组件
│   ├── base/         # 基础组件
│   └── common/       # 通用组件
├── composables/      # 组合式函数 (Composition API)
├── config/           # 应用配置
├── constants/        # 常量定义 (枚举、字典)
├── directives/       # 自定义指令
├── layouts/          # 布局组件
├── plugins/          # 插件注册
├── router/           # 路由配置
│   ├── modules/      # 路由模块
│   └── guards.js     # 路由守卫
├── store/            # Vuex状态管理
│   ├── modules/      # Store模块
│   └── getters.js    # 全局getters
├── utils/            # 工具函数
├── views/            # 页面视图
└── main.js           # 应用入口
```

### 2. 关键设计模式

#### API 层
- **请求封装**: `src/api/request.js` - Axios实例，带请求/响应拦截器
- **模块化**: 每个业务模块独立文件，统一导出到 `src/api/index.js`
- **错误处理**: 统一处理HTTP状态码和业务状态码

#### 状态管理 (Vuex)
- **模块化**: `user` 和 `app` 两个核心模块
- **持久化**: 使用 `vuex-persist` 自动持久化到 localStorage
- **命名空间**: 所有模块使用 namespaced: true
- **持久化配置**: 只持久化关键数据（token、用户信息、主题、语言）

#### 路由系统
- **模块化**: 路由按业务模块拆分
- **守卫机制**: `src/router/guards.js` 处理权限、标题、错误
- **懒加载**: 所有页面组件使用动态导入
- **元信息**: 支持 title、keepAlive 等元数据

#### 组件系统
- **自动导入**: 使用 `unplugin-vue-components` 自动导入组件
- **Element Plus**: 按需加载，无需手动导入
- **自定义组件**: `components/base/` 存放基础组件

#### 自定义指令
- **v-permission**: 权限控制指令
- **v-debounce**: 防抖指令

### 3. 构建配置

**Vite 配置要点** (`vite.config.js`):
- **路径别名**: `@` 指向 `src/`
- **代理配置**: `/api` 代理到后端服务
- **分包策略**:
  - `vue`: Vue核心库 + Vue Router + Vuex
  - `element-plus`: Element Plus组件库
- **压缩**: 生产环境移除 console/debugger
- **CSS 预处理**: 支持 Less 和 SCSS，自动注入变量文件

## 开发指南

### 常用命令

```bash
# 开发环境
npm run dev

# 生产构建
npm run build

# 预览构建
npm run preview

# 清理 (dist + node_modules)
npm run rf
```

### 环境变量

项目支持多环境配置：
- `.env` - 通用环境变量
- `.env.development` - 开发环境
- `.env.production` - 生产环境

**关键环境变量：**
- `VITE_APP_BASE_API` - API基础路径

### 开发流程

#### 1. 添加新页面
```javascript
// 1. 在 src/router/modules/ 创建路由模块
// 2. 在 src/views/ 创建页面组件
// 3. 在页面中使用 store 和 api
```

#### 2. 添加 API 接口
```javascript
// src/api/modules/xxx.js
export function getXXX(data) {
  return request({
    url: '/xxx',
    method: 'get',
    params: data
  });
}

// src/api/index.js
export * as xxxApi from './modules/xxx';
```

#### 3. 添加状态管理
```javascript
// src/store/modules/xxx.js
export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  getters: {}
};
```

#### 4. 使用组合式函数
```javascript
// src/composables/xxx.js
import { ref } from 'vue';

export function useXXX() {
  const loading = ref(false);
  // ... 逻辑
  return { loading };
}
```

#### 5. 使用工具函数
```javascript
import {
  storage,      // 本地存储
  getToken,     // 认证
  formatDate,   // 格式化
  isEmail       // 验证
} from '@/utils';
```

### 代码规范

1. **文件命名**: 使用小驼峰（camelCase）命名
2. **组件命名**: 使用大驼峰（PascalCase）
3. **常量命名**: 使用全大写 + 下划线（UPPER_SNAKE_CASE）
4. **API 命名**: 使用小驼峰，动词开头（getUserInfo）

### 常见任务

#### 修改 API 代理目标
```javascript
// vite.config.js
server: {
  proxy: {
    '/api': {
      target: 'http://your-backend:3000', // 修改这里
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
}
```

#### 添加自定义主题
```javascript
// src/store/modules/app.js
// 修改 theme 状态
// 在组件中使用 computed 映射主题
```

#### 权限控制
```javascript
// 1. 在路由守卫中检查权限
// 2. 使用 v-permission 指令控制元素显示
// 3. 在 store 中管理用户权限列表
```

#### 防抖处理
```vue
<el-button v-debounce="handleSubmit">提交</el-button>
```

## 重要文件说明

| 文件 | 说明 |
|------|------|
| `src/main.js` | 应用入口，注册插件、指令、路由、store |
| `src/api/request.js` | Axios实例，带拦截器和错误处理 |
| `src/router/guards.js` | 路由守卫，处理权限和错误 |
| `src/store/index.js` | Vuex store，带持久化插件 |
| `src/plugins/index.js` | 插件统一注册 |
| `src/directives/index.js` | 自定义指令统一注册 |
| `vite.config.js` | Vite构建配置 |

## 扩展建议

1. **添加 TypeScript**: 可逐步迁移到 TS
2. **添加单元测试**: 使用 Vitest
3. **添加 E2E 测试**: 使用 Cypress 或 Playwright
4. **添加 i18n**: 使用 vue-i18n
5. **添加 Mock**: 使用 vite-plugin-mock 或 mockjs
6. **添加代码规范**: ESLint + Stylelint

## 注意事项

1. **Element Plus 自动导入**: 无需手动 import，直接使用组件名
2. **路径别名**: 使用 `@/` 代替相对路径 `../../`
3. **Vuex 持久化**: 只持久化配置中指定的数据
4. **路由懒加载**: 所有页面组件使用 `() => import()` 导入
5. **环境变量**: 以 `VITE_` 开头的变量才能被客户端访问
