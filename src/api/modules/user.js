import request from '../request';

/**
 * 用户相关接口
 */

// 用户登录
export function login(data) {
	return request({
		url: '/user/login',
		method: 'post',
		data,
	});
}

// 用户登出
export function logout() {
	return request({
		url: '/user/logout',
		method: 'post',
	});
}

// 获取用户信息
export function getUserInfo() {
	return request({
		url: '/user/info',
		method: 'get',
	});
}

// 更新用户信息
export function updateUserInfo(data) {
	return request({
		url: '/user/update',
		method: 'put',
		data,
	});
}
