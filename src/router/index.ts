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
        path: '/listing/:verified/:location/:propertyStatus/cost/:costFrom/:costTo/area/:areaFrom/:areaTo',
        name: 'Listing',
        component: ListingView,
      },
      {
        path: '/authenticate',
        name: 'Signin',
        component: ()=> import('@/views/AuthenticationView.vue')
      },
      {
        path: '/profile',
        name: 'Profile',
        component: ()=> import('@/views/ProfileView.vue')
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
