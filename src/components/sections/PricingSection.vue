<template>
  <section id="pricing" class="pricing section">
    <div class="container section-title" data-aos="fade-up">
      <h2>Our Service Packages</h2>
      <p>Comprehensive solutions tailored to your project requirements</p>
    </div>
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row justify-content-center g-4">
        <div 
          v-for="(plan, index) in pricingPlans" 
          :key="plan.id"
          class="col-lg-4 col-md-6" 
          data-aos="fade-up" 
          :data-aos-delay="300 + (index * 100)"
        >
          <div class="pricing-card" :class="plan.type">
            <div class="plan-header">
              <div v-if="plan.featured" class="featured-badge">Most Popular</div>
              <h3 class="plan-name">{{ plan.name }}</h3>
              <p class="plan-description">{{ plan.description }}</p>
            </div>
            <div class="pricing-display">
              <div class="price">
                <span class="currency">$</span>
                <span class="amount">{{ plan.price }}</span>
                <span class="period">/project</span>
              </div>
            </div>
            <div class="features-list">
              <div 
                v-for="feature in plan.features" 
                :key="feature"
                class="feature"
              >
                <i class="bi bi-check2"></i>
                <span>{{ feature }}</span>
              </div>
            </div>
            <a href="#contact" class="btn-plan">{{ plan.buttonText }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const pricingPlans = reactive([
  {
    id: 1,
    name: 'Consultancy',
    type: 'starter',
    description: 'Expert advice and strategic guidance for your projects.',
    price: 'Quote',
    featured: false,
    buttonText: 'Get Consultation',
    features: [
      'Strategic Planning',
      'Technical Consulting',
      'Risk Assessment',
      'Performance Optimization',
      'Expert Guidance'
    ]
  },
  {
    id: 2,
    name: 'Project Management',
    type: 'professional featured',
    description: 'Complete project management from concept to completion.',
    price: 'Quote',
    featured: true,
    buttonText: 'Start Project',
    features: [
      'Concept Development',
      'Scope Management',
      'Cost Control',
      'Quality Assurance',
      'Stakeholder Engagement',
      'Transparent Communication'
    ]
  },
  {
    id: 3,
    name: 'Full Service',
    type: 'enterprise',
    description: 'Comprehensive engineering and construction solutions.',
    price: 'Quote',
    featured: false,
    buttonText: 'Contact Us',
    features: [
      'Design & Planning',
      'Engineering & Construction',
      'Procurement & Supply',
      'Project Management',
      'Quality Control',
      'Post-Project Support'
    ]
  }
])
</script>