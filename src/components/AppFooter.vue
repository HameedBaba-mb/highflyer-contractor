<template>
  <footer id="footer" class="footer position-relative">
    <div class="container">
      <div class="row gy-5">
        <div class="col-lg-4">
          <div class="footer-brand">
            <router-link to="/" class="logo d-flex align-items-center mb-3">
              <span class="sitename">HIGHFLYER SOLUTIONS</span>
            </router-link>
            <p class="tagline">
              Innovation, Excellence, Results. Your trusted partner in
              business consulting, digital services, and strategic solutions.
            </p>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="footer-links-grid">
            <div class="row">
              <div class="col-6 col-md-4">
                <h5>Quick Links</h5>
                <ul class="list-unstyled">
                  <li>
                    <a href="#" @click="scrollToSection('about', $event)"
                      >About Us</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      @click="scrollToSection('vision-mission', $event)"
                      >Vision & Mission</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      @click="scrollToSection('featured-services', $event)"
                      >Services</a
                    >
                  </li>
                  <li>
                    <a href="#" @click="scrollToSection('portfolio', $event)"
                      >Projects</a
                    >
                  </li>
                  <li>
                    <a href="#" @click="scrollToSection('contact', $event)"
                      >Contact</a
                    >
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md-4">
                <h5>Services</h5>
                <ul class="list-unstyled">
                  <li>
                    <a href="#" @click="scrollToSection('services', $event)"
                      >Business Consulting</a
                    >
                  </li>
                  <li>
                    <a href="#" @click="scrollToSection('services', $event)"
                      >Digital Services</a
                    >
                  </li>
                  <li>
                    <a href="#" @click="scrollToSection('services', $event)"
                      >General Services</a
                    >
                  </li>
                  <li>
                    <a href="#" @click="scrollToSection('services', $event)"
                      >Consultancy Services</a
                    >
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md-4">
                <h5>Our Clients</h5>
                <ul class="list-unstyled">
                  <li><a href="#">FMHA</a></li>
                  <li><a href="#">NEMA</a></li>
                  <li><a href="#">NSIPA</a></li>
                  <li><a href="#">OHCSF</a></li>
                  <li><a href="#">ZSUBEB</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-2">
          <div class="footer-cta">
            <h5>Let's Connect</h5>
            <a
              href="#"
              @click="scrollToSection('contact', $event)"
              class="btn btn-outline"
              >Get in Touch</a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="footer-bottom-content">
              <p class="mb-0">
                © <span class="sitename">HIGHFLYER SOLUTIONS LTD</span>. All
                rights reserved. RC: 1970142
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const scrollToSection = (sectionId, event) => {
  event.preventDefault();

  // Get the target section
  const targetSection = document.querySelector(`#${sectionId}`);

  if (targetSection) {
    // Calculate offset for header height
    const headerHeight = document.querySelector("#header")?.offsetHeight || 0;
    const elementPosition = targetSection.offsetTop - headerHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  } else {
    console.warn(`Section with ID "${sectionId}" not found`);
  }
};
</script>