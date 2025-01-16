import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/style/tailwind.css';

// ElementPlus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@/assets/style/element-variables.scss';

// ArcoVue
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

import '@/assets/style/index.less';

const app = createApp(App)
app.use(ElementPlus)
app.use(ArcoVue)
app.use(router)
app.use(store)
app.mount('#app')
