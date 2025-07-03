import { createRouter, createWebHistory } from 'vue-router';
import NewPassword from '../pages/NewPassword.vue';
import Login from '../pages/Login.vue';
import ForgotPssword from '../pages/ForgotPassword.vue';
import OTPVerification from '../pages/OtpVerification.vue';
import Dashboard from '../pages/Dashboard.vue';
import Majority from '../pages/Majority.vue';
import Profile from '../pages/Profile.vue';

const routes = [
  { path: '/', component: Login, meta: {
      title: 'Internpro - Login'
    } },
  { path: '/login', component: Login, meta: {
      title: 'Internpro - Login'
    } },
  { path: '/forgot-password', component: ForgotPssword},
  { path: '/otp-verification', component: OTPVerification },
  { path: '/new-password', component: NewPassword },
  { path: '/dashboard', component: Dashboard, meta: {
      title: 'Dashboard - Admin'
    }},
  { path: '/majority', component: Majority},
    {path: '/profile', name: 'profile', component: Profile, meta: {
            title: 'Profile - Intenrpro'
        }}
];


const router = createRouter({
  history: createWebHistory(),  // Menyediakan mode history untuk URL yang bersih
  routes,  // Daftar route
});

export default router;