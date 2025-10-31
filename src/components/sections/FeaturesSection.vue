<template>
  <section id="features" class="features section light-background">
    <div class="container section-title" data-aos="fade-up">
  <h2>Why Choose Us</h2>
  <p>Discover why HIGHFLYER CONTRACTORS LTD stands out as your trusted partner for construction and engineering excellence.</p>
</div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-5 align-items-center">
        <div class="col-lg-5">
          <article class="intro-panel" data-aos="fade-right" data-aos-delay="200">
            <figure class="preview-visual mb-4">
              <img src="../../assets/img/features/features.jpg" alt="App preview" class="img-fluid rounded-4 shadow-sm">
            </figure>
            <div class="intro-content">
              <h3 class="intro-title">Built for Excellence</h3>
              <p class="intro-text">Our dedication to excellence, innovation, and integrity has earned us a strong reputation across diverse sectors in Nigeria.</p>
            </div>
          </article>
        </div>
        <div class="col-lg-7">
          <div class="feature-grid">
            <div 
              v-for="(feature, index) in features" 
              :key="feature.title"
              class="feature-item" 
              data-aos="zoom-in" 
              :data-aos-delay="200 + (index * 50)"
            >
              <div class="f-icon" :class="feature.badgeClass">
                <i :class="feature.icon"></i>
              </div>
              <div class="f-body">
                <h4 class="f-title">{{ feature.title }}</h4>
                <p class="f-text">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const features2 = reactive([
  
  {
    icon: 'bi bi-truck',
    title: 'Strong Procurement & Logistics',
    description: 'Efficient procurement and logistics systems ensuring smooth project execution.',
    badgeClass: 'badge-blue'
  },
  {
    icon: 'bi bi-clock-fill',
    title: 'On-Time & On-Budget Delivery',
    description: 'Proven record of completing quality projects on schedule and within budget.',
    badgeClass: 'badge-green'
  },
  {
    icon: 'bi bi-building-fill',
    title: 'Diverse Industry Experience',
    description: 'Extensive experience across multiple industries and project scales.',
    badgeClass: 'badge-purple'
  },
  {
    icon: 'bi bi-person-badge-fill',
    title: 'Skilled & Dedicated Team',
    description: 'Qualified professionals committed to delivering excellence every time.',
    badgeClass: 'badge-orange'
  },
  {
    icon: 'bi bi-people-fill',
    title: 'Strong Partnerships',
    description: 'Reliable network of local and international partners supporting our success.',
    badgeClass: 'badge-cyan'
  },
  {
    icon: 'bi bi-lightbulb-fill',
    title: 'Innovative & Sustainable Solutions',
    description: 'Creative, safe, and ethical approaches ensuring lasting project value.',
    badgeClass: 'badge-pink'
  },
  {
    icon: 'bi bi-handshake-fill',
    title: 'Client-Focused Approach',
    description: 'Tailored solutions designed to meet each client’s unique objectives.',
    badgeClass: 'badge-gold'
  }

])

const features = reactive([
  {
    icon: 'bi bi-truck',
    title: 'Strong Procurement & Logistics',
    description: 'Robust systems ensuring smooth and timely project delivery.',
    badgeClass: 'badge-blue'
  },
  {
    icon: 'bi bi-clock-fill',
    title: 'On-Time & On-Budget Delivery',
    description: 'Consistent record of completing projects on time and budget.',
    badgeClass: 'badge-green'
  },
  {
    icon: 'bi bi-building-fill',
    title: 'Diverse Industry Experience',
    description: 'Proven expertise across various industries and project scales.',
    badgeClass: 'badge-purple'
  },
  {
    icon: 'bi bi-person-badge-fill',
    title: 'Skilled & Dedicated Team',
    description: 'Experienced professionals committed to quality results.',
    badgeClass: 'badge-orange'
  },
  {
    icon: 'bi bi-people-fill',
    title: 'Strong Partnerships',
    description: 'Trusted local and international partners driving success.',
    badgeClass: 'badge-cyan'
  },
  {
    icon: 'bi bi-lightbulb-fill',
    title: 'Innovative & Sustainable Solutions',
    description: 'Smart, safe, and ethical approaches for lasting value.',
    badgeClass: 'badge-pink'
  },
  // {
  //   icon: 'bi bi-handshake-fill',
  //   title: 'Client-Focused Approach',
  //   description: 'Tailored solutions built around client satisfaction.',
  //   badgeClass: 'badge-gold'
  // }
])

</script>