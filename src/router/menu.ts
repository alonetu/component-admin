import { MenuItem } from '@/types/index';

export const menu: MenuItem[] = [
  {
    title: '欢迎页',
    key: '/home/welcome',
    component: () => import('@/views/welcome/index.vue')
  }
]
