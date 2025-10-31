<template>
  <section id="about" class="about section">
    <div class="container section-title" data-aos="fade-up">
      <h2>About Us</h2>
      <p>Building Excellence, Delivering Value - Your Trusted Partner in Construction and Engineering</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row g-4 align-items-stretch">
        <div class="col-lg-5 order-lg-2" data-aos="fade-left" data-aos-delay="200">
          <aside class="showcase">
            <figure class="showcase-main">
              <img src="../../assets/img/about/about-portrait-3.jpg"  alt="Our Journey" class="img-fluid">
              <figcaption class="badge-note" data-aos="zoom-in" data-aos-delay="350">
                <i class="bi bi-graph-up-arrow"></i>
                <div>
                  <strong>Growing Strong</strong>
                  <small>Building a legacy of excellence, one project at a time.</small>
                </div>
              </figcaption>
            </figure>
          </aside>
        </div>

        <div class="col-lg-7 order-lg-1" data-aos="fade-right" data-aos-delay="200">
          <article class="intro-card">
            <div class="intro-head">
              <span class="kicker"><i class="bi bi-stars me-1"></i>Our Story</span>
              <h2>{{ aboutData.title }}</h2>
            </div>

            <div class="intro-body">
              <p class="lead">{{ aboutData.leadText }}</p>
              <p>{{ aboutData.description }}</p>

              <div class="feature-list row gy-3">
                <div 
                  v-for="(feature, index) in aboutData.features" 
                  :key="feature.title"
                  class="col-md-6" 
                  data-aos="fade-up" 
                  :data-aos-delay="250 + (index * 50)"
                >
                  <div class="feature-item">
                    <i :class="feature.icon"></i>
                    <div class="text">
                      <h6>{{ feature.title }}</h6>
                      <p>{{ feature.description }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="metric-band" data-aos="fade-up" data-aos-delay="350">
                <div 
                  v-for="(metric, index) in aboutData.metrics" 
                  :key="metric.label"
                  class="metric"
                >
                  <span class="value">{{ metric.value }}</span>
                  <span class="label">{{ metric.label }}</span>
                </div>
              </div>


            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const aboutData = reactive({
  title: 'Building Excellence Through Innovation and Integrity',
  leadText: 'Founded on a commitment to excellence, innovation, and integrity, HIGHFLYER CONTRACTORS has grown to become a trusted partner across multiple sectors.',
  description: 'We deliver projects that meet international standards while ensuring cost efficiency, sustainability, and client satisfaction. Our multidisciplinary team of professionals brings together expertise in engineering, construction, procurement, and management, ensuring seamless execution of projects from conception to completion.',
  features: [
    {
      icon: 'bi bi-shield-check',
      title: 'Safety & Sustainability',
      description: 'We prioritize the well-being of our people, clients, and environment with adherence to safety and environmental standards.'
    },
    {
      icon: 'bi bi-people',
      title: 'Client-Focused Approach',
      description: 'We work closely with our clients to accurately interpret their dreams and visions, bringing them to desired reality through comprehensive management solutions.'
    }
  ],
  metrics: [
    { value: '2022', label: 'Established' },
    { value: '5+', label: 'Major Clients' },
    { value: '9', label: 'Team Members' }
  ]
})
</script>