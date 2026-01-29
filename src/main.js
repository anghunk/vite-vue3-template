import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 样式导入
import '@/assets/styles/base/reset.css';
import '@/assets/styles/base/variables.css';
import '@/assets/styles/base/common.css';
import '@/assets/styles/base/tailwind.css';
import '@/assets/styles/index.less';

// 插件
import setupPlugins from './plugins';

const app = createApp(App);

// 注册插件
setupPlugins(app);

// 注册路由和状态管理
app.use(router);
app.use(store);

app.mount('#app');
