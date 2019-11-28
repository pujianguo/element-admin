
export default {
  path: 'template',
  name: 'Template',
  icon: 'iconfont icon-zonglan',
  meta: { title: '模板页面' },
  component: () => import('@/views/template/index'),
  redirect: 'template/user',
  children: [
    {
      path: 'user',
      component: () => import('@/views/template/user/index'),
      meta: { title: '用户', firstPageName: 'User' },
      children: [
        { path: '', name: 'User', component: () => import('@/views/template/user/list'), meta: { title: '用户', isfirstPage: true } },
        { path: 'add', name: 'User_Add', component: () => import('@/views/template/user/edit'), meta: { title: '添加用户' } },
        { path: 'update/:id', name: 'User_Update', component: () => import('@/views/template/user/edit'), meta: { title: '修改用户' } },
        { path: 'detail/:id', name: 'User_Detail', component: () => import('@/views/template/user/detail'), meta: { title: '用户详情' } }
      ]
    },
    {
      path: 'gailan',
      name: 'Gailan',
      component: () => import('@/views/template/gailan/index'),
      meta: { title: '概览', firstPageName: false }
    },
    {
      path: 'transition',
      component: () => import('@/views/template/transition/index'),
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
