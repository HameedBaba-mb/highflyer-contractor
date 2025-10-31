<template>
  <section id="call-to-action" class="call-to-action section dark-background">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="cta-wrapper">
        <div class="content-block">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="text-content" data-aos="fade-right" data-aos-delay="200">
                <div class="section-label" data-aos="fade-up" data-aos-delay="250">
                  <span>Transform Your Vision</span>
                </div>
                <h2 data-aos="fade-up" data-aos-delay="300">
                  Transform Your Vision Into
                  <span class="accent-text">Reality</span>
                </h2>
                <p data-aos="fade-up" data-aos-delay="350">
                  At HIGHFLYER CONTRACTORS, we believe that success is built on trust, quality, and collaboration. 
                  We go beyond meeting expectations we aim to exceed them by delivering high quality, sustainable, and cost-effective solutions through professionalism, teamwork, and continuous improvement.
                </p>
                <div class="benefits-list" data-aos="fade-up" data-aos-delay="400">
                  <div class="benefit-row">
                    <div 
                      v-for="benefit in benefits.slice(0, 2)" 
                      :key="benefit"
                      class="benefit-item"
                    >
                      <div class="check-icon">
                        <i class="bi bi-check2"></i>
                      </div>
                      <span>{{ benefit }}</span>
                    </div>
                  </div>
                  <div class="benefit-row">
                    <div 
                      v-for="benefit in benefits.slice(2, 4)" 
                      :key="benefit"
                      class="benefit-item"
                    >
                      <div class="check-icon">
                        <i class="bi bi-check2"></i>
                      </div>
                      <span>{{ benefit }}</span>
                    </div>
                  </div>
                </div>
                <div class="action-group" data-aos="fade-up" data-aos-delay="450">
                  <a href="#contact" class="btn btn-primary-action">Start Your Project</a>
                  <!-- <a href="#services" class="btn btn-text-link">
                    <i class="bi bi-arrow-right-circle-fill"></i>
                    View Our Services
                  </a> -->
                </div>
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

const benefits = reactive([
  'International Standards',
  'Proven Track Record',
  'Cost Efficiency',
  'Sustainable Solutions'
])
</script>