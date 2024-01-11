<script setup lang="ts">
import axios from 'axios'
import { computed } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const isAdminLoginView = computed(() => route.path === '/sarathi')
const isAdminView = computed(() => route.path.startsWith('/console'))

const logout = async () => {
  try {
    await axios.post('http://localhost:3000/api/logout', {}, { withCredentials: true })
    router.replace({ path: '/sarathi' }) // Redirect to login or any other page
  } catch (error) {
    console.error('Error during logout:', error)
  }
}
</script>

<template>
  <v-list v-if="!isAdminLoginView && !isAdminView" density="compact">
    <RouterLink to="/">
      <v-list-item prepend-icon="mdi-home">
        <v-list-item-title class="navigation-item"> Home </v-list-item-title>
      </v-list-item>
    </RouterLink>
    <RouterLink to="/about">
      <v-list-item prepend-icon="mdi-book-open-page-variant">
        <v-list-item-title class="navigation-item"> The Story </v-list-item-title>
      </v-list-item>
    </RouterLink>
    <RouterLink to="/subscribe">
      <v-list-item prepend-icon="mdi-rss">
        <v-list-item-title class="navigation-item"> Subscribe </v-list-item-title>
      </v-list-item>
    </RouterLink>
  </v-list>

  <v-list v-if="isAdminView" density="compact">
    <RouterLink to="/console-search">
      <v-list-item prepend-icon="mdi-account-search">
        <v-list-item-title class="navigation-item"> Search </v-list-item-title>
      </v-list-item>
    </RouterLink>

    <RouterLink to="/console-add-admin">
      <v-list-item prepend-icon="mdi-account-plus">
        <v-list-item-title class="navigation-item"> Add Admin </v-list-item-title>
      </v-list-item>
    </RouterLink>

    <RouterLink to="/console-subscribe">
      <v-list-item prepend-icon="mdi-account-multiple-plus">
        <v-list-item-title class="navigation-item"> Add Subscriber </v-list-item-title>
      </v-list-item>
    </RouterLink>

    <RouterLink to="/console-import">
      <v-list-item prepend-icon="mdi-file-import">
        <v-list-item-title class="navigation-item"> Import from CSV </v-list-item-title>
      </v-list-item>
    </RouterLink>

    <RouterLink to="/console-labels">
      <v-list-item prepend-icon="mdi-printer">
        <v-list-item-title class="navigation-item"> Print Labels </v-list-item-title>
      </v-list-item>
    </RouterLink>

    <RouterLink to="/console-message">
      <v-list-item prepend-icon="mdi-message">
        <v-list-item-title class="navigation-item"> Send Message </v-list-item-title>
      </v-list-item>
    </RouterLink>

    <RouterLink to="/console-database">
      <v-list-item prepend-icon="mdi-database-import">
        <v-list-item-title class="navigation-item"> Database Import </v-list-item-title>
      </v-list-item>
    </RouterLink>

    <RouterLink to="/console-reports">
      <v-list-item prepend-icon="mdi-chart-bar">
        <v-list-item-title class="navigation-item"> Reports </v-list-item-title>
      </v-list-item>
    </RouterLink>

    <RouterLink to="/console-bulk">
      <v-list-item prepend-icon="mdi-group">
        <v-list-item-title class="navigation-item"> Create Bulk Group </v-list-item-title>
      </v-list-item>
    </RouterLink>

    <RouterLink to="/console-pricing">
      <v-list-item prepend-icon="mdi-calculator">
        <v-list-item-title class="navigation-item"> Registered Pricing </v-list-item-title>
      </v-list-item>
    </RouterLink>
  </v-list>
  <v-list v-if="isAdminView" density="compact">
    <v-list-item @click="logout" prepend-icon="mdi-logout" class="logout">
      <v-list-item-title> Logout </v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<style scoped>
.logout {
  color: orangered;
}
</style>
