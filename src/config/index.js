/**
 * 应用配置文件
 */

export default {
	// 应用标题
	title: 'vite-vue3-template',
	
	// 版本号
	version: '1.0.0',
	
	// API基础路径
	baseURL: import.meta.env.VITE_APP_BASE_API || '/api',
	
	// 请求超时时间（毫秒）
	timeout: 15000,
	
	// Token存储键名
	tokenKey: 'token',
	
	// 分页配置
	pagination: {
		pageSize: 10,
		pageSizes: [10, 20, 50, 100],
	},
	
	// 上传文件配置
	upload: {
		maxSize: 5 * 1024 * 1024, // 5MB
		accept: ['image/jpeg', 'image/png', 'image/gif'],
	},
};
