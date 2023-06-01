import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
      {
        path: '/listing',
        name: 'Listing',
        component: () => import('@/views/ListingView.vue'),
      },
      {
        path: '/authorization',
        name: 'Authorization',
        component: ()=> import('@/views/AuthorizationView.vue')
      },
      {
        path: '/propertydetails/:propertyId',
        name: 'Property Details',
        component: ()=> import('@/views/PropertyDetailsView.vue')
      },
      {
        path: '/contactus',
        name: 'Contact Us',
        component: ()=> import('@/views/ContactUs.vue')
      },
      {
        path: '/createproperty',
        name: 'Create Property',
        component: ()=> import('@/views/CreatePropertyView.vue')
      },
    ],
  },
  {
    path: '/error',
    name: 'Error page',
    component: () => import('@/views/ErrorView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
