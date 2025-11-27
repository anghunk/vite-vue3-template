/**
 * 自定义指令统一注册
 */

import permission from './permission';
import debounce from './debounce';

export default function setupDirectives(app) {
	app.directive('permission', permission);
	app.directive('debounce', debounce);
}
