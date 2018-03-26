import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store'
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (!store.state.user.auth) {
      next('login')
    } else {
      next()
    }
  }
  next()
})

export default router
