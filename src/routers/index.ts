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
          title: '首页'
        },
        component: () => import('@/views/homeView.vue'),
      },
      {
        path: '/table',
        name: '表格',
        meta: {
          icon: 'icon-four-squares',
          title: '表格'
        },
        component: () => import('@/views/tableView.vue'),
      },
      {
        path: '/charts',
        name: '图表',
        meta: {
          icon: 'icon-tubiao',
          title: '图表'
        },
        component: () => import('@/views/chartsView.vue'),
      },
      {
        path: '/error',
        name: '错误页面',
        meta: {
          icon: 'icon-tubiao',
          title: '错误'
        },
        component: () => import('@/views/errorView.vue')
      },
      {
        path: '/problem',
        name: '疑问',
        meta: {
          icon: 'icon-yiwen',
          title: '疑问'
        },
        component: () => import('@/views/problemView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: '登录',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/loginView.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

//路由守卫
router.beforeEach((to, _from, next) => {
  document.title = `${to.meta.title} - Watermelon`;
  NProgress.start();
  const my_user = JSON.parse(localStorage.getItem('my_user') || 'null')
  //根据my_user判断是否登录,pasttime为过期时间，单位为毫秒，这里设置为7天，mytime为登录时间
  //remember为是否七天免登录，true为是，false为否
  if (to.path === '/login') {
    if (my_user) {
      next({ path: '/' })
    } else {
      next()
    }
  }
  else {
    if (my_user) {
      if (my_user.remember) {
        console.log(my_user.mytime, my_user.pasttime, new Date().getTime());
        if (new Date().getTime() - my_user.mytime > my_user.pasttime) {
          localStorage.removeItem('my_user')
          next({ path: '/login' })
        } else {
          next()
        }
      } else {
        next()
      }
      
    } else {
      next({ path: '/login' })
    }
  }
});
router.afterEach(() => {
  NProgress.done()
})

export default router;

