<script setup lang="ts">
import RenderRoutes from './RenderRoutes.vue'
import orgLogo from '../assets/swami-org-logo.png'
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail class="navigation">
        <v-list>
          <v-list-item :prepend-avatar="orgLogo">
            <v-list-item-title class="navigation-item">Santhana Sarathi</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <RenderRoutes />
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<style scoped>
.navigation {
  background-color: var(--color-background);
}
.navigation-item {
  color: var(--color-text);
}


</style>
