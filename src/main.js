import { createApp } from 'vue'
import './assets/tailwind.css'
import router from './router'
import App from './App.vue'
import i18n from './i18n'

createApp(App).use(router).use(i18n).mount('#app')
