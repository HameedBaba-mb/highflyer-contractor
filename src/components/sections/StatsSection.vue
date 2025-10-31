<template>
  <section id="stats" class="stats section">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="stats-board">
            <article 
              v-for="(stat, index) in stats" 
              :key="stat.title"
              class="stat-tile" 
              data-aos="fade-up" 
              :data-aos-delay="150 + (index * 50)"
            >
              <div class="tile-head">
                <i :class="stat.icon"></i>
                <div class="label">
                  <h6 class="title">{{ stat.title }}</h6>
                  <small class="hint">{{ stat.hint }}</small>
                </div>
              </div>
              <div class="tile-metric">
                <span 
                  class="metric-number purecounter" 
                  :data-purecounter-start="0" 
                  :data-purecounter-end="stat.value"
                  data-purecounter-duration="1"
                >{{ stat.value }}</span>
                <span class="metric-suffix">{{ stat.suffix }}</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { reactive } from 'vue'

// Calculate company age dynamically
const establishmentYear = 2022
const currentYear = new Date().getFullYear()
const yearsOfExcellence = currentYear - establishmentYear

const stats = reactive([
  {
    icon: 'bi bi-calendar-check',
    title: 'Years of Excellence',
    hint: 'Since incorporation',
    value: yearsOfExcellence,
    suffix: '+'
  },
  {
    icon: 'bi bi-building-check',
    title: 'Major Clients',
    hint: 'Government agencies',
    value: 5,
    suffix: ''
  },
  {
    icon: 'bi bi-people-fill',
    title: 'Professional Team',
    hint: 'Skilled experts',
    value: 9,
    suffix: ''
  },
  {
    icon: 'bi bi-award-fill',
    title: 'Service Areas',
    hint: 'Core competencies',
    value: 4,
    suffix: ''
  }
])
</script>
