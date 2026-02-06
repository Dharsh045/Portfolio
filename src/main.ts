/**
 * Main Application Entry Point
 *
 * Imports global styles and mounts the Vue application.
 */

import { createApp } from 'vue'
import './style.css'
import './dark.css' // Isolated Dark Mode Styles
import App from './App.vue'

// Initialize the application
const app = createApp(App)

// Mount to the DOM
app.mount('#app')

console.log('🚀 Portfolio Application Initialized')
