<template>
  <section id="about" class="about section">
    <div class="container section-title" data-aos="fade-up">
      <h2>About Us</h2>
      <p>Committed to Excellence, Innovation, and Integrity</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row g-4 align-items-stretch">

        <!-- Left Section: About Text -->
        <div
          class="col-lg-7 order-lg-1"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <article class="intro-card">
            <div class="intro-head">
              <span class="kicker">
                <i class="bi bi-stars me-1"></i>Our Story
              </span>
              <h2 v-html="aboutData.title"></h2>
            </div>

            <div class="intro-body">
              <p class="lead" v-html="aboutData.leadText"></p>
              <p class="lead" v-html="aboutData.description"></p>
              <p class="lead" v-html="aboutData.additional"></p>
              <p class="lead" v-html="aboutData.additional2"></p>
            </div>
          </article>
        </div>

        <!-- Right Section: Vision & Mission Cards -->
        <div
          class="col-lg-5 order-lg-2"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div class="row gy-4">
            <!-- Vision Card -->
            <div class="col-12">
              <div class="vm-card" data-aos="fade-up" data-aos-delay="250">
                <div class="vm-icon">
                  <i class="bi bi-eye"></i>
                </div>
                <h5>Our Vision</h5>
                <p v-html="aboutData.vision"></p>
              </div>
            </div>

            <!-- Mission Card -->
            <div class="col-12">
              <div class="vm-card" data-aos="fade-up" data-aos-delay="300">
                <div class="vm-icon">
                  <i class="bi bi-bullseye"></i>
                </div>
                <h5>Our Mission</h5>
                <p v-html="aboutData.mission"></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const aboutData = reactive({
  title: "Delivering Comprehensive Solutions Across Multiple Sectors",
  leadText:
    '<strong style="color: var(--accent-color)">HIGHFLYER SOLUTIONS</strong> is a reputable and dynamic Nigerian incorporated limited company dedicated to providing comprehensive solutions in Business Consulting, Digital Services, Project Management, and Strategic Advisory Services.',
  description:
    'Founded on a commitment to excellence, innovation, and integrity, <strong style="color: var(--accent-color)">HIGHFLYER SOLUTIONS</strong> has grown to become a trusted partner across multiple sectors. We deliver solutions that meet international standards while ensuring cost efficiency, sustainability, and client satisfaction.',
  additional:
    "We are dedicated to organizations or individuals seeking professional services related to our expertise. We work closely with our clients to accurately interpret their business goals and visions, bringing them to desired reality through strategic management solutions to meet their needs. We communicate with our clients throughout the engagement process to keep them informed of progress to ensure that our projects keep on schedule and within budget",
  additional2:
    'Our multidisciplinary team of professionals brings together expertise in business strategy, digital transformation, process optimization, and management, ensuring seamless execution of projects from conception to completion. Whether handling small-scale business improvements or large organizational transformations, <strong style="color: var(--accent-color)">HIGHFLYER SOLUTIONS</strong> consistently delivers outstanding results that stand the test of time.',
  vision:
    'To be a leading provider of integrated contracting, project managing, general services and consultancy solutions, recognized for excellence, reliability, and innovation.',
  mission:
    'To deliver high-quality, sustainable, and cost-effective solutions that exceed client expectations through professionalism, teamwork, technology, deep commitment and continuous improvement.',
});
</script>
<style>
/* Vision & Mission Cards */
.vm-card {
  position: relative;
  background: var(--surface-color);
  border-radius: 20px;
  padding: 30px 25px;
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 85%);
  transition: all 0.3s ease;
  height: 100%;
}

.vm-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 30px color-mix(in srgb, var(--default-color), transparent 90%);

}

.vm-icon {
  background: color-mix(in srgb, var(--accent-color), transparent 88%);
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: var(--accent-color);
  margin-bottom: 15px;
}

.vm-badge {
  position: absolute;
  top: 15px;
  right: 20px;
  background: var(--accent-color);
  color: var(--contrast-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: 0 6px 14px color-mix(in srgb, var(--accent-color), transparent 65%); */
  box-shadow: 0 16px 30px color-mix(in srgb, var(--default-color), transparent 90%);

}

.vm-card h5 {
  font-weight: 700;
  margin-top: 10px;
  color: var(--heading-color);
  font-size: 1.2rem;
}

.vm-card p {
  color: var(--muted-text);
  margin-top: 10px;
  font-size: 0.95rem;
  line-height: 1.6;
}

</style>