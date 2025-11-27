import { createRouter, createWebHashHistory } from 'vue-router';
import { setupRouterGuards } from './guards';

// 导入路由模块
import homeRoutes from './modules/home';
import userRoutes from './modules/user';
import errorRoutes from './modules/error';

// 合并所有路由
const routes = [
	...homeRoutes, //
	...userRoutes,
	...errorRoutes,
];

// 创建路由实例
const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes,
});

// 设置路由守卫
setupRouterGuards(router);

export default router;
