import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jouer',
      name: 'jouer',
      component: () => import('../views/JouerView.vue')
    },
    {
      path: '/qcmUnique',
      name: 'qcmUnique',
      component: () => import('../views/QcmUniqueView.vue')
    },
    {
      path: '/qcmMulti',
      name: 'qcmMulti',
      component: () => import('../views/QcmMultiView.vue')
    },
    {
      path: '/challenge',
      name: 'challenge',
      component: () => import('../views/ChallengeView.vue')
    },
    {
      path: '/liaison',
      name: 'liaison',
      component: () => import('../views/LiaisonView.vue')
    },
    {
      path: '/ordre',
      name: 'ordre',
      component: () => import('../views/OrdreView.vue')
    },
    {
      path: '/classement',
      name: 'classement',
      component: () => import('../views/ClassementView.vue')
    }
  ]
})

export default router
