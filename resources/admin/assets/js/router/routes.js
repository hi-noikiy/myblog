import Layout from '../components/common/Layout.vue'

const loginRouter = {
  name: 'login',
  path: '/login',
  component: resolve => require(['../pages/Login'], resolve)
}
export const homeRouter = {
  path: '/',
  name: 'homeRouter',
  redirect: 'home',
  component: Layout,
  children: [
    {
      name: 'home_index',
      path: 'home',
      meta: {
        requireAuth: true
      },
      component: resolve => require(['../pages/Home'], resolve)
    }
  ]
}
export const appRouters = [
  {
    path: '/articles',
    name: 'articles',
    title: '内容管理',
    component: Layout,
    icon: 'person',
    children: [
      {
        name: 'articles_index',
        path: 'index',
        title: '文章列表',
        meta: {
          requireAuth: true
        },
        component: resolve => { require(['../pages/articles/List'], resolve) }
      },
      {
        name: 'article_add',
        path: 'add',
        title: '添加文章',
        meta: {
          requireAuth: true
        },
        component: resolve => { require(['../pages/articles/Add'], resolve) }
      }
    ]
  }
]

export const routes = [loginRouter, homeRouter, ...appRouters]
