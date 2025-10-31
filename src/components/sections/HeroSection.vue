<template>
  <section id="hero" class="hero section dark-background">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row align-items-center gy-5">
        <div class="col-lg-7">
          <div
            class="hero-card shadow-sm"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <div class="eyebrow d-inline-flex align-items-center mb-3">
              <i class="bi bi-stars me-2"></i>
              <span>Building Excellence, Delivering Value</span>
            </div>
            <div class="content">
              <h2 class="display-5 fw-bold mb-3">{{ heroData.title }}</h2>
              <p class="lead mb-4">{{ heroData.description }}</p>
              <div class="d-flex flex-wrap gap-3">
                <a href="#about" class="btn btn-primary-ghost">
                  <span>Explore Now</span>
                  <i class="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
              <div
                class="mini-stats d-flex flex-wrap gap-4 mt-4"
                data-aos="zoom-in"
                data-aos-delay="250"
              >
                <div
                  v-for="stat in heroData.stats"
                  :key="stat.text"
                  class="stat d-flex align-items-center"
                >
                  <i :class="stat.icon + ' me-2'"></i>
                  <span>{{ stat.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="media-stack" data-aos="zoom-in" data-aos-delay="200">
            <figure class="media primary shadow-sm">
              <img
                src="../../assets/img/illustration/construction-1.jpg"
                class="img-fluid"
                alt="Hero visual"
              />
            </figure>
            <figure class="media secondary shadow-sm">
              <img
                src="../../assets/img/illustration/construction-2.jpg"
                class="img-fluid"
                alt="Supporting visual"
              />
            </figure>
            <div
              class="floating-badge d-flex align-items-center shadow-sm"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <i class="bi bi-award me-2"></i>
              <span>Delivering Value with Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const heroData = reactive({
  title: "Building Excellence, Delivering Value",
  description:
    "HIGHFLYER CONTRACTORS is a reputable and dynamic Nigeria incorporated limited company dedicated to providing comprehensive solutions in General Contract and Merchandise, Engineering and Construction Services, Project Management, and Consultancy Services.",
  stats: [
    { icon: "bi bi-lightning-charge", text: "Excellence & Innovation" },
    { icon: "bi bi-shield-check", text: "Quality Assured" },
    { icon: "bi bi-people", text: "Client Focused" },
  ],
});
</script>