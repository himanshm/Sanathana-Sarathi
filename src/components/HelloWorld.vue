<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router'
defineProps<{
  mainHeading: string
  msg: string
  subHeading?: string // The '?' makes the prop optional
  showSubHeading?: boolean
}>()

const route = useRoute()

const isSubscriptionRoute = computed(() => {
  return route.path === '/subscribe'
})
</script>

<template>
  <div class="heading">
    <h1>{{ mainHeading }}</h1>
    <h3>{{ msg }}</h3>
    <h3 v-if=isSubscriptionRoute class="sub-heading">{{ subHeading }}</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  /* top: -10px; */
}

h3 {
  font-size: 1.2rem;
}

.heading h1,
.heading h3 {
  text-align: center;
}

.sub-heading {
  margin-top: 1rem;
}

@media (min-width: 1024px) {
  .heading h1,
  .heading h3 {
    text-align: left;
  }
}
</style>
