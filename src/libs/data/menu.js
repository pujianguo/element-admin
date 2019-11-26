export default [
  {
    name: 'Home',
    title: '首页',
    icon: 'iconfont icon-zonglan1'
  },
  {
    name: 'Form',
    title: '表单',
    icon: 'iconfont icon-zonglan',
    children: [
      {
        name: 'BaseForm',
        title: '基础表单'
      }
    ]
  },
  {
    name: 'Template',
    title: '模板页面',
    icon: 'iconfont icon-zonglan',
    children: [
      {
        name: 'User',
        title: '用户'
      },
      {
        name: 'Transition',
        title: '动画切换'
      }
    ]
  }
]
