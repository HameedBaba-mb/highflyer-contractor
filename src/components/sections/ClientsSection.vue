<template>
  <section id="clients" class="clients section">
    <div class="container section-title" data-aos="fade-up">
      <h2>Our Clients & Partners</h2>
      <p>Trusted by leading government agencies and organizations</p>
    </div>
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row g-4">
        <div
          v-for="client in clients"
          :key="client.id"
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          :data-aos-delay="100 * client.id"
        >
          <div class="client-card text-center p-4">
            <div class="client-logo mb-3">
              <img
                :src="client.logo"
                class="img-fluid"
                :alt="client.name"
                loading="lazy"
                style="max-height: 80px"
              />
            </div>
            <h5 class="client-name">{{ client.name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const clients = reactive([
  {
    id: 1,
    name: "Federal Ministry of Humanitarian Affairs and Poverty Reduction",
    logo: "/src/assets/img/clients/fmhapr.png",
  },
  {
    id: 2,
    name: "National Emergency Management Agency (NEMA)",
    logo: "/src/assets/img/clients/nema.png",
  },
  {
    id: 3,
    name: "National Social Investment Programme Agency (NSIPA)",
    logo: "/src/assets/img/clients/n-sip.jpeg",
  },
  {
    id: 4,
    name: "Office of the Head of the Civil Service of the Federation (OHCSF)",
    logo: "/src/assets/img/clients/ohcsf.jpeg",
  },
  {
    id: 5,
    name: "Zamfara State Universal Basic Education Board (ZSUBEB)",
    logo: "/src/assets/img/clients/zsubeb.jpg",
  },
]);
</script>