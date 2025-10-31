import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

// Import CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/main.css'

// Import components
import Home from './views/Home.vue'
import PortfolioDetails from './views/PortfolioDetails.vue'
import ServiceDetails from './views/ServiceDetails.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/portfolio-details', component: PortfolioDetails },
  { path: '/service-details', component: ServiceDetails }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')