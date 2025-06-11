// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import router from './router';
import axios from 'axios';
import toast from './plugins/toast';

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(VueSweetalert2);
router.beforeEach((to, from, next) => {
  // Set the document title based on the route meta
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'Default Title'; // Fallback title
  }
  next();
}
);
app.use(router)
app.use(toast);
app.mount('#app')

// createApp(App).mount('#app')
