import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/scan',
    name: 'Scan',
    component: () => import('@/pages/scan/index.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/pages/auth/index.vue')
  },
  {
    path: '/',
    redirect: '/auth'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
