import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { menu } from './menu'
import { MenuItem } from '@/types'

const getMenu = () => {
  const arr: Array<RouteRecordRaw> = [];

  menu.forEach((item: MenuItem) => {
    arr.push({
      path: item.key,
      name: item.key,
      component: item.component
    })
  })
  return arr
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    children: [
      ...getMenu()
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/',
    redirect: { name: 'login' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
