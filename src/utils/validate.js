/**
 * 验证工具函数
 */

/**
 * 验证邮箱
 */
export function isEmail(email) {
	const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	return reg.test(email);
}

/**
 * 验证手机号
 */
export function isPhone(phone) {
	const reg = /^1[3-9]\d{9}$/;
	return reg.test(phone);
}

/**
 * 验证身份证号
 */
export function isIdCard(idCard) {
	const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	return reg.test(idCard);
}

/**
 * 验证URL
 */
export function isUrl(url) {
	const reg =
		/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
	return reg.test(url);
}

/**
 * 验证密码强度（至少包含数字和字母，长度6-20）
 */
export function isStrongPassword(password) {
	const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
	return reg.test(password);
}

/**
 * 验证中文
 */
export function isChinese(str) {
	const reg = /^[\u4e00-\u9fa5]+$/;
	return reg.test(str);
}

/**
 * 验证数字
 */
export function isNumber(num) {
	const reg = /^[0-9]+$/;
	return reg.test(num);
}
