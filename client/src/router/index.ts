import { createRouter, createWebHistory } from 'vue-router'

import DeskManage from '../views/DeskManage/index.vue'
import CategoryManage from '../views/CategoryManage/index.vue'
import GoodsManage from '../views/GoodsManage/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login/index.vue'),
    },
    // {
    //   path: '/',
    //   component: () => import('../components/Layout/Layout.vue'),
    //   redirect: '/home',
    //   children: [
    //     {
    //       path: '/home',
    //       name: 'home',
    //       component: HomeView
    //     },
    //     {
    //       path: '/about',
    //       name: 'about',
    //       // route level code-splitting
    //       // this generates a separate chunk (About.[hash].js) for this route
    //       // which is lazy-loaded when the route is visited.
    //       component: () => import('../views/AboutView.vue')
    //     }
    //   ]
    // },
    {
      path: '/manage',
      component: () => import('../components/Layout/ManageLayout.vue'),
      redirect: '/manage/index',
      meta: { name: '管理中心' },
      children: [
        {
          path: 'index',
          name: 'index',
          meta: { name: '总览' },
          component: () => import('../views/Manage/index.vue')
        },
        {
          path: 'desk',
          name: 'desk',
          meta: { name: '桌位管理' },
          component: DeskManage
        },
        {
          path: 'goods',
          name: 'goods',
          meta: { name: '菜品管理' },
          component: GoodsManage
        },
        {
          path: 'category',
          name: 'category',
          meta: { name: '类别管理' },
          component: CategoryManage,
    },
      ]
    }
  ]
})

export default router
