// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App' //引入根组件
import VRouter from 'vue-router' //引入router
import VueAwesomeSwiper from 'vue-awesome-swiper'
import $ from 'jquery'
import 'swiper/dist/css/swiper.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './assets/font-family/iconfont.css'
import axios from 'axios'
import 'babel-polyfill';
import qs from 'qs'
import store from './store'
import vueColor from 'vue-color'


axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';


import home from '@/pages/home'


Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper);
Vue.use(VRouter); //注册outer)
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.use(vueColor);

// 全局路由守卫
// router.beforeEach((to, from, next) => {
//   console.log('navigation-guards');
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  // let nextRoute = ['home'];
  // if (nextRoute.indexOf(to.name) >= 0) {
    // window.location.href = "https://mps.essocial.com.cn/home/login";
    // window.location.replace("http://mps.essocial.com.cn/home/login");
//     axios({
//       url:'https://mps.essocial.com.cn/api/user/getPerssion',
//       method:'post',
//       data:''}).then((response) => {
//       console.log(response)
//       if (response.data.status === 1) {
//         console.log(response)
//         this.$store.state.mine.names = response.data.program_name
//         this.$store.state.mine.mobile = response.data.mobile
//         next();
//       } else{
//         alert("fa" + response.data.data);
//         window.location.replace("http://mps.essocial.com.cn/home/login");
// //          window.location.href =
//       }
//     }).catch(error => {
//       console.log(error);
//       alert('没有请求到数据');
//     })
//   }

// });
new Vue({ //实例化
  store,
  el: '#app', //挂载根组件
  render:h => h(App)  //渲染组件
})

