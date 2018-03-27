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
    children: [
      {
        name: 'home',
        path: '/',
        meta: {
          requireAuth: true
        },
        component: resolve => require(['../pages/Home'], resolve)
      },
      {
        name: 'articles',
        path: '/articles',
        meta: {
          requireAuth: true
        },
        component: resolve => require(['../pages/articles/List'], resolve)
      }
    ]
  }
]

export default [loginRouter, ...appRouters]
