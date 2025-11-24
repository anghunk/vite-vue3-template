import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/style/tailwind.css';

// ElementPlus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@/assets/style/element-variables.scss';

import '@/assets/style/index.less';

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount('#app');
