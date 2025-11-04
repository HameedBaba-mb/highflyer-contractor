<template>
  <section id="certificates" class="section py-5">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="container section-title text-center mb-5" data-aos="fade-up">
        <h2 class="fw-bold">Company Certifications</h2>
        <p class="text-muted">
          Recognitions and compliance documents validating our corporate
          legitimacy and professional standing.
        </p>
      </div>

      <div class="row gy-4">
        <!-- Each certificate -->
        <div
          v-for="certificate in certificates"
          :key="certificate.id"
          class="col-12 col-md-6 col-lg-4"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <div class="card h-100 border-0 shadow-sm rounded-4">
            <div class="card-body">
           

              <div class="text-center mb-3">
                <img
                  :src="certificate.img"
                  alt=""
                  v-if="certificate.img"
                  :style="{
                    width: certificate.width,
                    height: certificate.height,
                  }"
                />
              </div>

              <!-- Name & Authority -->
              <h5 class="fw-bold text-dark mb-1 text-center">
                {{ certificate.name }}
              </h5>
              <small class="text-secondary d-block mb-3 text-center">{{
                certificate.authority
              }}</small>

              <!-- Description -->
              <p class="text-muted small">{{ certificate.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

// Import certificate images
import cacImg from "../../assets/img/certicates/cac.png";
import firsImg from "../../assets/img/certicates/firs.png";
import bppImg from "../../assets/img/certicates/BPP.png";
import penconImg from "../../assets/img/certicates/pencon.jpg";
import nsiteImg from "../../assets/img/certicates/nsite.png";
import itImg from "../../assets/img/certicates/it.jpeg";

const certificates = reactive([
  {
    id: 1,
    name: "Certificate of Incorporation",
    authority: "Corporate Affairs Commission (CAC)",
    description:
      "Officially recognizes HIGHFLYER SOLUTIONS LTD as a legally registered private company limited by shares under the Companies and Allied Matters Act (CAMA 2020). Establishes the company's corporate identity and right to operate in Nigeria.",
    img: cacImg,
    width: "80px",
  },
  {
    id: 2,
    name: "Tax Identification Number (TIN)",
    authority: "Federal Inland Revenue Service (FIRS)",
    description:
      "Confirms that the company is registered for tax purposes in Nigeria, allowing lawful tax remittance, eligibility for contracts, and compliance with federal regulations.",
    img: firsImg,
    width: "75px",
  },
  {
    id: 3,
    name: "Certificate of Registration on the National Database of Service Providers",
    authority: "Bureau of Public Procurement (BPP)",
    description:
      "Validates the company's registration as an approved service provider eligible to bid for federal government projects in compliance with the Public Procurement Act.",
    img: bppImg,
    width: "80px",
  },
  {
    id: 4,
    name: "Pension Compliance Certificate",
    authority: "National Pension Commission (PENCOM)",
    description:
      "Verifies compliance with the Pension Reform Act by enrolling staff in a pension scheme and remitting contributions promptly. Mandatory for government contract participation.",
    img: penconImg,
    width: "90px",
  },
  {
    id: 5,
    name: "Certificate of Compliance",
    authority: "National Social Insurance Trust Fund (NSITF)",
    description:
      "Confirms company participation in the Employees’ Compensation Scheme for workplace insurance, disability, or death coverage, ensuring staff welfare.",
    img: nsiteImg,
    width: "80px",
  },
  {
    id: 6,
    name: "Industrial Training Fund (ITF) Compliance Certificate",
    authority: "Industrial Training Fund (ITF)",
    description:
      "Indicates compliance with ITF regulations to support manpower training and workforce development, showcasing the company’s commitment to capacity building.",
    img: itImg,
    width: "75px",
  },
]);
</script>

<style scoped>
.card:hover {
  transform: translateY(-5px);
  transition: all 0.3s ease;
}
</style>
