<template>
    <div id="login">
    <section class="section">
      <div class="container mt-5">
        <div class="row">
          <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div class="login-brand">
              <Logo/>
            </div>

            <div class="card card-primary">
              <div class="card-header"><h4>Setting New Password</h4></div>

              <div class="card-body">
                <form @submit.prevent="verification" class="needs-validation" novalidate="">
                  <div class="form-group">
                    <label for="password">New Password</label>
                    <input v-model="password" id="password" type="password" class="form-control" name="password" tabindex="1" required autofocus>
                  </div>
                  <div class="form-group">
                    <label for="confirm_password">Confirm New Password</label>
                    <input v-model="confirm_password" id="confirm_password" type="password" class="form-control" name="confirm_password" tabindex="1" required autofocus>
                  </div>
                  <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-lg btn-block" tabindex="4">
                            Verify OTP
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
import Logo from '../components/LogoAuth.vue';
export default {
  name: 'ForgotPassword',
    components: {
        Logo
    },
  data()
  {
    return {
        password: "",
        confirm_password: "",
        currentYear: new Date().getFullYear()
    }
  },
  methods:{
    async verification() {
      if (this.password === "" || this.confirm_password === "") {
        this.$toast("error", "Password and Confirm Password must be filled!");
        return; // Penting: hentikan eksekusi jika input kosong
      } else if (this.password !== this.confirm_password) {
        this.$toast("error", "Password and Confirm Password must be the same!");
        return; // Penting: hentikan eksekusi jika input tidak sama
      }

      try {
        // const result = await axios.post(
        //   `${import.meta.env.VITE_AUTH_SERVICE}/auth/login`,
        //   {
        //     username: this.username,
        //     password: this.password
        //   }
        // );

        // if (result.status === 200) {
        //   this.showSuccessSwal("Login Success");
        //   localStorage.setItem("token", JSON.stringify(result.data.token));
        //   // Uncomment jika ingin redirect:
        //   console.log('Running Router');
        //   this.$router.push('/about');
        // } else {
        //   this.showErrorSwal(result.data.message || 'Login gagal silahkan coba lagi!');
        // }
        this.$toast("success","OTP Verification Success");
        this.$router.push('/login');
      } catch (error) {
        let message = error.response?.data?.message || 'Login gagal silahkan coba lagi!';
        this.$toast("error", message);
      }
    }
  }
}
</script>