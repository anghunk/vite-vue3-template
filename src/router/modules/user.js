/**
 * 用户相关路由配置
 */

export default [
	{
		path: '/user',
		name: 'User',
		component: () => import('@/views/user/index.vue'),
		meta: {
			title: '用户中心',
		},
	},
];
