<template>
  <section id="commitment" class="section py-5">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <!-- Section Title -->
      <div class="container section-title mb-5" data-aos="fade-up">
        <h2 class="fw-bold text-center mb-3">Our Commitment</h2>
        <p class="text-center text-muted">
          At <strong>HIGHFLYER CONTRACTORS LTD</strong>, we believe that success
          is built on <strong>trust, quality, and collaboration</strong>. We go
          beyond meeting expectations — we aim to exceed them by delivering
          projects that inspire confidence and create lasting value for our
          clients.
        </p>
      </div>

      <!-- Commitment Cards -->
      <div class="row g-4 justify-content-start">
        <div
          v-for="(item, index) in commitments"
          :key="index"
          class="col-lg-4 col-md-6"
          data-aos="zoom-in"
          :data-aos-delay="150 * (index + 1)"
        >
          <div class="card commitment-card text-center h-100 shadow-sm border-0">
            <div class="card-body p-4">
              <div class="icon-wrappers vm-icon mb-3 mx-auto">
                <i :class="item.icon"></i>
              </div>
              <h5 class="fw-bold mb-2">{{ item.title }}</h5>
              <p class="text-muted mb-0">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const commitments = [
  {
    icon: 'bi bi-shield-check',
    title: 'Integrity',
    description:
      'We conduct our business with honesty, transparency, and accountability.'
  },
  {
    icon: 'bi bi-award',
    title: 'Excellence',
    description:
      'We are committed to delivering superior quality in all our services.'
  },
  {
    icon: 'bi bi-lightbulb',
    title: 'Innovation',
    description:
      'We embrace creativity and modern technology to enhance our services.'
  },
  {
    icon: 'bi bi-people',
    title: 'Client Focus',
    description:
      'We build long-term relationships based on trust and satisfaction.'
  },
  {
    icon: 'bi bi-heart-pulse',
    title: 'Safety & Sustainability',
    description:
      'We prioritize the well-being of our people, clients, and environment.'
  }
]
</script>

<style scoped>
.commitment-card {
  background: #fff;
  border-radius: 20px;
  transition: all 0.4s ease;
}
.commitment-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.icon-wrapper {
  background: var(--accent-color, #003366);
  color: #fff;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.icon-wrapper i{
  color: var(--accent-color);
}
</style>

