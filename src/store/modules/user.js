/**
 * 用户模块状态管理
 */

const state = {
	userData: {},
	token: localStorage.getItem('token') || '',
	userInfo: null,
};

const mutations = {
	SET_USER_DATA(state, data) {
		state.userData = data;
	},
	SET_TOKEN(state, token) {
		state.token = token;
		if (token) {
			localStorage.setItem('token', token);
		} else {
			localStorage.removeItem('token');
		}
	},
	SET_USER_INFO(state, userInfo) {
		state.userInfo = userInfo;
	},
	CLEAR_USER_DATA(state) {
		state.userData = {};
		state.token = '';
		state.userInfo = null;
		localStorage.removeItem('token');
	},
};

const actions = {
	// 设置用户数据
	setUserData({ commit }, data) {
		commit('SET_USER_DATA', data);
	},
	// 设置token
	setToken({ commit }, token) {
		commit('SET_TOKEN', token);
	},
	// 设置用户信息
	setUserInfo({ commit }, userInfo) {
		commit('SET_USER_INFO', userInfo);
	},
	// 清除用户数据
	clearUserData({ commit }) {
		commit('CLEAR_USER_DATA');
	},
};

const getters = {
	userData: (state) => state.userData,
	token: (state) => state.token,
	userInfo: (state) => state.userInfo,
	isLoggedIn: (state) => !!state.token,
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
