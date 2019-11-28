import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/layout'

export const otherRouter = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/other/login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/other/register')
  },
  {
    path: '/notaccess',
    name: 'NoTAccess',
    component: () => import('@/views/other/notAccess')
  }

]

const routerList = []
function importAll (r) {
  r.keys().forEach(key => {
    routerList.push(r(key).default)
  })
}
importAll(require.context('./modules', true, /\.js/))

export const appRouter = {
  path: '/',
  component: Layout,
  children: [
    {
      path: '',
      name: 'Home',
      component: () => import('@/views/home/index')
    },
    ...routerList,
    {
      path: '*',
      name: 'notfound',
      component: () => import('@/views/other/notFound')
    }
  ]
}

Vue.use(VueRouter)

const routes = [
  ...otherRouter,
  appRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
