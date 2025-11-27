import { createStore } from 'vuex';
import VuexPersist from 'vuex-persist';
import getters from './getters';

// 导入模块
import user from './modules/user';
import app from './modules/app';

// vuex 持久化配置
const vuexPersist = new VuexPersist({
	key: 'vuex',
	storage: localStorage,
	reducer: (state) => ({
		user: {
			userData: state.user.userData,
			token: state.user.token,
		},
		app: {
			theme: state.app.theme,
			language: state.app.language,
		},
	}),
});

// 创建 store 实例
const store = createStore({
	modules: {
		user,
		app,
	},
	getters,
	plugins: [vuexPersist.plugin],
});

export default store;
