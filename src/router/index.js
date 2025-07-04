import { createRouter, createWebHistory } from 'vue-router';
import NewPassword from '../pages/NewPassword.vue';
import Login from '../pages/Login.vue';
import ForgotPssword from '../pages/ForgotPassword.vue';
import OTPVerification from '../pages/OtpVerification.vue';
import Dashboard from '../pages/Dashboard.vue';
import Majority from '../pages/Majority.vue';
import Profile from '../pages/Profile.vue';
import axios from 'axios';

const routes = [
    { path: '/', component: Login, name: 'Login', meta: { title: 'Internpro - Login' } },
    { path: '/login', component: Login, meta: { title: 'Internpro - Login' } },
    { path: '/forgot-password', component: ForgotPssword, meta: { title: 'Internpro - Forgot Password' } },
    { path: '/otp-verification', component: OTPVerification, meta: { title: 'Internpro - OTP Verification' } },
    { path: '/new-password', component: NewPassword, meta: { title: 'Internpro - Reset Password', requiredOtp: true } },
    { path: '/dashboard', component: Dashboard, meta: { title: 'Internpro - Dashboard', requiredToken: true } },
    { path: '/majority', component: Majority, meta: { title: 'Internpro - Majority Management' } },
    { path: '/profile', name: 'profile', component: Profile, meta: { title: 'Profile - Internpro', requiredToken: true } }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    const otp = localStorage.getItem('otp');
    const token = localStorage.getItem('token');

    if (to.meta.requiredOtp && !otp) {
        return next({ name: 'Login' });
    }

    if (to.meta.requiredToken && !token) {
        return next({ name: 'Login' });
    }

    if (to.meta.requiredToken && token) {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_AUTH_SERVICE}/auth/validate-token`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json'
                    }
                }
            )
            if (response.status !== 200) {
                throw new Error('Token validation failed');
            }
            return next();
        } catch (error) {
            console.error('Token validation failed:', error);
            localStorage.removeItem('token');
            return next({ name: 'Login' });
        }
    }
    next();
});

export default router;