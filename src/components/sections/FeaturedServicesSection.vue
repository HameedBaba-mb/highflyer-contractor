<template>
  <section id="featured-services" class="featured-services section">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row g-4">
        <div 
          v-for="(service, index) in services" 
          :key="service.id"
          class="col-lg-4 col-md-6" 
          data-aos="fade-up" 
          :data-aos-delay="(index + 1) * 100"
        >
          <div class="service-item">
            <div class="icon">
              <i :class="service.icon"></i>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <div class="card-links">
              <a :href="service.link" class="link-item">
                Learn More
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const services = reactive([
  {
    id: 1,
    icon: 'bi bi-building',
    title: 'General Contract & Merchandise',
    description: 'We provide comprehensive general contracting services, including procurement, supply, and logistics management for various industries. Our merchandise division ensures timely delivery of high-quality materials and equipment at competitive prices.',
    link: '#services'
  },
  {
    id: 2,
    icon: 'bi bi-tools',
    title: 'Engineering & Construction',
    description: 'Our engineering and construction arm offers full-spectrum services covering design, planning, civil works, structural engineering, and building construction. Our commitment to excellence and adherence to safety standards ensure every project is executed with precision and quality.',
    link: '#services'
  },
  {
    id: 3,
    icon: 'bi bi-diagram-3',
    title: 'Project Management',
    description: 'Our project management team offers complete solutions from concept development to project completion, ensuring projects are delivered on time, within budget, and to the highest standards while maintaining transparent communication with stakeholders.',
    link: '#services'
  },
  {
    id: 4,
    icon: 'bi bi-lightbulb',
    title: 'Consultancy Services',
    description: 'Our consultancy services provide expert advice and strategic guidance across engineering, infrastructure, and management projects. Our expert consultants offer practical solutions that help clients optimize performance and achieve sustainable project goals.',
    link: '#services'
  },
  {
    id: 5,
    icon: 'bi bi-award',
    title: 'Quality Excellence',
    description: 'Strong procurement and logistics capabilities with a proven track record of delivering quality projects on time and within budget across diverse industries and project scales.',
    link: '#about'
  },
  {
    id: 6,
    icon: 'bi bi-handshake',
    title: 'Trusted Partnership',
    description: 'We build long-term relationships based on trust and satisfaction. Our client-focused approach ensures tailored solutions that exceed expectations and create lasting value.',
    link: '#contact'
  }
])
</script>