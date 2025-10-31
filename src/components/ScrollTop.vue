<template>
  <a 
    href="#" 
    id="scroll-top" 
    class="scroll-top d-flex align-items-center justify-content-center"
    :class="{ active: isVisible }"
    @click.prevent="scrollToTop"
  >
    <i class="bi bi-arrow-up-short"></i>
  </a>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 100
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>