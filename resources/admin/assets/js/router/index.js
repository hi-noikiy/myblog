import Vue from 'vue'
import VueRouter from 'vue-router'
import iView from 'iview'
import { routes } from './routes'
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
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

router.afterEach((to) => {
  iView.LoadingBar.finish()
})

export default router
