import { createRouter, createWebHistory } from 'vue-router'

import DeskManage from '../views/DeskManage/index.vue'
import CategoryManage from '../views/CategoryManage/index.vue'
import GoodsManage from '../views/GoodsManage/index.vue'
import OrderManage from '../views/OrderManage/index.vue'
import UserManage from '../views/UserManage/index.vue'
import UserCenter from '../views/UserManage/usercenter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login/index.vue'),
    },
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
        {
          path: 'order',
          name: 'order',
          meta: { name: '订单管理' },
          component: OrderManage,
        },
        {
          path: 'user',
          name: 'user',
          meta: { name: '用户管理' },
          children: [
            {
              path: 'userlist',
              name: 'userlist',
              meta: { name: '用户列表' },
              component: UserManage,
            },
            {
              path: 'usercenter',
              name: 'usercenter',
              meta: { name: '个人中心' },
              component: UserCenter,
            }
          ]
        },
      ]
    }
  ]
})

export default router
