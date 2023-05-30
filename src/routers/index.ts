// index.ts 
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import NProgress from 'nprogress';
import index from "@/views/indexView.vue";

//进度条
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 100, showSpinner: false })


const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'index',
    component: index,
    redirect: '/home',
    meta: {
      isbread: false
    },
    children: [
      {
        path: '/home',
        name: '首页',
        meta: {
          icon: 'icon-icon-home',
          title: '首页-Watermelon'
        },
        component: () => import('@/views/homeView.vue'),
      },
      {
        path: '/table',
        name: '表格',
        meta: {
          icon: 'icon-four-squares',
          title: '表格-Watermelon'
        },
        component: () => import('@/views/tableView.vue'),
      },
      {
        path: '/charts',
        name: '图表',
        meta: {
          icon: 'icon-tubiao',
          title: '图表-Watermelon'
        },
        component: () => import('@/views/chartsView.vue'),
      },
      {
        path: '/error',
        name: '错误页面',
        meta: {
          icon: 'icon-tubiao',
          title: '错误-Watermelon'
        },
        component: () => import('@/views/errorVIew.vue')
      },

    ]
  },
  {
    path: '/login',
    name: '登录',
    meta: {
      title: '登录-Watermelon'
    },
    component: () => import('@/views/loginView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  document.title = `${to.meta.title} | vue-manage-system`;

  NProgress.start();


  const my_user = JSON.parse(localStorage.getItem('my_user') || '')

  if (!my_user && to.path !== '/login') {
    next('/login');
  }
  else {
    if (my_user.remember === true) {
      const nowtime = new Date().getTime()
      if (nowtime - my_user.mytime > my_user.pasttime) {
        localStorage.removeItem('my_user');
        next('/login');
      } else {
        next();
      }
    } else {
      next();
    }
  }
});
router.afterEach(() => {
  NProgress.done()
})

export default router;

