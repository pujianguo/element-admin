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
    },
    {
      path: 'markdown',
      name: 'Markdown',
      component: () => import('@/views/form/markdown/index'),
      meta: { title: 'MarkDown', firstPageName: false }
    },
    {
      path: 'edit',
      name: 'Editfrom',
      component: () => import('@/views/form/edit/index'),
      meta: { title: '编辑器', firstPageName: false }
    },
    {
      path: 'codemirror',
      name: 'Codemirror',
      component: () => import('@/views/form/codemirror/index'),
      meta: { title: 'Codemirror', firstPageName: false }
    },
    {
      path: 'upload',
      name: 'Upload',
      component: () => import('@/views/form/upload/index'),
      meta: { title: 'Upload', firstPageName: false }
    }
  ]
}
