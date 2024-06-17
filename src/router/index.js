// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';


const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: "/LoginView",
    name: "LoginView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue")
  },
  {
    path: "/registerView",
    name: "registerView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/registerView.vue")
  },
  {
    path: "/Contact",
    name: "ContactPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactPage.vue")
  },
  {
    path: "/blog",
    name: "BlogView",
    meta: {
    requiresAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BlogView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

 router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)){

    const token = localStorage.getItem('token')

    if (token){
      return next()
    }
  return next('/LoginView')
  }
  next()
 })

export default router
