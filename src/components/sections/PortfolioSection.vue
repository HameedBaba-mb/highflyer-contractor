<template>
  <section id="portfolio" class="portfolio section bg-light py-5">
    <div class="container section-title text-center mb-5" data-aos="fade-up">
      <h2 class="fw-bold">Our Projects</h2>
      <p class="text-muted">
        Showcasing our successful projects across construction, engineering, and
        infrastructure development.
      </p>
    </div>

    <div class="container">
      <!-- Filter Buttons -->
      <div class="row mb-4" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul class="portfolio-filters list-inline">
            <li
              v-for="filter in filters"
              :key="filter.value"
              :class="[
                'list-inline-item px-3 py-2 rounded-pill fw-semibold',
                activeFilter === filter.value
                  ? 'filter-active text-white'
                  : 'bg-white border',
              ]"
              style="cursor: pointer"
              @click="setActiveFilter(filter.value)"
            >
              {{ filter.label }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Project Cards -->
      <div class="row gy-4" data-aos="fade-up" data-aos-delay="200">
        <div
          v-for="item in filteredPortfolio"
          :key="item.id"
          class="col-lg-4 col-md-6"
        >
          <div class="card h-100 border-0 shadow-sm rounded-4 p-3 project-card">
            <div class="card-body">
              <h5 class="fw-bold mb-2">{{ item.title }}</h5>
              <p class="small text-muted mb-3">
                <strong>Category:</strong> {{ item.type }}
              </p>
              <p class="small mb-3">
                <strong>Location:</strong> {{ item.location }}
              </p>
              <p class="small mb-3">
                <strong>Duration:</strong> {{ item.duration }}
              </p>
              <p class="text-muted small">
                {{ item.description }}
              </p>
            </div>
            <!-- <div class="card-footer bg-transparent border-0 text-end">
              <a href="/project-details" class="btn btn-sm btn-outline-primary rounded-pill">
                View Details <i class="bi bi-arrow-right-short"></i>
              </a>
            </div> -->
          </div>
        </div>

        <!-- No results message -->
        <div
          v-if="filteredPortfolio.length === 0"
          class="text-center text-muted mt-4"
        >
          <p>No projects found under this category.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, computed } from "vue";

const activeFilter = ref("*");

const filters = reactive([
  { value: "*", label: "All" },
  { value: ".filter-construction", label: "Construction" },
  { value: ".filter-engineering", label: "Engineering" },
  { value: ".filter-infrastructure", label: "Infrastructure" },
  { value: ".filter-residential", label: "Residential" },
]);

const portfolio = reactive([
  {
    id: 1,
    title: "Modern Office Complex",
    type: "Construction",
    category: "filter-construction",
    location: "Abuja, Nigeria",
    duration: "Jan 2022 – Dec 2022",
    description:
      "A state-of-the-art office complex designed with sustainability and functionality in mind, showcasing premium engineering craftsmanship.",
  },
  {
    id: 2,
    title: "Infrastructure Development",
    type: "Engineering",
    category: "filter-engineering",
    location: "Lagos, Nigeria",
    duration: "Mar 2021 – Aug 2022",
    description:
      "Comprehensive engineering project including drainage systems, road expansion, and bridge foundation reinforcement.",
  },
  {
    id: 3,
    title: "Residential Estate Project",
    type: "Residential",
    category: "filter-residential",
    location: "Port Harcourt, Nigeria",
    duration: "Jan 2023 – Present",
    description:
      "Construction of luxury apartments and duplex units with modern amenities, emphasizing comfort, durability, and aesthetics.",
  },
  {
    id: 4,
    title: "Bridge Construction",
    type: "Infrastructure",
    category: "filter-infrastructure",
    location: "Kaduna, Nigeria",
    duration: "Jul 2022 – Feb 2023",
    description:
      "Construction of a dual-lane concrete bridge improving connectivity and transportation safety for local communities.",
  },
  {
    id: 5,
    title: "Commercial Plaza Development",
    type: "Construction",
    category: "filter-construction",
    location: "Kano, Nigeria",
    duration: "May 2020 – Oct 2021",
    description:
      "Development of a multi-purpose commercial plaza with retail outlets, offices, and parking facilities for urban commerce.",
  },
  {
    id: 6,
    title: "Highway Road Project",
    type: "Infrastructure",
    category: "filter-infrastructure",
    location: "Zamfara, Nigeria",
    duration: "2021 – 2023",
    description:
      "Construction and rehabilitation of major road networks to boost transportation efficiency and economic development.",
  },
]);

const filteredPortfolio = computed(() => {
  if (activeFilter.value === "*") {
    return portfolio;
  }
  return portfolio.filter(
    (item) => item.category === activeFilter.value.replace(".", "")
  );
});

const setActiveFilter = (filter) => {
  activeFilter.value = filter;
};
</script>

<style scoped>
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}
</style>
