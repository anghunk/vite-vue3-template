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
