/**
 * 本地存储工具
 */

const storage = {
	/**
	 * 设置localStorage
	 */
	set(key, value) {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error('localStorage set error:', error);
		}
	},

	/**
	 * 获取localStorage
	 */
	get(key) {
		try {
			const value = localStorage.getItem(key);
			return value ? JSON.parse(value) : null;
		} catch (error) {
			console.error('localStorage get error:', error);
			return null;
		}
	},

	/**
	 * 删除localStorage
	 */
	remove(key) {
		try {
			localStorage.removeItem(key);
		} catch (error) {
			console.error('localStorage remove error:', error);
		}
	},

	/**
	 * 清空localStorage
	 */
	clear() {
		try {
			localStorage.clear();
		} catch (error) {
			console.error('localStorage clear error:', error);
		}
	},

	/**
	 * 设置sessionStorage
	 */
	setSession(key, value) {
		try {
			sessionStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error('sessionStorage set error:', error);
		}
	},

	/**
	 * 获取sessionStorage
	 */
	getSession(key) {
		try {
			const value = sessionStorage.getItem(key);
			return value ? JSON.parse(value) : null;
		} catch (error) {
			console.error('sessionStorage get error:', error);
			return null;
		}
	},

	/**
	 * 删除sessionStorage
	 */
	removeSession(key) {
		try {
			sessionStorage.removeItem(key);
		} catch (error) {
			console.error('sessionStorage remove error:', error);
		}
	},
};

export default storage;
