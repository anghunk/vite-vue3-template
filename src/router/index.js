// src/router/index.js
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home.vue'),
		meta: { title: '首页' },
	},
	{
		path: '/view/:id',
		name: 'View',
		component: () => import('@/views/View.vue'),
		meta: { title: '详情' },
	},
];

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes,
});

// 路由守卫
// router.beforeEach((to, from, next) => {
//   if (!localStorage.getItem('token') && to.path !== '/login') {
//     next('/login');
//   } else {
//     if (to.meta.title) {
//       document.title = to.meta.title + " - vite-vue3-template";
//     } else {
//       document.title = 'vite-vue3-template';
//     }
//     next();
//   }
// });

// 添加错误处理逻辑
router.onError((error) => {
	// 检查接口返回的状态码是否为500
	if (error.response && error.response.status == 500) {
		// 跳转到错误页面
		router.push({
			name: 'error',
		});
	} else {
		// 其他错误处理逻辑
	}
});

export default router;
