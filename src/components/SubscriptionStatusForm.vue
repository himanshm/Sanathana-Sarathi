<script setup lang="ts">
const onSubmit = () => {
  console.log(`Form Submitted!`)
}
</script>

<template>
  <div class="subscription-status">
    <h3>Subscription Status</h3>
    <form @submit.prevent="onSubmit">
      <input placeholder="Enter Subscription Id (e.g. SS12345)" type="text" />
      <button type="submit">Get Subscription Status</button>
    </form>
  </div>
</template>

<style scoped>
.subscription-status {
  margin: 2rem 0;
}

.subscription-status h3 {
  font-size: 1.3rem;
}
input {
  width: 30%;
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: transparent;
  color: var(--sssso-black);
}

button {
  padding: 0.5rem 1rem;
  margin: 1rem;
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

@media (max-width: 768px) {
  .subscription-status {
    text-align: center;
  }

  .subscription-status h3 {
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
  }
}
</style>
