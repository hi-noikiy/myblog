import Layout from '../components/common/Layout.vue'

const loginRouter = {
  path: '/login',
  component: resolve => require(['../pages/Login'], resolve)
}

const appRouters = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: resolve => require(['../pages/Home'], resolve)
      }
    ]
  }
]

export default [loginRouter, ...appRouters]
