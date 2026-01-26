<template>
  <section id="hero" class="hero section dark-background">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row align-items-center gy-5">
        <div class="col-lg-6">
          <div class="media-stack" data-aos="zoom-in" data-aos-delay="200">
            <figure class="media primary shadow-sm">
              <img
                src="../../assets/img/logo.webp"
                class="img-fluid"
                alt="Hero visual"
              />
            </figure>

            <div
              class="floating-badge d-flex align-items-center shadow-sm"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <i class="bi bi-stars me-2"></i>
              <span>Innovation, Excellence, Results</span>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="media-stack" data-aos="zoom-in" data-aos-delay="200">
            <figure class="media primary shadow-sm">
              <img
                src="../../assets/img/bg/about-portrait-3.webp"
                class="img-fluid"
                alt="Hero visual"
              />
            </figure>
            <figure class="media secondary shadow-sm">
              <img
                src="../../assets/img/bg/services-6.webp"
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
              <span>Delivering Innovation with Excellence</span>
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
  title: "Innovation, Excellence, Results",
  description:
    "HIGHFLYER CONTRACTORS is a reputable and dynamic Nigeria incorporated limited company dedicated to providing comprehensive solutions in Digital Services, Project Management, Strategic Advisory Services, and Consultancy Services.",
  stats: [
    { icon: "bi bi-lightning-charge", text: "Excellence & Innovation" },
    { icon: "bi bi-shield-check", text: "Quality Assured" },
    { icon: "bi bi-people", text: "Client Focused" },
  ],
});
</script>

<style scoped>
.content {
  background: url("../../assets/img/logo.jpeg") center center no-repeat;
  background-size: contain; /* ensures full image is visible */
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
