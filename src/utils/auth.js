/**
 * 认证工具函数
 */

import config from '@/config';

/**
 * 获取Token
 */
export function getToken() {
	return localStorage.getItem(config.tokenKey);
}

/**
 * 设置Token
 */
export function setToken(token) {
	return localStorage.setItem(config.tokenKey, token);
}

/**
 * 删除Token
 */
export function removeToken() {
	return localStorage.removeItem(config.tokenKey);
}

/**
 * 检查是否已登录
 */
export function isLoggedIn() {
	return !!getToken();
}
