const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/forntpage', component: () => import('pages/ForntPage.vue') },
      { path: '/mobile', component: () => import('pages/MobilesPage.vue') },
      { path: '/LoginHelli', component: () => import('pages/LoginHelli.vue') }

    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
