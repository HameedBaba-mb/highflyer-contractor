<template>
  <header
    id="header"
    class="header sticky-top"
    :class="{ scrolled: isScrolled }"
  >
    <div class="container-fluid container-xl position-relative">
      <div class="top-row d-flex align-items-center justify-content-between">
        <router-link to="/" class="logo d-flex align-items-center " >
          <img src="../assets/img/logo.jpeg" class="img-fluid rounded-circle" width="30" alt="HIGHFLYER CONTRACTORS" />
          <h1 class="sitename text-center" style="font-size: 14px;">HIGHFLYER CONTRACTORS</h1>
        </router-link>

        <div class="d-flex align-items-center">
        
        </div>
      </div>
    </div>

    <div class="nav-wrap">
      <div class="container d-flex justify-content-center position-relative">
        <nav id="navmenu" class="navmenu">
          <ul>
            <li>
              <a href="#hero" class="active" @click="setActiveLink">Home</a>
            </li>
            <li><a href="#about" @click="setActiveLink">About</a></li>
            <li><a href="#services" @click="setActiveLink">Services</a></li>
            <li><a href="#portfolio" @click="setActiveLink">Portfolio</a></li>
            <li><a href="#team" @click="setActiveLink">Team</a></li>
            <li><a href="#clients" @click="setActiveLink">Clients</a></li>
            <li><a href="#contact" @click="setActiveLink">Contact</a></li>
          </ul>
          <i
            class="mobile-nav-toggle d-xl-none bi"
            :class="isMobileNavOpen ? 'bi-x' : 'bi-list'"
            @click="toggleMobileNav"
          ></i>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isMobileNavOpen = ref(false);
const searchQuery = ref("");

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100;
};

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value;
  document.body.classList.toggle("mobile-nav-active");
};

const setActiveLink = (event) => {
  // Remove active class from all links
  document.querySelectorAll(".navmenu a").forEach((link) => {
    link.classList.remove("active");
  });
  // Add active class to clicked link
  event.target.classList.add("active");

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