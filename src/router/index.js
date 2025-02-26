import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CV from '@/views/CV.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cv',
    name: 'cv view',
    component: CV
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
