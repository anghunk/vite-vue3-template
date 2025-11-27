## Vite Vue3 Template

一个开箱即用的 Vue3 + Vite 项目模板，内置完善的目录结构和常用功能。

## 技术栈

- **框架**: Vue 3 + Vite
- **状态管理**: Vuex 4
- **路由**: Vue Router 4
- **UI 组件**: Element Plus
- **HTTP 请求**: Axios
- **CSS 预处理**: Less + Tailwind CSS
- **代码规范**: Prettier

## 目录结构

```
src/
├── api/              # API 接口管理
├── assets/           # 静态资源
├── components/       # 公共组件
├── composables/      # 组合式函数
├── config/           # 配置文件
├── constants/        # 常量定义
├── directives/       # 自定义指令
├── layouts/          # 布局组件
├── plugins/          # 插件
├── router/           # 路由配置
├── store/            # 状态管理
├── utils/            # 工具函数
├── views/            # 页面视图
├── App.vue           # 根组件
└── main.js           # 入口文件
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发环境

```bash
npm run dev
```

### 生产构建

```bash
npm run build
```

### 预览构建

```bash
npm run preview
```

## 主要特性

- ✅ 模块化目录结构
- ✅ Axios 请求封装（拦截器、错误处理）
- ✅ 路由模块化管理
- ✅ Vuex 模块化管理
- ✅ 组件自动导入（Element Plus 按需加载）
- ✅ 自定义指令（权限、防抖等）
- ✅ 常用工具函数（验证、格式化、存储等）
- ✅ 环境变量配置
- ✅ 代码分包优化

## 环境变量

项目支持多环境配置：

- `.env` - 通用环境变量
- `.env.development` - 开发环境
- `.env.production` - 生产环境

## License

