<template>
    <div id="login">
    <section class="section">
      <div class="container mt-5">
        <div class="row">
          <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div class="login-brand">
              <img ssrc="https://schooltech-file.s3.ap-southeast-2.amazonaws.com/logo-vertical-color.png" alt="logo" width="300" >
            </div>

            <div class="card card-primary">
              <div class="card-header"><h4>Forgot Password</h4></div>

              <div class="card-body">
                <form @submit.prevent="forgot" class="needs-validation" novalidate="">
                  <div class="form-group">
                    <label for="username">Username</label>
                    <input v-model="username" id="username" type="username" class="form-control" name="username" tabindex="1" required autofocus>
                  </div>
                  <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <a @click="$router.push('/login')" class="btn btn-info btn-lg btn-block" tabindex="4">
                            Back
                            </a>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-lg btn-block" tabindex="4">
                            Send OTP
                            </button>
                        </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="simple-footer">
              Copyright &copy; 2021 - {{ currentYear }} SchoolTech Indonesia 
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from "sweetalert2";
export default {
  name: 'ForgotPassword',
  data()
  {
    return {
        username:"",
        currentYear: new Date().getFullYear()
    }
  },
  methods:{
    async forgot() {
      console.log("Login called");

      if (this.username === "" || this.password === "") {
        this.$swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'error',
          title: 'Username dan Password Wajib Diisi!',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        return; // Penting: hentikan eksekusi jika input kosong
      }

      try {
        const result = await axios.post(
          `${import.meta.env.VITE_AUTH_SERVICE}/auth/login`,
          {
            username: this.username,
            password: this.password
          }
        );

        if (result.status === 200) {
          this.showSuccessSwal("Login Success");
          localStorage.setItem("token", JSON.stringify(result.data.token));
          // Uncomment jika ingin redirect:
          console.log('Running Router');
          this.$router.push('/about');
        } else {
          this.showErrorSwal(result.data.message || 'Login gagal silahkan coba lagi!');
        }
      } catch (error) {
        let message = error.response?.data?.message || 'Login gagal silahkan coba lagi!';
        this.showErrorSwal(message);
      }
    },
    showSuccessSwal(information){
        this.$swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: information,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });
    },
    showErrorSwal($mess){
      Swal.fire({
        title: 'Error!',
        text: $mess,
        icon: 'error',
        confirmButtonText: 'OK',
        timer: 5000
      })
    }
  }
}
</script>