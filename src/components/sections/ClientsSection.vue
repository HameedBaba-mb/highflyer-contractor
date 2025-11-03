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
                class="img-fluid text-center"
                :alt="client.name"
                loading="lazy"
                :style="{ width: client.imgWidth, height: client.imgHeight }"
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

// Import images
import fmhaprLogo from "../../assets/img/clients/fmhapr.png";
import nemaLogo from "../../assets/img/clients/nema.jpg";
import nsipLogo from "../../assets/img/clients/nsip.png";
import ohcsfLogo from "../../assets/img/clients/ohcsf.jpg";
import zsubebLogo from "../../assets/img/clients/zsubeb.jpg";

const clients = reactive([
  {
    id: 1,
    name: "Federal Ministry of Humanitarian Affairs and Poverty Reduction",
    logo: fmhaprLogo,
    imgWidth: "200px",
    imgHeight: "80px",
  },
  {
    id: 2,
    name: "National Emergency Management Agency (NEMA)",
    logo: nemaLogo,
    imgWidth: "200px",
    imgHeight: "80px",
  },
  {
    id: 3,
    name: "National Social Investment Programme Agency (NSIPA)",
    logo: nsipLogo,
       imgWidth: '200px',
    imgHeight: '80px',
  },
  {
    id: 4,
    name: "Office of the Head of the Civil Service of the Federation (OHCSF)",
    logo: ohcsfLogo,
       imgWidth: '200px',
    imgHeight: '80px',
  },
  {
    id: 5,
    name: "Zamfara State Universal Basic Education Board (ZSUBEB)",
    logo: zsubebLogo,
    imgWidth: "200px",
    imgHeight: "80px",
  },
]);
</script>