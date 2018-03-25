import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.meta.requireAuth) {
    if (!token) {
      next('/login')
    } else {
      next()
    }
  } else {
    if (token) {
      next('/')
    } else {
      next()
    }
  }
})

export default router
