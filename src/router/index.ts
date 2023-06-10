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
        path: '/aboutus',
        name: 'About US',
        component: ()=> import('@/views/AboutUsView.vue')
      },
      {
        path: '/whatwedo',
        name: 'What We Do',
        component: ()=> import('@/views/WhatWeDoView.vue')
      },
      {
        path: '/contactus',
        name: 'Contact Us',
        component: ()=> import('@/views/ContactUs.vue')
      },
      {
        path: '/signin',
        name: 'Sign In',
        component: ()=> import('@/views/SignInView.vue')
      },
      {
        path: '/signup',
        name: 'Sign Up',
        component: ()=> import('@/views/SignUpView.vue')
      },
      {
        path: '/listing',
        name: 'Listing',
        component: () => import('@/views/ListingView.vue'),
      },
      {
        path: '/propertydetails/:propertyId',
        name: 'Property Details',
        component: ()=> import('@/views/PropertyDetailsView.vue')
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
  },
  {
    path: '/:pathMatch(.*)*', //will match everything and put it under `$route.params.pathMatch`
    name: 'Page Not Found',
    component: () => import('@/views/PageNotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return desired position
    return { top: 0 , behavior: 'smooth'}
  },
})

export default router
