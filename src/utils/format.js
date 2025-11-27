/**
 * 格式化工具函数
 */

/**
 * 格式化日期时间
 */
export function formatDate(date, format = 'YYYY-MM-DD HH:mm:ss') {
	if (!date) return '';

	const d = new Date(date);
	const year = d.getFullYear();
	const month = String(d.getMonth() + 1).padStart(2, '0');
	const day = String(d.getDate()).padStart(2, '0');
	const hour = String(d.getHours()).padStart(2, '0');
	const minute = String(d.getMinutes()).padStart(2, '0');
	const second = String(d.getSeconds()).padStart(2, '0');

	return format
		.replace('YYYY', year)
		.replace('MM', month)
		.replace('DD', day)
		.replace('HH', hour)
		.replace('mm', minute)
		.replace('ss', second);
}

/**
 * 格式化金额（千分位）
 */
export function formatMoney(money, decimals = 2) {
	if (!money) return '0.00';
	const num = parseFloat(money);
	return num.toFixed(decimals).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

/**
 * 格式化文件大小
 */
export function formatFileSize(bytes) {
	if (bytes === 0) return '0 B';
	const k = 1024;
	const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return (bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i];
}

/**
 * 手机号脱敏
 */
export function formatPhone(phone) {
	if (!phone) return '';
	return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
}

/**
 * 身份证号脱敏
 */
export function formatIdCard(idCard) {
	if (!idCard) return '';
	return idCard.replace(/(\d{6})\d{8}(\d{4})/, '$1********$2');
}

/**
 * 银行卡号脱敏
 */
export function formatBankCard(cardNo) {
	if (!cardNo) return '';
	return cardNo.replace(/(\d{4})\d+(\d{4})/, '$1 **** **** $2');
}
