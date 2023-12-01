import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import i18n from './i18n';
import pinia from './pinia.ts';
import { createRouter } from './router.ts';

createApp(App).use(i18n).use(pinia).use(createRouter('history')).mount('#app');
