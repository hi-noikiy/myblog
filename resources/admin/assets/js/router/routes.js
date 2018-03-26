import Layout from '../components/common/Layout.vue'

const loginRouter = {
  name: 'login',
  path: '/login',
  component: resolve => require(['../pages/Login'], resolve)
}

const appRouters = [
  {
    path: '/',
    component: Layout,
    meta: {
      requireAuth: true
    },
    children: [
      {
        name: 'home',
        path: '/',
        component: resolve => require(['../pages/Home'], resolve)
      }
    ]
  }
]

export default [loginRouter, ...appRouters]
