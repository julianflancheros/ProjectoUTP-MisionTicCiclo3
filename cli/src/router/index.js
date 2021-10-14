import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import store from '../store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/crud',
    name: 'CRUD',
    component: () => import(/* webpackChunkName: "about" */ '../views/CRUD.vue')
  },
  {
    path: '/equipo',
    name: 'Equipo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Equipo.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    meta: {requireAuth: true}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  const rutaProtegida = to.matched.some(record=>record.meta.requireAuth);

  if (rutaProtegida && store.state.token == '') {
    next({name: 'Admin'});
  }
  else{
    next()
  }
})

export default router
