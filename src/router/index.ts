import { createRouter, createWebHistory } from 'vue-router';

import { usePostPropertyStore } from '@/store/postProperty';


const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      // {
      //   path: '/',
      //   redirect: '/listing',
      // },
      {
        path: '/test',
        component: () => import('@/components/forms/flat-or-apartment/FlatOrApartmentDetails.vue')
      },
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
      {
        path: '/aboutus',
        name: 'About US',
        component: () => import('@/views/AboutUsView.vue')
      },
      {
        path: '/contactus',
        name: 'Contact Us',
        component: () => import('@/views/ContactUs.vue')
      },
      {
        path: '/signin',
        name: 'Sign In',
        component: () => import('@/views/SignInView.vue')
      },
      {
        path: '/signup',
        name: 'Sign Up',
        component: () => import('@/views/SignUpView.vue')
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
        component: () => import('@/views/PropertyDetailsView.vue')
      },
      {
        path: '/quotation',
        name: 'Quotation Details',
        component: () => import('@/views/QuotationView.vue')
      },
      {
        path: '/createproperty',
        name: 'Create Property',
        component: () => import('@/views/CreatePropertyView.vue')
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
      {
        path: '/propertydashboard',
        name: 'property_dashboard',
        component: () => import('@/views/PropertyDashboardView.vue'),
      },
      {
        path: '/project',
        name: 'project',
        component: () => import('@/views/ProjectView.vue'),
      },
      {
        path: '/capture-lead',
        name: "capturelead",
        component: () => import('@/views/CaptureLeadView.vue'),
      },
      {
        path: '/lead-detail',
        name: "leaddetail",
        component: () => import('@/views/LeadDetailView.vue'),
      },
      // {
      //   path: '/create-website',
      //   name: 'createwebsite',
      //   component: () => import('@/views/CreateWebsiteView.vue'),
      // }
    ],
  },

  // NEW ROUTES FOR POST PROPERTY
  {
    path: '/postproperty',
    name: 'post-property',
    component: () => import('@/views/PostPropertyView.vue'),
    children: [
      {
        path: '',
        name: 'property-basic-info',
        component: () => import('@/components/forms/BasicPropertyInfo.vue')
      },
      {
        path: 'location',
        name: 'property-location',
        component: () => import('@/components/forms/PropertyLocation.vue'),
      },
      {
        path: 'details',
        name: 'property-details',
        component: () => import('@/components/forms/PropertyDetails.vue'),
      },
      {
        path: 'gallery',
        name: 'property-gallery',
        component: () => import('@/components/forms/PropertyGallery.vue')
      },
      {
        path: 'amenities',
        name: 'property-amenities',
        component: () => import('@/components/forms/PropertyAmenities.vue')
      }
    ]
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/ProfileView.vue'),
    children: [
      {
        path: '',
        name: 'Profile Home',
        component: () => import('@/components/profile/Profile.vue'),
      },
      {
        path: 'editprofile',
        name: 'Edit Profile',
        component: () => import('@/components/profile/EditProfile.vue'),
      },
      {
        path: 'properties',
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
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // return desired position
    return { top: 0, behavior: 'smooth' }
  },
});

// Navogation guard for Post Property Forms 
router.beforeEach((to, from, next) => {
  const postProperty = usePostPropertyStore();

  const normalizedPath = to.path.replace(/\/$/, '');
  
  if (normalizedPath === '/postproperty') {
    postProperty.basicActive = true;
    postProperty.activeFormName = 'basic';
  }

  if (normalizedPath.startsWith('/postproperty')) {
    if (normalizedPath === '/postproperty') {
      postProperty.handleFormActiveRouting(normalizedPath);
      next();
    } else if ((from.path === postProperty.getPreviousPath(normalizedPath) && postProperty.isFormFilled(from.path)) || postProperty.isFormFilled(normalizedPath) || postProperty.isFormFilled(postProperty.getPreviousPath(normalizedPath))) {
      postProperty.handleFormActiveRouting(normalizedPath);
      next();
    } else {
      postProperty.handleFormActiveRouting(from.path);
      // alert('This path is not directly available.');
    }
  } else {
    next();
  }
});

export default router;
