/**
 * 插件统一注册
 */

import setupElementPlus from './element-plus';

export default function setupPlugins(app) {
	// 注册 Element Plus
	setupElementPlus(app);
	
	// 可以在这里注册其他插件
}
