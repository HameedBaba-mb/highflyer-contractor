<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
    <ScrollTop />
    <Preloader v-if="isLoading" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import ScrollTop from './components/ScrollTop.vue'
import Preloader from './components/Preloader.vue'

const isLoading = ref(true)

onMounted(() => {
  // Hide preloader after page loads
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

<style>
/* Global styles will be imported in main.js */
</style>