import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { clickOutside } from './assets/directive/clickOutside';
const app = createApp(App)
app.directive("click-outside",clickOutside)
app.mount('#app')
