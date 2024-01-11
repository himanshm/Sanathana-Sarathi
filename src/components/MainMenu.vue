<script setup lang="ts">
defineProps<{
  mainHeading: string
  subHeading: string
}>()
</script>

<template>
  <div class="heading">
    <h1>{{ mainHeading }}</h1>
    <h5>{{ subHeading }}</h5>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  /* top: -10px; */
}

.heading h1,
.heading h5 {
  text-align: center;
}

.sub-heading {
  margin-top: 1rem;
}

@media (min-width: 1024px) {
  .heading h1,
  .heading h5 {
    text-align: left;
  }
}
</style>
