import axios from 'axios';
import { ElMessage } from 'element-plus';

// 创建axios实例
const service = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_API || '/api',
	timeout: 15000,
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
	},
});

// 请求拦截器
service.interceptors.request.use(
	(config) => {
		// 在发送请求之前做些什么
		const token = localStorage.getItem('token');
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		// 对请求错误做些什么
		console.error('请求错误：', error);
		return Promise.reject(error);
	}
);

// 响应拦截器
service.interceptors.response.use(
	(response) => {
		const res = response.data;

		// 根据后端返回的状态码进行处理
		if (res.code !== 200 && res.code !== 0) {
			ElMessage({
				message: res.message || '请求失败',
				type: 'error',
				duration: 3000,
			});

			// 401: Token过期
			if (res.code === 401) {
				// 可以在这里处理token过期的逻辑，比如跳转到登录页
				localStorage.removeItem('token');
				window.location.href = '/login';
			}

			return Promise.reject(new Error(res.message || '请求失败'));
		} else {
			return res;
		}
	},
	(error) => {
		console.error('响应错误：', error);
		
		// 处理HTTP状态码错误
		if (error.response) {
			switch (error.response.status) {
				case 400:
					ElMessage.error('请求参数错误');
					break;
				case 401:
					ElMessage.error('未授权，请登录');
					localStorage.removeItem('token');
					window.location.href = '/login';
					break;
				case 403:
					ElMessage.error('拒绝访问');
					break;
				case 404:
					ElMessage.error('请求地址不存在');
					break;
				case 500:
					ElMessage.error('服务器内部错误');
					break;
				default:
					ElMessage.error('网络错误');
			}
		} else {
			ElMessage.error('网络连接失败');
		}

		return Promise.reject(error);
	}
);

export default service;
