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
              <div class="card-header"><h4>OTP Verification</h4></div>

              <div class="card-body">
                <form @submit.prevent="verification" class="needs-validation" novalidate="">
                  <div class="form-group">
                    <label for="otp">OTP</label>
                    <input v-model="otp" id="otp" type="otp" class="form-control" name="otp" tabindex="1" required autofocus>
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
import axios from 'axios';
export default {
  name: 'ForgotPassword',
    components: {
        Logo
    },
  data()
  {
    return {
        otp:"",
        currentYear: new Date().getFullYear()
    }
  },
  methods:{
    async verification() {
      try {
        if (this.otp === "") {
          this.$toast("error", "OTP must be fill!");
          return; // Penting: hentikan eksekusi jika input kosong
        }

        const result = await axios.post(
            `${import.meta.env.VITE_AUTH_SERVICE}/auth/otp-validation`,
            {
              otp: this.otp
            }
        );
        console.log(result);
        if (result.status === 200 && result.data.success) {
          localStorage.setItem("otp", this.otp);
          // Uncomment jika ingin redirect:
          this.$toast("success","OTP Verification Success");
          this.$router.push('/new-password');
        } else {
          this.$toast("error", result.data.message || 'OTP verification failed!');
        }
      }catch (error) {
        this.$toast("error", "An error occurred during OTP verification.");
        console.error("Error during OTP verification:", error);
      }
    }
  }
}
</script>