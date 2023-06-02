// Composables
import { createRouter, createWebHistory } from 'vue-router'
import ListingView from '../views/ListingView.vue';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
      {
        path: 'listing',
        name: 'Listing',
        component: ListingView,
      },
      {
        path: 'login',
        name: 'Login',
        component: ()=> import('@/views/LoginView.vue')
      },
      {
        path: 'signup',
        name: 'Signup',
        component: ()=> import('@/views/SignupView.vue')
      },
      // {
      //   path: 'profile',
      //   name: 'Profile',
      //   component: ()=> import('@/views/ProfileView.vue')
      // },
      {
        path: 'propertydetails/:propertyId',
        name: 'Property Details',
        component: ()=> import('@/views/PropertyDetailsView.vue')
      },
      {
        path: 'contactus',
        name: 'Contact Us',
        component: ()=> import('@/views/ContactUs.vue')
      },
      {
        path: 'createproperty',
        name: 'Create Property',
        component: ()=> import('@/views/CreatePropertyView.vue')
      },
      // {
      //   path: 'updateproperty',
      //   name: 'Update Property',
      //   component: () => import('@/views/updatePropertyView.vue')
      // }
    ],
  },
  {
    path: '/error',
    name: 'Error page',
    component: () => import('@/views/ErrorView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
