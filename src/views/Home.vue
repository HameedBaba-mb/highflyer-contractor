<template>
  <main class="main">
    <HeroSection />
    <FeaturedServicesSection />
    <AboutSection />
    <OurCoreValueSection />
    <ServicesSection />
    <FeaturesSection />
    <CommitmentSection />
    <OurProjectsSection />
    <CertificationSection />
    <TeamSection />
    <ClientsSection />
    <CallToActionSection />
    <FaqSection />
    <ContactSection />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import OurCoreValueSection from '../components/sections/OurCoreValueSection.vue'
import FeaturedServicesSection from '../components/sections/FeaturedServicesSection.vue'
import ServicesSection from '../components/sections/ServicesSection.vue'
import FeaturesSection from '../components/sections/FeaturesSection.vue'
import CommitmentSection from '../components/sections/CommitmentSection.vue'
import OurProjectsSection from '../components/sections/OurProjectsSection.vue'
import CertificationSection from '../components/sections/CertificationSection.vue'
import TeamSection from '../components/sections/TeamSection.vue'
import ClientsSection from '../components/sections/ClientsSection.vue'
import CallToActionSection from '../components/sections/CallToActionSection.vue'
import FaqSection from '../components/sections/FaqSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'

// Initialize basic functionality
onMounted(() => {
  // Add any initialization code here
  
  // Simple scroll animations can be added here
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)
  
  // Observe elements with data-aos attributes
  document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el)
  })
})
</script>