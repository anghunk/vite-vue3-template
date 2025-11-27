/**
 * 防抖指令 v-debounce
 * 用法：<el-button v-debounce="handleClick">提交</el-button>
 */

export default {
	mounted(el, binding) {
		let timer;
		el.addEventListener('click', () => {
			if (timer) {
				clearTimeout(timer);
			}
			timer = setTimeout(() => {
				binding.value();
			}, 500);
		});
	},
};
