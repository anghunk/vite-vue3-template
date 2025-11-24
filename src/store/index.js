import { createStore } from 'vuex';
import VuexPersist from 'vuex-persist';

const vuexPersist = new VuexPersist({
	key: 'vuex',
	storage: localStorage,
	reducer: (state) => ({
		userData: state.userData,
	}),
});

// 创建一个新的 store 实例
const store = createStore({
	state() {
		return {
			userData: {},
		};
	},
	mutations: {
		setuserData(state, data) {
			state.userData = data;
		},
	},

	plugins: [vuexPersist.plugin],
});

export default store;
