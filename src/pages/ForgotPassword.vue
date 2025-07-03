<template>
    <div id="login">
    <section class="section">
      <div class="container mt-5">
        <div class="row">
          <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div class="login-brand">
              <Logo />
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
import Logo from '../components/LogoAuth.vue';
export default {
  name: 'ForgotPassword',
  components: {
    Logo
  },
  data()
  {
    return {
        username:"",
        currentYear: new Date().getFullYear()
    }
  },
  methods:{
    async forgot() {
      if (this.username === "") {
        this.$toast("error", "Username must be fill!");
        return; // Penting: hentikan eksekusi jika input kosong
      }

      try {
        const result = await this.$axios.post(
          `${import.meta.env.VITE_AUTH_SERVICE}/auth/forgot-password`,
          {
            username: this.username,
          }
        );
        if (result.status === 200 && result.data.success) {
          this.$toast("success", "OTP has been sent to your email!");
          this.$router.push('/otp-verification');
        } else {
          this.$toast("error", result.data.message);
        }
      } catch (error) {
        let message = error.response?.data?.message || 'Failed to send OTP, please try again!';
        this.$toast("error", message);
      }
    }
  }
}
</script>