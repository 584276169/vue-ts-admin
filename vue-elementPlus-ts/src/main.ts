import { createApp } from 'vue'
import App from './App.vue'
import pinia from './store/index'
import router from './router/index'
import 'element-plus/dist/index.css'
const app=createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
import '../mock/mock.ts'      //mock数据
import './router/permission.ts'   //路由拦截



  

