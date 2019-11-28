
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
      path: 'pdf',
      component: () => import('@/views/template/pdf/index'),
      meta: { title: 'PDF', firstPageName: 'Pdf' },
      children: [
        { path: '', name: 'Pdf', component: () => import('@/views/template/pdf/first'), meta: { title: 'PDF', isfirstPage: true } },
        { path: 'object', name: 'Pdf_Object', component: () => import('@/views/template/pdf/object'), meta: { title: 'object展示' } },
        { path: 'apione', name: 'Pdf_Apione', component: () => import('@/views/template/pdf/apiOne'), meta: { title: '分页显示' } },
        { path: 'apitask', name: 'Pdf_Apitask', component: () => import('@/views/template/pdf/apiOne'), meta: { title: 'createLoadingTask' } },
        { path: 'apiall', name: 'Pdf_Apiall', component: () => import('@/views/template/pdf/apiAll'), meta: { title: '显示所有' } }
      ]
    },
    {
      path: 'info',
      name: 'Info', // 这里没有子组件，直接是一个页面
      component: () => import('@/views/template/info/index'),
      meta: { title: '个人信息', firstPageName: false }
    },
    {
      path: 'echarts',
      name: 'Echarts', // 这里没有子组件，直接是一个页面
      component: () => import('@/views/template/echarts/index'),
      meta: { title: 'Echarts', firstPageName: false }
    },
    {
      path: 'scroll',
      name: 'Scroll',
      component: () => import('@/views/template/scroll/index'),
      meta: { title: '滚动定位', firstPageName: false }
    },
    {
      path: 'transition',
      name: 'Transition',
      component: () => import('@/views/template/transition/index'),
      meta: { title: '动画切换', firstPageName: false },
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
