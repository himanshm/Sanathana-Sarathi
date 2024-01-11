<script setup lang="ts">
import { reactive } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()

const loginData = reactive({
  username: '',
  password: ''
})
const authStore = useAuthStore()


const onSubmit = async () => {
  const loginStatus = await authStore.login(loginData.username, loginData.password)
  if (loginStatus === 200) {
    router.replace({ path: '/console' })
  } else {
    // Handle login failure
    console.error('Login failed')
  }
}
</script>

<template>
  <div id="admin-login-form">
    <h3 class="form-heading">Sai Ram! Login to access the Sarathi Admin Console.</h3>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input id="username" type="text" v-model.trim="loginData.username" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="text" v-model.trim="loginData.password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>

  <RouterView />
</template>

<style scoped>
#admin-login-form .form-group {
  margin-bottom: 1rem;
}

#admin-login-form .form-heading {
  margin: 1rem 0;
  font-size: 1.2rem;
}

label {
  font-size: 1rem;
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: transparent;
  color: var(--sssso-black);
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: transparent;
  text-transform: uppercase;
  color: var(--sssso-black);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: var(--sssso-indigo);
}

@media (prefers-color-scheme: dark) {
  input {
    color: var(--sssso-white);
  }
  button {
    color: var(--sssso-white);
  }
}

@media (min-width: 1024px) {
  input {
    width: 100%;
  }
}
</style>
