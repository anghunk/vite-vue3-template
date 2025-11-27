/**
 * Element Plus 插件配置
 */

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@/assets/styles/element-variables.scss';

export default function setupElementPlus(app) {
	app.use(ElementPlus);
}
