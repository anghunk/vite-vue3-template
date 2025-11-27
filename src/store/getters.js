/**
 * 全局 getters
 */

const getters = {
	// 用户模块
	userData: (state) => state.user.userData,
	token: (state) => state.user.token,
	userInfo: (state) => state.user.userInfo,
	isLoggedIn: (state) => state.user.isLoggedIn,

	// 应用模块
	theme: (state) => state.app.theme,
	language: (state) => state.app.language,
	collapsed: (state) => state.app.collapsed,
	loading: (state) => state.app.loading,
};

export default getters;
