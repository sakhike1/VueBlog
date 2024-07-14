import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import helloWorld from  '@/components/common/helloWorld'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/LoginView',
    name: 'LoginView',
    component: () => import(/* webpackChunkName: "LoginView" */ '../views/LoginView.vue')
  },
  {
    path: '/registerView',
    name: 'registerView',
    component: () => import(/* webpackChunkName: "registerView" */ '../views/registerView.vue')
  },
  {
    path: '/Contact',
    name: 'ContactPage',
    component: () => import(/* webpackChunkName: "ContactPage" */ '../views/ContactPage.vue')
  },
  {
    path: '/helloWorld',
    name: 'helloWorld',
    component: helloWorld
    
  },
  {
    path: '/blog',
    name: 'BlogView',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "BlogView" */ '../views/BlogView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('token')
    if (token) {
      return next()
    }
    return next('/LoginView')
  }
  next()
})

export default router
