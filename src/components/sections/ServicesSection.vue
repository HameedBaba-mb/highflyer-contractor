<template>
  <section id="services" class="services section">
    <div class="container section-title" data-aos="fade-up">
      <h2>Our Core Services</h2>
      <p>Comprehensive Solutions for Your Construction and Engineering Needs</p>
    </div>
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-5">
        <div 
          v-for="(service, index) in services" 
          :key="service.id"
          class="col-lg-4 col-md-6" 
          data-aos="fade-up" 
          :data-aos-delay="(index + 1) * 100"
        >
          <div class="service-card" :class="{ featured: service.featured }">
            <div class="service-number mt-4">{{ String(service.id).padStart(2, '0') }}</div>
            <div class="service-icon-wrapper">
              <div class="service-icon">
                <i :class="service.icon"></i>
              </div>
            </div>
            <div class="service-content">
              <h4>{{ service.title }}</h4>
              <p>{{ service.description }}</p>
              <ul class="service-list">
                <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
              </ul>
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
    features: ['Procurement Services', 'Supply Chain Management', 'Logistics Coordination', 'Quality Materials Supply'],
    featured: false
  },
  {
    id: 2,
    icon: 'bi bi-tools',
    title: 'Engineering & Construction',
    description: 'Our engineering and construction arm offers full-spectrum services covering design, planning, civil works, structural engineering, and building construction. Our commitment to excellence and adherence to safety and environmental standards ensure precision and quality.',
    features: ['Design & Planning', 'Civil Works', 'Structural Engineering', 'Building Construction'],
    featured: false
  },
  {
    id: 3,
    icon: 'bi bi-diagram-3',
    title: 'Project Management',
    description: 'Our project management team offers complete solutions from concept development to project completion, ensuring projects are delivered on time, within budget, and to the highest standards while maintaining transparent communication and collaboration with stakeholders.',
    features: ['Concept Development', 'Scope Management', 'Cost Control', 'Stakeholder Engagement'],
    featured: false
  },
  {
    id: 4,
    icon: 'bi bi-lightbulb',
    title: 'Consultancy Services',
    description: 'Our consultancy services provide expert advice and strategic guidance across engineering, infrastructure, and management projects. Our expert consultants offer practical solutions and strategic insights that help clients optimize performance, reduce risks, and achieve sustainable project goals.',
    features: ['Strategic Planning', 'Technical Consulting', 'Risk Assessment', 'Performance Optimization'],
    featured: false
  }
])
</script>