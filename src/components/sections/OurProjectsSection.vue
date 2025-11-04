<template>
  <section id="portfolio" class="portfolio section py-5 light-background">
    <div class="container section-title text-center mb-5" data-aos="fade-up">
      <h2 class="fw-bold">Our Projects</h2>
      <p class="text-muted">
        Showcasing our successful projects across consultancy services, digital
        transformation, strategic planning, and organizational development.
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
  { value: ".filter-consulting", label: "Consultancy Services" },
  { value: ".filter-digital", label: "Digital Services" },
  { value: ".filter-procurement", label: "Procurement" },
  { value: ".filter-transformation", label: "Transformation" },
]);

const portfolio = reactive([
  {
    id: 1,
    title: "Digital Transformation Strategy for Educational Institution",
    type: "Digital Services",
    category: "filter-digital",
    location: "Zamfara State",
    duration: "2024 – 2025",
    description:
      "A comprehensive digital transformation project involving system modernization, process automation, and staff training to improve educational and administrative efficiency.",
  },
  {
    id: 2,
    title: "Organizational Restructuring and Process Optimization",
    type: "Consultancy Services",
    category: "filter-consulting",
    location: "Abuja FCT – Abuja",
    duration: "2025",
    description:
      "Strategic consulting project to restructure organizational processes and enhance operational efficiency and working conditions.",
  },
  {
    id: 3,
    title: "Modern Workplace Digital Solutions Implementation",
    type: "Digital Services",
    category: "filter-digital",
    location: "Abuja FCT – Abuja",
    duration: "2025",
    description:
      "Implementation of modern digital workplace solutions to improve collaboration, productivity, and operational efficiency.",
  },
  {
    id: 4,
    title: "Procurement of Grinding Machine",
    type: "Procurement",
    category: "filter-procurement",
    location: "Delta State",
    duration: "2024",
    description:
      "Procurement of a high-quality grinding machine to support industrial and production operations.",
  },
  {
    id: 5,
    title: "Organizational Change Management Program",
    type: "Transformation",
    category: "filter-transformation",
    location: "Abuja FCT – Abuja",
    duration: "2025",
    description:
      "Complete organizational transformation program to optimize workforce management and operational efficiency.",
  },
  {
    id: 6,
    title: "Procurement and Installation of Security Equipment",
    type: "Procurement",
    category: "filter-procurement",
    location: "Abuja FCT – Abuja",
    duration: "2025",
    description:
      "Procurement and installation of modern security equipment to ensure safety and surveillance.",
  },
]);

const filteredPortfolio = computed(() => {
  if (activeFilter.value === "*") return portfolio;
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
