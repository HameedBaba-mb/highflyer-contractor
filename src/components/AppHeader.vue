<template>
  <header
    id="header"
    class="header sticky-top"
    :class="{ scrolled: isScrolled }"
  >
    <div class="container-fluid container-xl position-relative">
      <div class="top-row d-flex align-items-center position-relative">
        <!-- Logo - centered on desktop, left on mobile -->
        <router-link
          to="/"
          class="logo d-flex align-items-center position-absolute start-50 translate-middle-x d-xl-flex d-none"
        >
          <img
            src="../assets/img/logo.jpeg"
            class="img-fluid rounded-circle"
            width="30"
            alt="HIGHFLYER SOLUTIONS"
          />
          <h1 class="sitename text-center ms-2" style="font-size: 14px">
            HIGHFLYER SOLUTIONS
          </h1>
        </router-link>

        <!-- Logo for mobile - left aligned -->
        <router-link to="/" class="logo d-flex align-items-center d-xl-none">
          <img
            src="../assets/img/logo.jpeg"
            class="img-fluid rounded-circle"
            width="30"
            alt="HIGHFLYER SOLUTIONS"
          />
          <h1 class="sitename text-center ms-2" style="font-size: 14px">
            HIGHFLYER SOLUTIONS
          </h1>
        </router-link>

        <!-- Mobile toggle button -->
        <i
          class="mobile-nav-toggle d-xl-none bi ms-auto"
          :class="isMobileNavOpen ? 'bi-x' : 'bi-list'"
          @click="toggleMobileNav"
        ></i>
      </div>
    </div>

    <div class="nav-wrap">
      <div class="container d-flex justify-content-center position-relative">
        <nav id="navmenu" class="navmenu">
          <ul>
            <li>
              <a
                href="#"
                class="active"
                @click="scrollToSection('hero', $event)"
                >Home</a
              >
            </li>
            <li>
              <a href="#" @click="scrollToSection('about', $event)">About</a>
            </li>
            <li>
              <a href="#" @click="scrollToSection('core-values', $event)"
                >Core Values</a
              >
            </li>
            <li>
              <a href="#" @click="scrollToSection('services', $event)"
                >Services</a
              >
            </li>
            <li>
              <a href="#" @click="scrollToSection('features', $event)"
                >Features</a
              >
            </li>
            <li>
              <a href="#" @click="scrollToSection('commitment', $event)"
                >Skills</a
              >
            </li>
            <li>
              <a href="#" @click="scrollToSection('portfolio', $event)"
                >Projects</a
              >
            </li>
            <li>
              <a href="#" @click="scrollToSection('certificates', $event)"
                >Certifications</a
              >
            </li>
            <li>
              <a href="#" @click="scrollToSection('clients', $event)"
                >Clients</a
              >
            </li>
            <li>
              <a href="#" @click="scrollToSection('contact', $event)"
                >Contact</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isMobileNavOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100;
};

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value;
  document.body.classList.toggle("mobile-nav-active");
};

const scrollToSection = (sectionId, event) => {
  event.preventDefault();

  // Remove active class from all links
  document.querySelectorAll(".navmenu a").forEach((link) => {
    link.classList.remove("active");
  });
  // Add active class to clicked link
  event.target.classList.add("active");

  // Get the target section
  const targetSection = document.querySelector(`#${sectionId}`);

  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  // Close mobile nav if open
  if (isMobileNavOpen.value) {
    toggleMobileNav();
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Ensure proper positioning for mobile toggle */
.mobile-nav-toggle {
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000;
}

/* Logo positioning adjustments */
.logo {
  text-decoration: none;
  z-index: 999;
}

.logo:hover {
  text-decoration: none;
}

/* Ensure the centered logo doesn't interfere with other elements */
@media (min-width: 1200px) {
  .top-row {
    min-height: 60px;
  }
}

/* Mobile adjustments */
@media (max-width: 1199px) {
  .top-row {
    justify-content: space-between;
    padding: 10px 0;
  }
}
</style>