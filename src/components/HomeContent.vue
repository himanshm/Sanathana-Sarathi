<script setup lang="ts">
defineProps<{
  mainHeading: string
  subHeading: string
  humanValues: string
  quoteIntro: string
  swamiSaid: string
}>()
</script>

<template>
  <div class="main-container">
    <img
      src="../assets/swami-reading-ss.png"
      alt="Swami-Image"
      class="swami-home"
      width="350"
      height="259"
    />

    <div class="content-wrapper">
      <p class="header">{{ mainHeading }}</p>
      <p class="sub-header">{{ subHeading }}</p>
      <p class="values">{{ humanValues }}</p>
      <p class="quote-intro">{{ quoteIntro }}</p>
      <q class="quote">{{ swamiSaid }}</q>
    </div>
  </div>
</template>

<style scoped>
.swami-home {
  display: block;
  margin: 0 auto 2rem;
}

.header {
  font-size: 2.3rem;
  font-weight: 500;
  color: var(--sssso-text-color1);
}

.sub-header {
  font-size: 1rem;
  color: var(--sssso-text-color2);
}

.values {
  font-size: 1.2rem;
  padding: 1rem 0;
  color: var(--sssso-text-color1);
}

.quote-intro {
  padding: 0 0 0.8rem 0;
  color: var(--sssso-text-color2);
}

.quote {
  color: var(--sssso-text-color1);
}
@media (min-width: 1024px) {
  .main-container {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .swami-home {
    margin: 0 2rem 0 0;
  }
}
</style>

