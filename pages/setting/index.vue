<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>
          <ul class="error-messages" v-if="errors">
            <template v-for="(key, value) in errors">
              <li :key="`${key}${index}`" v-for="(item, index) in key">
                {{ value }}：{{ item }}
              </li>
            </template>
          </ul>
          <form @submit.prevent="onSubmit">
            <fieldset :disabled="disabled">
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                  v-model="user.image"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="user.username"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                  v-model="user.bio"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model="user.email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="user.password"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr />
          <button class="btn btn-outline-danger" @click="onLogout">
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { updateUser } from '@/api/user';
const Cookie = process.client ? require('js-cookie') : undefined;
export default {
  middleware: 'authenticated',
  name: 'Setting',
  computed: {
    user: {
      get() {
        return {
          ...this.$store.state.user,
        };
      },
      set(val) {},
    },
  },
  data() {
    return {
      disabled: false,
      errors: null,
    };
  },
  methods: {
    /**更新用户信息 */
    async onSubmit() {
      this.disabled = true;
      try {
        const { data } = await updateUser({ user: this.user });

        this.$store.commit('setUser', data.user);
        Cookie && Cookie.set('user', JSON.stringify(data.user));

        this.$router.replace('/');
      } catch (error) {
        this.errors = error.response.data.errors;
      }
      this.disabled = false;
    },

    /**退出账号 */
    onLogout() {
      this.$store.commit('setUser', null);
      Cookie && Cookie.remove('user');

      this.$router.replace('/');
    },
  },
  head() {
    return {
      title: `Settings`,
    };
  },
};
</script>
