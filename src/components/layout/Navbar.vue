<script setup lang="ts">
import { ref, onMounted } from 'vue'

/* =========================
   ACTIVE SECTION TRACKING
========================= */
const activeSection = ref<string | null>(null)

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Publications', id: 'publications' },
  { label: 'Leadership', id: 'leadership' },
  { label: 'Contact', id: 'contact' },
]

/* =========================
   SMART NAVBAR (Scroll)
========================= */
const isHidden = ref(false)
let lastScrollY = 0

const handleScroll = () => {
  const currentScrollY = window.scrollY
  
  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    // Scrolling DOWN -> Hide
    isHidden.value = true
  } else {
    // Scrolling UP -> Show
    isHidden.value = false
  }
  
  lastScrollY = currentScrollY
}

/* =========================
   NAVIGATION
========================= */
const handleNavClick = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    // Use standard behavior - 'smooth' usually works well if pinning is handled
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeSection.value = id
    isHidden.value = false // Always show navbar on click
  }
}

const isActive = (id: string) => activeSection.value === id

/* =========================
   DARK MODE SYSTEM
========================= */
const isDark = ref(true) // Default to dark

/* =========================
   DARK MODE SYSTEM
========================= */
const toggleTheme = () => {
  isDark.value = !isDark.value

  if (isDark.value) {
    document.documentElement.classList.add("dark-mode")
    localStorage.setItem("theme", "dark")
  } else {
    document.documentElement.classList.remove("dark-mode")
    localStorage.setItem("theme", "light")
  }
}

/* =========================
   LIFECYCLE
========================= */
onMounted(() => {
  // Scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true })

  // Load Saved Theme (Default to Dark)
  const savedTheme = localStorage.getItem("theme")
  
  if (savedTheme === "light") {
    document.documentElement.classList.remove("dark-mode")
    isDark.value = false
  } else {
    // If 'dark' or null (first visit), ensure dark mode
    document.documentElement.classList.add("dark-mode")
    isDark.value = true
  }
})
</script>

<template>
  <nav :class="['navbar', { 'navbar-hidden': isHidden }]">
    <div class="navbar-container">
      
      <!-- Logo -->
      <div class="navbar-logo" @click="handleNavClick('hero')">
        <span class="logo-text">Portfolio</span>
      </div>

      <!-- Links -->
      <ul class="navbar-menu">
        <li v-for="link in navLinks" :key="link.id" class="nav-item">
          <button
            :class="['nav-link', { active: isActive(link.id) }]"
            @click="handleNavClick(link.id)"
          >
            {{ link.label }}
          </button>
        </li>

        <!-- Dark toggle -->
        <li class="nav-item">
          <button class="theme-toggle" @click="toggleTheme">
            {{ isDark ? '☀' : '☾' }}
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 1.5rem; /* Floating from top */
  left: 50%;
  transform: translateX(-50%);
  width: auto; /* Hug content */
  max-width: 90%;
  padding: 0.6rem 2rem; /* Compact padding ("Small Lean") */
  z-index: 100;
  transition: transform 0.3s ease, background-color 0.3s ease, top 0.3s ease;
  background-color: rgba(255, 255, 255, 0.7); /* Frosted glass */
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50px; /* Pill Shape */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.navbar-hidden {
  transform: translate(-50%, -200%); /* Slide UP and keep centered */
}

.navbar-container {
  /* Removed max-width/margins since parent handles centering */
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.navbar-logo {
  cursor: pointer;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.5px;
}

.navbar-menu {
  display: flex;
  list-style: none;
  gap: var(--space-md);
  align-items: center;
}

.nav-link {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  padding: var(--space-sm) var(--space-md);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link.active {
  color: var(--text-primary);
}

.theme-toggle {
  background: none;
  border: 1px solid var(--divider-light);
  color: var(--text-primary);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  transform: translateY(-1px);
}
</style>
