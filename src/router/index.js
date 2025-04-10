import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CV from '@/views/CV.vue'
import Competences from '@/views/Competences.vue'
import Projet from '@/views/Projet.vue'

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
  },
  {
    path: '/Competence',
    name: 'competence',
    component: Competences
  },
  {
    path: '/Projet',
    name: 'projet',
    component: Projet
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
