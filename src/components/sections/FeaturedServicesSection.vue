<template>
  <section id="hero" class="featured-services section light-background">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row g-4">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          :data-aos-delay="(index + 1) * 100"
        >
          <div class="service-item">
            <div class="icon">
              <i :class="service.icon"></i>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const services = reactive([

  {
    id: 1,
    icon: "bi bi-laptop",
    title: "Digital Services",
    description:
      "Our digital services arm offers full-spectrum solutions covering digital transformation, technology implementation, software development, and digital marketing. Our commitment to innovation and cutting-edge technology ensures modern and effective digital solutions.",
    link: "#services",
  },
  {
    id: 2,
    icon: "bi bi-diagram-3",
    title: "Project Management",
    description:
      "Our project management team offers complete solutions from concept development to project completion, ensuring projects are delivered on time, within budget, and to the highest standards while maintaining transparent communication with stakeholders.",
    link: "#services",
  },
  {
    id: 3,
    icon: "bi bi-lightbulb",
    title: "Strategic Advisory",
    description:
      "Our strategic advisory services provide expert advice and guidance across business strategy, market analysis, and organizational development. Our expert advisors offer practical solutions that help clients optimize performance and achieve sustainable business goals.",
    link: "#services",
  },
  {
    id: 4,
    icon: "bi bi-gear",
    title: "General Services",
    description:
      "We offer experienced, dynamic, and reliable teams specializing in general services for residential, commercial, and industrial sectors. With a strong commitment to excellence, innovation, and customer satisfaction, we deliver comprehensive, high-quality solutions tailored to meet each client's unique needs.",
    link: "#services",
  },
  {
    id: 5,
    icon: "bi bi-chat-dots",
    title: "Consultancy Services",
    description:
      "Our consultancy services provide expert advice and strategic guidance across general services and procurement management projects. Our expert consultants offer practical solutions that help clients optimize performance and achieve sustainable project goals.",
    link: "#services",
  }
]);
</script>