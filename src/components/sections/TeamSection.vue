<template>
  <section id="team" class="team section">
    <div class="container section-title" data-aos="fade-up">
      <h2>Our Team</h2>
      <p>
        Meet our skilled and dedicated professionals committed to quality
        delivery
      </p>
    </div>
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row g-4 align-items-stretch">
        <div
          v-for="(member, index) in team"
          :key="member.id"
          class="col-md-6 col-lg-3"
        >
          <article
            class="member-card h-100"
            data-aos="zoom-in"
            :data-aos-delay="150 + index * 50"
          >
            <div class="member-content">
              <h3 class="member-name">{{ member.name }}</h3>
              <p class="member-role">{{ member.role }}</p>
              <small class="member-qualification">{{
                member.qualification
              }}</small>
              <p class="member-bio">{{ member.bio }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const team = reactive([
  {
    id: 1,
    name: "Dr. S. Yahaya",
    role: "Finance Director",
    qualification: "Ph.D Finance",
    bio: "Leading our financial strategy and ensuring fiscal responsibility across all projects with extensive experience in financial management.",
  },
  {
    id: 2,
    name: "Barr. Nasiru Mato Esq.",
    role: "Legal Counsel",
    qualification: "LL.B. Law, BL",
    bio: "Providing expert legal guidance and ensuring compliance across all business operations with comprehensive legal expertise.",
  },
  {
    id: 3,
    name: "QS. Abubakar Yahuza",
    role: "Quantity Surveyor",
    qualification: "HND Quantity Survey",
    bio: "Managing project costs and ensuring accurate quantity measurements and valuations with precision and expertise.",
  },
  {
    id: 4,
    name: "Engr. Kabiru Shu'aibu",
    role: "Civil Engineer",
    qualification: "B.Eng. Civil Engineering",
    bio: "Leading our engineering projects with expertise in structural and civil works, ensuring quality and safety standards.",
  },
  {
    id: 5,
    name: "Rakiya Musa",
    role: "Public Administration",
    qualification: "HND Public Administration",
    bio: "Managing administrative operations and ensuring efficient organizational processes.",
  },
  {
    id: 6,
    name: "Adamu Musa",
    role: "Communications Specialist",
    qualification: "B.A. Mass Communication",
    bio: "Managing communications and stakeholder relations with expertise in media and public relations.",
  },
  {
    id: 7,
    name: "Abdulhamid Muhammad Babaalkali",
    role: "IT Specialist",
    qualification: "HND Computer Science",
    bio: "Managing technology infrastructure and digital solutions for enhanced project delivery.",
  },
  {
    id: 8,
    name: "Bashir Muhammad",
    role: "Data Analyst",
    qualification: "B.Sc. (Hons) Statistics",
    bio: "Providing statistical analysis and data-driven insights for informed decision making.",
  },
  {
    id: 9,
    name: "Maryam A. Moyi",
    role: "Human Resources",
    qualification: "B.Ed. Guidance and Counseling",
    bio: "Managing human resources and ensuring team development and organizational growth.",
  },
]);
</script>