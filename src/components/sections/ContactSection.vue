<template>
  <section id="contact" class="contact section dark-background">
    <div class="container section-title" data-aos="fade-up">
      <h2>Contact</h2>
      <p>Need Help? Contact Us</p>
    </div>

    <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4">
        <div class="col-lg-5">
          <div 
            v-for="info in contactInfo" 
            :key="info.title"
            class="info-item d-flex"
          >
            <i :class="info.icon + ' flex-shrink-0'"></i>
            <div>
              <h3>{{ info.title }}</h3>
              <p>{{ info.content }}</p>
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <form 
            @submit.prevent="submitForm" 
            class="php-email-form" 
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="row gy-4">
              <div class="col-md-6">
                <input 
                  type="text" 
                  name="name" 
                  class="form-control" 
                  placeholder="Your Name" 
                  v-model="form.name"
                  required
                >
              </div>

              <div class="col-md-6">
                <input 
                  type="email" 
                  class="form-control" 
                  name="email" 
                  placeholder="Your Email" 
                  v-model="form.email"
                  required
                >
              </div>

              <div class="col-md-12">
                <input 
                  type="text" 
                  class="form-control" 
                  name="subject" 
                  placeholder="Subject" 
                  v-model="form.subject"
                  required
                >
              </div>

              <div class="col-md-12">
                <textarea 
                  class="form-control" 
                  name="message" 
                  rows="6" 
                  placeholder="Message" 
                  v-model="form.message"
                  required
                ></textarea>
              </div>

              <div class="col-md-12 text-center">
                <div v-if="isLoading" class="loading">Loading</div>
                <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
                <div v-if="successMessage" class="sent-message">{{ successMessage }}</div>

                <button type="submit" :disabled="isLoading">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const contactInfo = reactive([
  {
    icon: 'bi bi-geo-alt',
    title: 'Address',
    content: 'Suite C9, 2nd Floor, Rajab Plaza, Nnamdi Azikiwe Expressway, Off. Area 3 Junction, Garki, Abuja, FCT'
  },
  {
    icon: 'bi bi-telephone',
    title: 'Call Us',
    content: '0701 458 8884, 0807 390 7055'
  },
  {
    icon: 'bi bi-envelope',
    title: 'Email Us',
    content: 'contact@highflyer.ng'
  }
])

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isLoading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const submitForm = async () => {
  isLoading.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    
    successMessage.value = 'Your message has been sent. Thank you!'
  } catch (error) {
    errorMessage.value = 'There was an error sending your message. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>