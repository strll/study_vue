//引入样式初始化文件
import 'normalize.css'
//引入element-plus的样式文件
import 'element-plus/dist/index.css'
//引入element-plus的脚本文件
import ElementPlus from 'element-plus'
//引入图标
import * as ElementPlusIconVue from '@element-plus/icons-vue'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//创建vue实例
const app = createApp(App);
//在实例上使用store【vuex】，使用router【路由】
app.use(store).use(router);
//在实例上使用element-plus
app.use(ElementPlus)
//引入图标文件
for (const [key,component] of Object.entries(ElementPlusIconVue)){
    app.component[key,component]
}
//挂载到app容器
app.mount('#app')
