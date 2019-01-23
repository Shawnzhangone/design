// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App' //引入根组件
import VRouter from 'vue-router' //引入router
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import $ from 'jquery'
import 'swiper/dist/css/swiper.css'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

import './assets/font-family/iconfont.css'
import axios from 'axios'
import 'babel-polyfill';
import qs from 'qs'
import store from './store'
import vueColor from 'vue-color'


axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';


// import home from '@/pages/home'


// Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper);
Vue.use(VRouter); //注册outer)
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.use(vueColor);

new Vue({ //实例化
  store,
  el: '#app', //挂载根组件
  render:h => h(App)  //渲染组件
})

