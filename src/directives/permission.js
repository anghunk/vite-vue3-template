/**
 * 权限指令 v-permission
 * 用法：<el-button v-permission="['admin']">删除</el-button>
 */

export default {
	mounted(el, binding) {
		const { value } = binding;
		const userPermissions = JSON.parse(localStorage.getItem('permissions') || '[]');

		if (value && value instanceof Array && value.length > 0) {
			const hasPermission = value.some((permission) => {
				return userPermissions.includes(permission);
			});

			if (!hasPermission) {
				el.parentNode && el.parentNode.removeChild(el);
			}
		} else {
			throw new Error('需要传入权限数组，如 v-permission="[\'admin\']"');
		}
	},
};
