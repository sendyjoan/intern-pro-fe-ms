// src/plugins/toast.js
import Swal from 'sweetalert2';

export default {
  install(app) {
    app.config.globalProperties.$toast = (status, message) => {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: status, // success | error | warning | info | question
        title: message,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    };
  },
};
