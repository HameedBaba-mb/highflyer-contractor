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
import emailjs from '@emailjs/browser'
import { emailConfig } from '../../config/email.js'

const contactInfo = reactive([
  {
    icon: 'bi bi-geo-alt',
    title: 'Address',
    content: 'Rajab Plaza, Nnamdi Azikiwe Expressway, Off. Area 3 Junction, Garki, Abuja, FCT'
  },
  {
    icon: 'bi bi-telephone',
    title: 'Call Us',
    content: '0701 458 8884'
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
    // EmailJS configuration from config file
    const { serviceID, templateID, publicKey } = emailConfig

    // Create email template parameters
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
      to_email: 'contact@highflyer.ng'
    }

    // Try to send email using EmailJS
    if (serviceID !== 'YOUR_SERVICE_ID' && templateID !== 'YOUR_TEMPLATE_ID' && publicKey !== 'YOUR_PUBLIC_KEY') {
      await emailjs.send(serviceID, templateID, templateParams, publicKey)
      successMessage.value = 'Your message has been sent successfully! We will get back to you soon.'
    } else {
      // Fallback to mailto link if EmailJS is not configured
      const mailtoLink = `mailto:contact@highflyer.ng?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      )}`
      
      window.open(mailtoLink, '_blank')
      successMessage.value = 'Your default email client has been opened. Please send the message from there.'
    }
    
    // Reset form on success
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    
  } catch (error) {
    console.error('Email sending error:', error)
    
    // Fallback to mailto link on error
    const mailtoLink = `mailto:contact@highflyer.ng?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`
    
    window.open(mailtoLink, '_blank')
    errorMessage.value = 'Email service unavailable. Your default email client has been opened as a fallback.'
  } finally {
    isLoading.value = false
  }
}
</script>