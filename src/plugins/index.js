/**
 * 插件统一注册
 */

import setupElementPlus from './element-plus';

export default function setupPlugins(app) {
	// 注册 Element Plus
	setupElementPlus(app);
	
}
