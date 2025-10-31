<template>
  <section id="faq" class="faq section">
    <div class="container section-title" data-aos="fade-up">
      <h2>F.A.Q</h2>
      <p>Frequently Asked Questions</p>
    </div>
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="faq-wrapper">
            <div 
              v-for="(faq, index) in faqs" 
              :key="faq.id"
              class="faq-item"
              :class="{ 'faq-active': faq.isOpen }"
            >
              <div class="faq-header" @click="toggleFaq(index)">
                <div class="faq-icon">
                  <i class="bi bi-question-circle"></i>
                </div>
                <h4>{{ faq.question }}</h4>
                <div class="faq-toggle">
                  <i class="bi bi-plus"></i>
                  <i class="bi bi-dash"></i>
                </div>
              </div>
              <div class="faq-content">
                <div class="content-inner">
                  <p>{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const faqs = reactive([
  {
    id: 1,
    question: 'What services does HIGHFLYER CONTRACTORS provide?',
    answer: 'We provide comprehensive solutions in General Contract and Merchandise, Engineering and Construction Services, Project Management, and Consultancy Services. Our multidisciplinary team ensures seamless execution from conception to completion.',
    isOpen: true
  },
  {
    id: 2,
    question: 'What makes HIGHFLYER CONTRACTORS different from other contractors?',
    answer: 'We combine excellence, innovation, and integrity with strong procurement and logistics capabilities. Our proven track record with government agencies, skilled professional team, and commitment to delivering projects on time and within budget sets us apart.',
    isOpen: false
  },
  {
    id: 3,
    question: 'Do you work with government agencies?',
    answer: 'Yes, we have established partnerships with major government agencies including Federal Ministry of Humanitarian Affairs, NEMA, NSIPA, OHCSF, and ZSUBEB. We understand government procurement processes and compliance requirements.',
    isOpen: false
  },
  {
    id: 4,
    question: 'How do you ensure project quality and compliance?',
    answer: 'We adhere to international standards while ensuring cost efficiency and sustainability. Our team maintains transparent communication throughout the project lifecycle, and we prioritize safety and environmental standards in all our operations.',
    isOpen: false
  },
  {
    id: 5,
    question: 'What is your approach to project management?',
    answer: 'We apply proven methodologies and modern tools to oversee all aspects of project execution including scope, cost, quality, risk, and stakeholder engagement. We maintain transparent communication and collaboration with all stakeholders throughout the project.',
    isOpen: false
  }
])

const toggleFaq = (index) => {
  faqs[index].isOpen = !faqs[index].isOpen
}
</script>