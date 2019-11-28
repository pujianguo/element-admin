export default {
  path: 'form',
  name: 'Form',
  icon: 'iconfont icon-zonglan',
  meta: { title: '表单' },
  component: () => import('@/views/form/index'),
  redirect: 'form/base',
  children: [
    {
      path: 'base',
      name: 'BaseForm',
      component: () => import('@/views/form/base/index'),
      meta: { title: '基础表单', firstPageName: null }
    }
  ]
}
