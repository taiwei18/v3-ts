import { createApp } from 'vue'
import './style.css'
import router from './routers'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import { createPinia } from 'pinia';
import 'nprogress/nprogress.css';
import  "@/assets/iconfont/iconfont.css";
import 'virtual:uno.css'


const app = createApp(App)
app.use(router)
app.use(createPinia());
app.mount('#app')
export default app 