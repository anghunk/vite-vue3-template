/**
 * 常量定义
 */

// 用户状态
export const USER_STATUS = {
	ACTIVE: 1,
	INACTIVE: 0,
	BANNED: -1,
};

// 订单状态
export const ORDER_STATUS = {
	PENDING: 0,
	PAID: 1,
	SHIPPED: 2,
	COMPLETED: 3,
	CANCELLED: -1,
};

// 性别
export const GENDER = {
	MALE: 1,
	FEMALE: 2,
	OTHER: 0,
};

// 角色类型
export const ROLE_TYPE = {
	ADMIN: 'admin',
	USER: 'user',
	GUEST: 'guest',
};
