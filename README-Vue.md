# HIGHFLYER CONTRACTORS - Vue.js Version

This is a Vue.js 3 Composition API conversion of the original vanilla HTML website for HIGHFLYER CONTRACTORS LTD.

## Features

- **Vue.js 3 with Composition API**: Modern reactive framework
- **Vue Router**: Client-side routing
- **Bootstrap 5**: Responsive design framework
- **Vite**: Fast build tool and development server
- **Component-based Architecture**: Modular and maintainable code
- **Reactive Data**: Dynamic content management
- **Modern JavaScript**: ES6+ features

## Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections as components
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── ServicesSection.vue
│   │   └── ...
│   ├── AppHeader.vue      # Main navigation
│   ├── AppFooter.vue      # Footer component
│   ├── ScrollTop.vue      # Scroll to top button
│   └── Preloader.vue      # Loading animation
├── views/
│   ├── Home.vue           # Main homepage
│   ├── PortfolioDetails.vue
│   └── ServiceDetails.vue
├── assets/
│   └── css/
│       └── main.css       # Custom styles
└── main.js                # App entry point
```

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Key Vue.js Features Used

### Composition API
- `ref()` and `reactive()` for reactive data
- `computed()` for derived state
- `onMounted()` and `onUnmounted()` for lifecycle hooks

### Component Communication
- Props for parent-to-child data flow
- Emit events for child-to-parent communication
- Reactive data sharing between components

### Vue Router
- Client-side routing with history mode
- Smooth scrolling to hash anchors
- Route-based component loading

## Components Overview

### Sections
Each major section of the website is a separate Vue component:

- **HeroSection**: Main banner with call-to-action
- **FeaturedServicesSection**: Service cards with reactive data
- **AboutSection**: Company information with metrics
- **ContactSection**: Contact form with form validation
- **And more...**

### Reactive Features
- Dynamic navigation highlighting
- Interactive FAQ accordion
- Portfolio filtering
- Form validation and submission
- Mobile navigation toggle

## Development Notes

### CSS Integration
The original CSS is imported and works seamlessly with Vue components. Custom styles can be added to individual components using scoped styles.

### Third-party Libraries
All original libraries (AOS, GLightbox, PureCounter, etc.) are integrated and initialized in the Vue lifecycle.

### Asset Management
Images and other assets are served from the `/assets` directory and referenced using absolute paths.

## Customization

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Import and add it to `src/views/Home.vue`
3. Add reactive data as needed

### Modifying Content
Content is stored in reactive objects within each component, making it easy to update text, images, and other data.

### Styling
- Global styles: `src/assets/css/main.css`
- Component styles: Add `<style scoped>` to individual components
- Bootstrap classes work as expected

## Browser Support

- Modern browsers with ES6+ support
- Vue.js 3 requirements apply
- Responsive design for mobile and desktop

## Performance

- Vite provides fast development builds
- Production builds are optimized and minified
- Components are loaded efficiently
- Images use lazy loading where appropriate

This Vue.js version maintains all the functionality of the original while providing a modern, maintainable, and scalable codebase.