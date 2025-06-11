// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import router from './router';
import axios from 'axios';

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(VueSweetalert2);
app.use(router)
// app.use(axios);
app.mount('#app')

// createApp(App).mount('#app')
