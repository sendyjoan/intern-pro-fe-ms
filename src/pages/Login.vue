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
              <div class="card-header"><h4>Login</h4></div>

              <div class="card-body">
                <form @submit.prevent="login" class="needs-validation" novalidate="">
                  <div class="form-group">
                    <label for="username">Username</label>
                    <input v-model="username" id="username" type="username" class="form-control" name="username" tabindex="1" required autofocus>
                  </div>
                  <div class="form-group">
                    <div class="d-block">
                    <label for="password" class="control-label">Password</label>
                      <div class="float-right">
                        <a v-on:click="forgot" href="#" class="text-small">
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    <input v-model="password" id="password" type="password" class="form-control" name="password" tabindex="2" required>
                  </div>

                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg btn-block" tabindex="4">
                      Login
                    </button>
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
  name: 'Login',
  components: {
    Logo
  },
  data()
  {
    return {
        username:"",
        password:"",
        currentYear: new Date().getFullYear()
    }
  },
  methods:{
    async login() {
      if (this.username === "" || this.password === "") {
        this.$toast("error", "Username and Password must be filled!");
        return;
      }

      try {
        const result = await this.$axios.post(
          `${import.meta.env.VITE_AUTH_SERVICE}/auth/login`,
          {
            username: this.username,
            password: this.password
          }
        );

        if (result.status === 200) {
          this.$toast("success","Login Success");
          localStorage.setItem("token", JSON.stringify(result.data.token));
          this.$router.push('/dashboard');
        } else {
          this.$toast("error", result.data.message || 'Login gagal silahkan coba lagi!');
        }
      } catch (error) {
        let message = error.response?.data?.message || 'Login gagal silahkan coba lagi!';
        this.$toast("error", message);
      }
    },
    forgot(){
      this.$router.push('/forgot-password');
    }
  }
}
</script>