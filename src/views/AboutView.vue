<script setup lang="ts">
import TheStory from '@/components/TheStory.vue'
</script>

<template>
  <div class="about">
    <TheStory />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
