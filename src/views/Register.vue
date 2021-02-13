<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          v-model="userData.name"
          type="text"
          required
          class="form-control"
          id="name"
          aria-describedby="name"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          v-model="userData.email"
          type="email"
          required
          class="form-control"
          id="email"
          aria-describedby="email"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          v-model="userData.password"
          type="password"
          required
          class="form-control"
          id="password"
          aria-describedby="password"
        />
      </div>
      <div class="mb-3">
        <label for="password_confirmation" class="form-label">Confirm password</label>
        <input
          v-model="userData.password_confirmation"
          type="password"
          required
          class="form-control"
          id="password_confirmation"
          aria-describedby="password_confirmation"
        />
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'register',
  data() {
    return {
      userData: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
    };
  },

  methods: {
    async handleSubmit() {
      await this.register(this.userData);
      this.$router.push('/');
    },
    ...mapActions('auth', ['register']),
  },
};
</script>
