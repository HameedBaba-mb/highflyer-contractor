<template>
  <section id="core-values" class="section light-background py-5">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="container section-title" data-aos="fade-up">
        <h2>Our Core Values</h2>
        <p>
          The guiding principles that define the spirit of HIGHFLYER SOLUTIONS
        </p>
      </div>

      <div class="row gy-4">
        <div
          v-for="(value, index) in coreValues"
          :key="index"
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          :data-aos-delay="150 + index * 100"
        >
          <div
            class="value-card position-relative h-100 p-4 shadow-sm rounded-4 bg-white"
          >
            <div
              class="icon-box vm-icon d-flex align-items-center justify-content-center mb-3"
            >
              <i :class="value.icon"></i>
            </div>
            <div
              class="number-circle position-absolute top-0 end-0 translate-middle"
            >
              {{ (index + 1).toString().padStart(2, "0") }}
            </div>
            <h5 class="fw-bold mb-2">{{ value.title }}</h5>
            <p class="text-muted">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const coreValues = [
  {
    icon: "bi bi-shield-check",
    title: "Integrity",
    description:
      "We conduct our business with honesty, transparency, and accountability.",
  },
  {
    icon: "bi bi-award",
    title: "Excellence",
    description:
      "We are committed to delivering superior quality in all our services.",
  },
  {
    icon: "bi bi-lightbulb",
    title: "Innovation",
    description:
      "We embrace creativity and modern technology to enhance our services.",
  },
  {
    icon: "bi bi-people",
    title: "Client Focus",
    description:
      "We build long-term relationships based on trust and satisfaction.",
  },
  {
    icon: "bi bi-globe",
    title: "Sustainability & Growth",
    description:
      "We prioritize sustainable business practices and long-term growth for our clients.",
  },
];
</script>

<style scoped>
.value-card {
  transition: all 0.3s ease;
  border: 1px solid #f1f1f1;
}
.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.icon-box {
  width: 60px;
  height: 60px;
  color: var(--accent-color);
  border-radius: 12px;
  font-size: 1.8rem;
}

.number-circle {
  width: 45px;
  height: 45px;
  background: var(--accent-color);
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  right: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
