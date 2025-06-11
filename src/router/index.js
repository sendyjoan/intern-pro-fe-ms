import { createRouter, createWebHistory } from 'vue-router';
// import TheWelcome from './components/TheWelcome.vue';
import Login from '../pages/Login.vue';
import Doremi from '../pages/Doremi.vue';
import ForgotPssword from '../pages/ForgotPassword.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/about', component: Doremi },
  { path: '/forgot-password', component: ForgotPssword},

];


const router = createRouter({
  history: createWebHistory(),  // Menyediakan mode history untuk URL yang bersih
  routes,  // Daftar route
});

export default router;