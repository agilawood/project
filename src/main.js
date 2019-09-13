// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font/iconfont.css'
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'
import App from './App'
import router from './router'
import animate from 'animate.css'
import './fullpage.min.css'
import echarts from 'echarts'
import axios from 'axios'
import qs from 'qs'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.prototype.axios = axios
Vue.prototype.$echarts = echarts
Vue.prototype.qs = qs
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueFullPage)
Vue.use(animate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
