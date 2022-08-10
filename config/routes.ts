export default [
  {path: '/login', layouts: false, exact: true, component: '@/pages/User/Login'},
  {path: '/', component: '@/pages/index'},
  {
    path: '/',
    component: '@/layouts/index',
    name: "User",
    icon: "dashboard",
    routes: [
      {path: '/admin', name: 'admin', component: '@/pages/User/Admin/index'},//access: "isAdmin",
      {path: '/editor', name: 'editor', component: '@/pages/User/Editor/index'}

    ]
  }

]
