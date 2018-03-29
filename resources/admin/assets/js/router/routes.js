import Layout from '../components/common/Layout.vue'

const loginRouter = {
  name: 'login',
  path: '/login',
  component: resolve => require(['../pages/Login'], resolve)
}

export const homeRouter = {
  name: 'home',
  path: '/',
  component: Layout
}

export const appRouters = [
  {
    path: '/articles',
    icon: 'person',
    name: 'articles',
    title: '内容管理',
    component: Layout,
    children: [
      {
        name: 'list',
        icon: 'person',
        path: 'index',
        title: '文章管理',
        meta: {
          requireAuth: true
        },
        component: resolve => require(['../pages/articles/List'], resolve)
      }
    ]
  }
]

export const routes = [
  homeRouter,
  loginRouter,
  ...appRouters
]
