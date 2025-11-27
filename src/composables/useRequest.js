/**
 * 组合式函数 - 请求
 */

import { ref } from 'vue';

export function useRequest(apiFunc) {
	const loading = ref(false);
	const data = ref(null);
	const error = ref(null);

	const execute = async (...args) => {
		loading.value = true;
		error.value = null;
		
		try {
			const response = await apiFunc(...args);
			data.value = response.data;
			return response;
		} catch (err) {
			error.value = err;
			throw err;
		} finally {
			loading.value = false;
		}
	};

	return {
		loading,
		data,
		error,
		execute,
	};
}
