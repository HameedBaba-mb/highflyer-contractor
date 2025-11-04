<template>
  <section id="team" class="team section light-background">
    <div class="container section-title" data-aos="fade-up">
      <h2>Our Team</h2>
      <p>
        Meet our skilled and dedicated professionals committed to quality
        delivery
      </p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row g-4 justify-content-center">
        <!-- Team Philosophy Card -->
        <div class="col-md-6" data-aos="zoom-in" data-aos-delay="200">
          <div class="team-card">
            <i class="bi bi-people-fill icon"></i>
            <h3>Our Expertise</h3>
            <p>
              Our team comprises a corporate finance practitioner, an
              educational management practitioner, a legal practitioner, a
              quantity surveying practitioner, a business and environmental
              business strategy practitioner, a resource assurance and fraud
              management practitioner, a supply chain management practitioner, a
              risk management specialist, a project management practitioner, a
              relationship management specialist, a business psychology
              consultant, and a Software Engineer.
            </p>
          </div>
        </div>

        <!-- Core Strength Card -->
        <div class="col-md-6" data-aos="zoom-in" data-aos-delay="250">
          <div class="team-card">
            <i class="bi bi-trophy-fill icon"></i>
            <h3>Our Strength</h3>
            <p>
              Together, our diverse expertise ensures every project we undertake
              is managed with professionalism, creativity, and precision —
              delivering lasting value for our clients and communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.team-card {
  text-align: center;
  background: #fff;
  border: 1px dashed var(--soft-border);
  border-radius: 16px;
  padding: 40px 30px;
  box-shadow: 0 20px 50px
    color-mix(in srgb, var(--default-color), transparent 90%);
  transition: all 0.3s ease;
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 85%);
}

.team-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-color);
  box-shadow: 0 24px 60px
    color-mix(in srgb, var(--default-color), transparent 85%);
}

.team-card .icon {
  font-size: 40px;
  color: var(--accent-color);
  background: var(--accent-soft);
  border-radius: 12px;
  padding: 14px;
  margin-bottom: 18px;
}

.team-card h3 {
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--heading-color);
  margin-bottom: 12px;
}

.team-card p {
  color: var(--muted-text);
  line-height: 1.8;
  font-size: 1rem;
}
</style>

