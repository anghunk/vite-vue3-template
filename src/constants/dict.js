/**
 * 字典数据
 */

// 用户状态字典
export const userStatusDict = [
	{ label: '正常', value: 1, type: 'success' },
	{ label: '禁用', value: 0, type: 'info' },
	{ label: '封禁', value: -1, type: 'danger' },
];

// 性别字典
export const genderDict = [
	{ label: '男', value: 1 },
	{ label: '女', value: 2 },
	{ label: '其他', value: 0 },
];

// 订单状态字典
export const orderStatusDict = [
	{ label: '待支付', value: 0, type: 'warning' },
	{ label: '已支付', value: 1, type: 'success' },
	{ label: '已发货', value: 2, type: 'primary' },
	{ label: '已完成', value: 3, type: 'success' },
	{ label: '已取消', value: -1, type: 'info' },
];
