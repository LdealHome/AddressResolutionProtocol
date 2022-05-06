import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('../views/Home.vue')
  }
  ,
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
