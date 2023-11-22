import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        redirect: '/listing',
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },      
      {
        path: '/aboutus',
        name: 'About US',
        component: ()=> import('@/views/AboutUsView.vue')
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
        path: '/password',
        name: 'Handle Password',
        component: () => import('@/views/HandlePasswordView.vue')
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
        path: '/quotation',
        name: 'Quotation Details',
        component: ()=> import('@/views/QuotationView.vue')
      },
      {
        path: '/createproperty',
        name: 'Create Property',
        component: ()=> import('@/views/CreatePropertyView.vue')
      },
      {
        path: '/privacypolicy', 
        name: 'Privacy Policy',
        component: () => import('@/views/PrivacyPolicyView.vue')
      },
      {
        path: '/termsofservices',
        name: 'Terms of Services',
        component: () => import('@/views/TermOfServiceView.vue')
      },
      {
        path: '/userdashboard',
        name: 'user_dashboard',
        component: () => import('@/views/UserDashboardView.vue'),
      },
    ],
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/ProfileView.vue'),
    children: [
      {
        path: '/profile',
        name: 'Profile Home',
        component: () => import('@/components/profile/Profile.vue'),
      },
      {
        path: '/profile/editprofile',
        name: 'Edit Profile',
        component: () => import('@/components/profile/EditProfile.vue'),
      },
      {
        path: '/profile/properties',
        name: 'Properties',
        component: () => import('@/components/profile/Properties.vue'),
      }
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
