<template>
  <section id="services" class="services section">
    <div class="container section-title" data-aos="fade-up">
      <h2>Our Core Services</h2>
      <p>Comprehensive Solutions for Your Business and Digital Transformation Needs</p>
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
    icon: 'bi bi-briefcase',
    title: 'Business Consulting',
    description: 'We provide comprehensive business consulting services, including strategy development, process optimization, and organizational transformation for various industries. Our consulting division ensures effective solutions that drive growth and competitive advantage.',
    features: ['Strategy Development', 'Process Optimization', 'Organizational Design', 'Performance Improvement'],
    featured: false
  },
  {
    id: 2,
    icon: 'bi bi-laptop',
    title: 'Digital Services',
    description: 'Our digital services arm offers full-spectrum solutions covering digital transformation, technology implementation, software development, and digital marketing. Our commitment to innovation and cutting-edge technology ensures modern and effective digital solutions.',
    features: ['Digital Transformation', 'Software Development', 'Technology Implementation', 'Digital Marketing'],
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
    title: 'Strategic Advisory',
    description: 'Our strategic advisory services provide expert advice and guidance across business strategy, market analysis, and organizational development. Our expert advisors offer practical solutions and strategic insights that help clients optimize performance, reduce risks, and achieve sustainable business goals.',
    features: ['Strategic Planning', 'Market Analysis', 'Risk Assessment', 'Business Development'],
    featured: false
  },
  {
    id: 5,
    icon: 'bi bi-gear',
    title: 'General Services',
    description: 'We offer experienced, dynamic, and reliable teams specializing in general services for residential, commercial, and industrial sectors. With a strong commitment to excellence, innovation, and customer satisfaction, we deliver comprehensive, high-quality solutions tailored to meet each client\'s unique needs.',
    features: ['Residential Services', 'Commercial Solutions', 'Industrial Support', 'Custom Solutions'],
    featured: false
  },
  {
    id: 6,
    icon: 'bi bi-chat-dots',
    title: 'Consultancy Services',
    description: 'Our consultancy services provide expert advice and strategic guidance across general services and procurement management projects. Our expert consultants offer practical solutions that help clients optimize performance and achieve sustainable project goals.',
    features: ['Expert Advisory', 'Procurement Management', 'Performance Optimization', 'Project Guidance'],
    featured: false
  }
])
</script>