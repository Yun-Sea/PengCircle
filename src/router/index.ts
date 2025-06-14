import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/concern',
    name: 'Concern',
    component: () => import('@/views/MyConcern.vue'),
    meta: {
      title: '关注',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
