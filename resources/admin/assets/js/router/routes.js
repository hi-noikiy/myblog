import Layout from '../components/common/Layout.vue'

const loginRouter = {
  path: '/login',
  component: resolve => require(['../pages/Login'], resolve)
}

const appRouters = [
  {
    path: '/',
    component: Layout
  }
]

export default [loginRouter, ...appRouters]
