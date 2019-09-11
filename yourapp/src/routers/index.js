// import Login from '@/views/login'

const routes = [{
  name: '/',
  path: '/',
  redirect: '/login'
}, {
  name: '/login',
  path: '/login',
  component: () => import('@/views/login/index.vue')
},
{
  path: '/layout',
  name: 'layout',
  component: () => import('../views/layout/index.vue')
  // children: routes
}, {
  path: '/content',
  name: 'content',
  component: () => import('../views/content/index.vue')
  // children: routes
}
]
export default routes
