export default [
  { path: '/', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  { path: '/interfaceSquare', name: '接口广场', icon: 'smile', component: './InterfaceSquare' },
  {
    path: '/interface_info/:id',
    name: '接口详情',
    component: './InterfaceInfo',
    hideInMenu: true,
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        name: '接口管理',
        icon: 'table',
        path: '/admin/interface',
        component: './Admin/InterfaceInfo',
      },
      {
        name: '用户管理',
        icon: 'TeamOutlined',
        path: '/admin/user/list',
        component: './Admin/UserList',
      },
      // { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
    ],
  },
  {
    path: '/account/center',
    name: '个人中心',
    icon: 'UserOutlined',
    component: './User/UserInfo',
    hideInMenu: true,
  },
  // { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
