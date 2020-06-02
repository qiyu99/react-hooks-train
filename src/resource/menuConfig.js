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
        key: '/admin/ui/buttons',
      },
      {
        title: '提示框',
        key: '/admin/ui/message',
      },
      {
        title: 'Loading',
        key: '/admin/ui/loading'
      }
    ]
  },
  {
    title: '表单',
    key: '/admin/form',
    children: [
      {
        title: '登录',
        key: '/admin/form/login'
      }
    ]
  },
  {
    title: '表格',
    key: '/admin/table',
    children: [
      {
        title: '基础表格',
        key: '/admin/table/basic'
      },
      {
        title: '高级表格',
        key: '/admin/table/high'
      }
    ]
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