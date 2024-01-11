<script setup lang="ts">
import { reactive, computed, watch } from 'vue'

const adminDetails = reactive({
  email: '',
  phone: '',
  password: '',
  username: ''
})

const resetForm = () => {
  for (const key in adminDetails) {
    if (key in adminDetails) {
      ;(adminDetails as { [key: string]: string })[key] = ''
    }
  }
}

watch(
  () => [adminDetails.email, adminDetails.phone],
  ([newEmail, newPhone]) => {
    if (newEmail && newPhone) {
      // The replace(/\d+/g, '') method is used on the email username part to remove any numbers (\d+ matches one or more digits, and g is the global flag to replace all instances of the match in the string).s
      const emailPrefix = newEmail.split('@')[0].replace(/\d+/g, '')
      const phoneSuffix = newPhone.slice(-4)

      adminDetails.username = emailPrefix + phoneSuffix
    }
  },
  { immediate: true }
)

const validate = function (input: string, type: string) {
  let pattern
  switch (type) {
    case 'phone':
      pattern = /^[56789]\d{9}$/
      break
    case 'password':
      // Password must contain at least one uppercase letter, one special character (@, #, &, *),
      // at least three digits, and be at least 9 characters long.
      pattern = /^(?=.*[A-Z])(?=.*[@#&*])(?=.*\d{3,}).{9,}$/
      break
    default:
      return false
  }
  return pattern.test(input)
}

const isPhoneValid = computed(() => {
  return adminDetails.phone.length === 0 || validate(adminDetails.phone, 'phone')
})

const isPasswordValid = computed(() => {
  return adminDetails.password.length === 0 || validate(adminDetails.password, 'password')
})

const onSubmit = () => {
  console.log(adminDetails.username)
  resetForm()
}
</script>

<template>
  <div id="admin-signup-form">
    <form @submit.prevent="onSubmit">
      <h3 class="form-heading">Sai Ram! Create a new admin.</h3>
      <div class="form-group">
        <label for="email">Please enter the Email</label>
        <input type="email" id="email" v-model="adminDetails.email" required />
      </div>

      <div class="form-group">
        <label for="phone">Please enter the Phone No.</label>
        <input type="tel" id="phone" maxlength="10" v-model="adminDetails.phone" required />
        <p v-if="!isPhoneValid" class="phone-error">Please enter a valid phone number!</p>
      </div>

      <div class="form-group">
        <label for="password">Please choose a strong password</label>
        <input type="text" id="password" v-model="adminDetails.password" required />
        <p v-if="!isPasswordValid" class="password-error">
          Password must contain at least one uppercase letter, one special character (@, #, &, *),
          at least three digits, and be at least 9 characters long.
        </p>
      </div>
      <button type="submit">Create Admin</button>
    </form>
  </div>
</template>

<style scoped>
#admin-signup-form .form-group {
  margin-bottom: 1rem;
}

#admin-signup-form .form-heading {
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

.phone-error,
.password-error {
  color: red;
  font-size: 0.8rem;
}

@media (min-width: 1024px) {
  input {
    width: 40%;
  }
}
</style>
