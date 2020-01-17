import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
console.log(echarts, '呵呵呵呵')

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#root')
