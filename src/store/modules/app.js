/**
 * 应用模块状态管理
 */

const state = {
	theme: localStorage.getItem('theme') || 'light',
	language: localStorage.getItem('language') || 'zh-CN',
	collapsed: false, // 侧边栏折叠状态
	loading: false, // 全局加载状态
};

const mutations = {
	SET_THEME(state, theme) {
		state.theme = theme;
		localStorage.setItem('theme', theme);
	},
	SET_LANGUAGE(state, language) {
		state.language = language;
		localStorage.setItem('language', language);
	},
	SET_COLLAPSED(state, collapsed) {
		state.collapsed = collapsed;
	},
	SET_LOADING(state, loading) {
		state.loading = loading;
	},
};

const actions = {
	setTheme({ commit }, theme) {
		commit('SET_THEME', theme);
	},
	setLanguage({ commit }, language) {
		commit('SET_LANGUAGE', language);
	},
	toggleCollapsed({ commit, state }) {
		commit('SET_COLLAPSED', !state.collapsed);
	},
	setLoading({ commit }, loading) {
		commit('SET_LOADING', loading);
	},
};

const getters = {
	theme: (state) => state.theme,
	language: (state) => state.language,
	collapsed: (state) => state.collapsed,
	loading: (state) => state.loading,
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
