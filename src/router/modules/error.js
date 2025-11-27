/**
 * 错误页面路由配置
 */

export default [
	{
		path: '/404',
		name: 'NotFound',
		component: () => import('@/views/error/404.vue'),
		meta: { 
			title: '页面不存在',
		},
	},
	{
		path: '/500',
		name: 'ServerError',
		component: () => import('@/views/error/500.vue'),
		meta: { 
			title: '服务器错误',
		},
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/404',
	},
];
