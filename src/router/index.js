import Vue from 'vue'
import Router from 'vue-router'

// import login from '@/pages/login'
// import register from '@/pages/register'
// import manage from '@/pages/manage'
// import userCenter from '@/pages/userCenter'
import help from '@/pages/help'
import customService from '@/pages/customService'
import home from '@/pages/home'
import forgetPwd from '@/pages/forgetPwd'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: '/design/',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/register',
      name:'register',
      component:register
    },{
      path:'/forgetPwd',
      name:'forgetPwd',
      component:forgetPwd
    },
    {
      path:'/manage',
      name:'manage',
      component:manage
    },
    {
      path:'/userCenter',
      name:'userCenter',
      component:userCenter
    },
    {
      path:'/help',
      name:'help',
      component:help
    },
    {
      path:'/customService',
      name:'customService',
      component:customService
    },
    // {
    //   path: '**',   // 错误路由
    //   redirect: '/home'   //重定向
    // }

  ]
})
router.beforeEach((to, from, next) => {
  console.log('navigation-guards');
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  const nextRoute = ['home', 'manage', 'userCenter', 'customService'];
  let isLogin = this.$store.state.mine.isLogin;  // 是否登录
  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (nextRoute.indexOf(to.name) >= 0) {
    if (!isLogin) {
      console.log('what fuck');
      router.push({ name: 'login' })
    }
  }
  // 已登录状态；当路由到login时，跳转至home
  if (to.name === 'login') {
    if (isLogin) {
      router.push({ name: 'home' });
    }
  }
  next();
});
export default router;
