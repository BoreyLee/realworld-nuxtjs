<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? 'Sign in' : 'Sign up' }}</h1>
          <p class="text-xs-center">
            <nuxt-link v-if="!isLogin" to="/login">Have an account?</nuxt-link>
            <nuxt-link v-else to="/register">Need an account?</nuxt-link>
          </p>

          <ul class="error-messages" v-if="errors">
            <template v-for="(key, value) in errors">
              <li :key="`${key}${index}`" v-for="(item, index) in key">
                {{ value }}：{{ item }}
              </li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset :disabled="disabled">
              <fieldset v-if="!isLogin" class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="user.username"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="email"
                  placeholder="Email"
                  v-model="user.email"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="user.password"
                  required
                  minlength="8"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                {{ isLogin ? 'Sign in' : 'Sign up' }}
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from '@/api/user.js';
const Cookie = process.client ? require('js-cookie') : undefined;
export default {
  middleware: 'noAuthenticated',
  name: 'Login',
  data() {
    return {
      disabled: false,
      user: {
        username: '',
        email: '',
        password: '',
      },
      errors: null,
    };
  },
  computed: {
    isLogin() {
      return this.$route.name === 'login';
    },
  },
  methods: {
    /**登录&注册 */
    async onSubmit() {
      this.disabled = true;
      try {
        const currentRequest = this.isLogin ? login : register;
        const { data } = await currentRequest({ user: this.user });

        this.$store.commit('setUser', data.user);
        Cookie && Cookie.set('user', JSON.stringify(data.user));

        this.$router.replace('/');
      } catch (error) {
        this.errors = error.response.data.errors;
      }
      this.disabled = false;
    },
  },
};
</script>
