import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // Permet de remonter automatiquement en haut de la page lors d'un changement de route
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/data-ia',
      name: 'data-ia',
      component: () => import('../views/DataView.vue'),
    },
    {
      path: '/data-ia/retail-analytics',
      name: 'retail-analytics',
      component: () => import('../views/projects/RetailAnalyticsView.vue'),
    },
    {
      path: '/developpement',
      name: 'development',
      component: () => import('../views/DevelopmentView.vue'),
    },
    {
      path: '/a-propos',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
  ],
})

export default router