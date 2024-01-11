import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/subscribe',
      name: 'subscribe',
      component: () => import('../views/SubscribeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/sarathi',
      name: 'admin-login',
      component: () => import('../views/AdminLoginView.vue')
    },
    {
      path: '/sarathi-signup',
      name: 'admin-signup',
      component: () => import('../views/AdminSignupView.vue')
    },
    {
      path: '/console',
      name: 'admin-console',
      component: () => import('../views/ConsoleView.vue')
    },
  ]
})

export default router
