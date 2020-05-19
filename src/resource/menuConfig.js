const menuList = [
  {
    title: '首页',
    key: '/admin/home'
  },
  {
    title: 'UI',
    key: '/admin/ui',
    children: [
      {
        title: '按钮',
        key: '/admin/ui/button',
      },
      {
        title: '弹窗',
        key: '/admin/ui/modals',
      },
      {
        title: 'Loading',
        key: '/admin/ui/loading'
      }
    ]
  },
  {
    title: '表单',
    key: '/admin/form'
  },
  {
    title: '图表',
    key: '/admin/charts',
    children: [
      {
        title: '折线图',
        key: '/admin/charts/line'
      },
      {
        title: '饼图',
        key: '/admin/charts/circle'
      }
    ]
  },
  {
    title: '权限设置',
    key: '/admin/permission'
  }
]

export default menuList;