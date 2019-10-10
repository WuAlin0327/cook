import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import http from './api/index';
import axios from 'axios'
require('./mock.js')
// Vue.prototype.$axios.defaults.baseURL = 'http://restful.l.onebound.cn/'
let plugin = {
  install: (Vue) => {

      // 注册系统服务
      Vue.prototype.$http = http
	  Vue.prototype.$axios = axios
      // 注册全局Mixin
      Vue.mixin({
          
      })
  }
}
Vue.use(plugin)
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
