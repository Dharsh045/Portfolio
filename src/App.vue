<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Standard GSAP ScrollTrigger setup
// User didn't ask to install lenis, but "smooth scroll". I'll use standard css scroll-behavior for now + gsap scrubbing.

import Navbar from './components/layout/Navbar.vue'
import Cursor from './components/ui/Cursor.vue'
import InteractiveBackground from './components/ui/InteractiveBackground.vue'
import Hero from './components/sections/Hero.vue'
import AboutMe from './components/sections/AboutMe.vue'
import Projects from './components/sections/Projects.vue'
import Experience from './components/sections/Experience.vue'
import Education from './components/sections/Education.vue'
import Leadership from './components/sections/Leadership.vue'
import Extracurricular from './components/sections/Extracurricular.vue'
import Publications from './components/sections/Publications.vue'
import Philosophy from './components/sections/Philosophy.vue'
import Contact from './components/sections/Contact.vue'
import Footer from './components/layout/Footer.vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Global Section Reveal Animation
  const sections = document.querySelectorAll('section')
  
  sections.forEach(section => {
    gsap.fromTo(section, 
      { 
        y: 50, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 90%', 
          toggleActions: 'play none none reverse'
        }
      }
    )
  })
})
</script>

<template>
  <InteractiveBackground />
  <Cursor />
  <Navbar />
  <main id="app">
    <Hero />
    <AboutMe />
    <Experience />
    <Projects />
    <Education />
    <Publications />
    <Leadership />
    <Extracurricular />
    <Philosophy />
    <Contact />
  </main>
  <Footer />
</template>

<style>
/* Global Smooth Scroll attempt via CSS */
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  overflow-x: hidden;

}

/* Ensure sections allow background to show through */
#hero, #about, #projects, #experience, #leadership, #extracurricular, #publications, #contact {
  background-color: transparent;
}
</style>
