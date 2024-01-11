<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainMenu from './components/MainMenu.vue'
import NavigationDrawer from './components/NavigationDrawer.vue'
</script>

<template>
  <header>
    <img alt="Org logo" class="logo" src="@/assets/swami-org-logo.png" width="125" height="125" />

    <div class="wrapper">
      <MainMenu main-heading="Sanathana Sarathi" sub-heading="The Eternal Chrioteer" />
      <NavigationDrawer />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 991px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  
}
</style>
