/**
 * 全局前置守卫
 */
export function setupRouterGuards(router) {
	// 全局前置守卫
	router.beforeEach((to, from, next) => {
		// 设置页面标题
		if (to.meta.title) {
			document.title = to.meta.title;
		}

		// 示例：权限验证
		// const token = localStorage.getItem('token');
		// if (!token && to.path !== '/login') {
		//   next('/login');
		// } else {
		//   next();
		// }

		next();
	});

	// 全局后置钩子
	router.afterEach((to, from) => {
		// 可以在这里处理页面跳转后的逻辑
		// 例如：埋点、页面滚动等
	});

	// 错误处理
	router.onError((error) => {
		// 检查接口返回的状态码是否为500
		if (error.response && error.response.status === 500) {
			router.push({
				name: 'ServerError',
			});
		} else if (error.response && error.response.status === 404) {
			router.push({
				name: 'NotFound',
			});
		} else {
			console.error('路由错误：', error);
		}
	});
}
