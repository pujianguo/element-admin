/*
 * @Author: pujianguo
 * @Date: 2019-02-22 14:46:51
 * @Last Modified by: pujianguo
 * @Last Modified time: 2019-11-26 23:34:14
 * @Description: 路由设置，菜单栏数据取appRouter中的路由数据
 */

import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/layout'

// home
import Home from './views/home/index'

// form
import Form from './views/form/index'
import Baseform from './views/form/base/index'

// Template
import Template from './views/template/index'
import User from './views/template/user/index'
import UserList from './views/template/user/list'
import UserEdit from './views/template/user/edit'
import UserDetail from './views/template/user/detail'
import Gailan from './views/template/gailan/index'
import Transition from './views/template/transition/index'

// other
import Login from './views/other/login'
import Register from './views/other/register'
import NoAccess from './views/other/notAccess'
import NotFound from './views/other/notFound'
import Page from './views/other/page'

Vue.use(Router)

export const otherRouter = [
  // login
  // register,
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/noaccess',
    name: 'Noaccess',
    component: NoAccess
  },
  {
    path: '/page',
    name: 'Page',
    component: Page
  }
]

export const appRouter = {
  path: '/',
  component: Layout,
  children: [
    {
      path: '/',
      name: 'Home',
      icon: 'iconfont icon-zonglan1',
      meta: { title: '首页' },
      component: Home
    },
    {
      path: 'form',
      name: 'Form',
      icon: 'iconfont icon-zonglan',
      meta: { title: '表单' },
      component: Form,
      redirect: 'form/base',
      children: [
        {
          path: 'base',
          component: Baseform,
          meta: { title: '基础表单', firstPageName: null },
          name: 'BaseForm'
        }
      ]
    },
    {
      path: 'template',
      name: 'Template',
      icon: 'iconfont icon-zonglan',
      meta: { title: '模板页面' },
      component: Template,
      redirect: 'template/user',
      children: [
        {
          path: 'user',
          component: User,
          meta: { title: '用户', firstPageName: 'User' },
          children: [
            { path: '', name: 'User', component: UserList, meta: { title: '用户', isfirstPage: true } },
            { path: 'add', name: 'User_Add', component: UserEdit, meta: { title: '添加用户' } },
            { path: 'update/:id', name: 'User_Update', component: UserEdit, meta: { title: '修改用户' } },
            { path: 'detial/:id', name: 'User_Detail', component: UserDetail, meta: { title: '用户详情' } }
          ]
        },
        {
          path: 'gailan',
          component: Gailan,
          meta: { title: '概览', firstPageName: false },
          name: 'Gailan'
        },
        {
          path: 'transition',
          component: Transition,
          meta: { title: '动画切换', firstPageName: false },
          name: 'Transition',
          redirect: 'transition/a',
          children: [
            {
              path: 'a',
              name: 'Transition_A',
              component: () => import('@/views/template/transition/components/a.vue')
            },
            {
              path: 'b',
              name: 'Transition_B',
              component: () => import('@/views/template/transition/components/b.vue')
            }
          ]
        }
      ]
    }
  ]
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    ...otherRouter,
    appRouter,
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
