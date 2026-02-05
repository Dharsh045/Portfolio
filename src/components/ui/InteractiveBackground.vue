<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const blob1Ref = ref<HTMLElement | null>(null)
const blob2Ref = ref<HTMLElement | null>(null)
const blob3Ref = ref<HTMLElement | null>(null)
const bgRef = ref<HTMLElement | null>(null)

const updateBlobColors = () => {
  if (!blob1Ref.value || !blob2Ref.value || !blob3Ref.value) return

  const isDarkMode = document.documentElement.classList.contains('dark-mode')
  
  const colors = isDarkMode ? {
    // Dark Mode: Luxury Gold/Dark Gradient
    blob1: 'radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
    blob2: 'radial-gradient(circle, rgba(100, 65, 23, 0.2) 0%, rgba(0, 0, 0, 0) 70%)',
    blob3: 'radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, rgba(0, 0, 0, 0) 70%)'
  } : {
    // Light Mode: Creative Pastel Blobs
    blob1: 'radial-gradient(circle, var(--blob-1, #FFD1D1) 0%, rgba(255, 255, 255, 0) 70%)', 
    blob2: 'radial-gradient(circle, var(--blob-2, #D1E8FF) 0%, rgba(255, 255, 255, 0) 70%)', 
    blob3: 'radial-gradient(circle, var(--blob-3, #E6D1FF) 0%, rgba(255, 255, 255, 0) 70%)'
  }

  // Animate color change smoothly
  gsap.to(blob1Ref.value, { background: colors.blob1, duration: 1 })
  gsap.to(blob2Ref.value, { background: colors.blob2, duration: 1 })
  gsap.to(blob3Ref.value, { background: colors.blob3, duration: 1 })
}

const initScrollColor = () => {
  if (!bgRef.value) return
  
  // Define scroll colors sequence:
  // 1. Lavender + Pink Intro (#E6E6FA)
  // 2. Warm Cream Peach (#FFDAB9)
  // 3. Cool Blue Pastel (#B0E0E6)
  // 4. Pink Lavender Mix (#D8BFD8)
  // 5. Lavender Dominant (#E6E6FA)
  // 6. Cream Ending (#FFFDD0)
  const scrollColors = ["#d4a9ce", "#d8969e", "#efcfcf","#d9688d", "#c0e1eb", "#e9838f","#cdb4d7"]
  // Create a timeline linked to total scroll
  gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1 // Smooth transitions
    }
  })
  .to(bgRef.value, { backgroundColor: scrollColors[1], ease: "none" }) // To Peach
  .to(bgRef.value, { backgroundColor: scrollColors[2], ease: "none" }) // To Blue
  .to(bgRef.value, { backgroundColor: scrollColors[3], ease: "none" }) // To Pink/Lavender
  .to(bgRef.value, { backgroundColor: scrollColors[4], ease: "none" }) // To Lavender
  .to(bgRef.value, { backgroundColor: scrollColors[5], ease: "none" }) // To Cream
}

const handleMouseMove = (e: MouseEvent) => {
  const { clientX, clientY } = e
  const xPercent = (clientX / window.innerWidth - 0.5) * 20 
  const yPercent = (clientY / window.innerHeight - 0.5) * 20

  if (blob1Ref.value) {
    gsap.to(blob1Ref.value, { xPercent: xPercent, yPercent: yPercent, duration: 2, ease: 'power2.out' })
  }
  if (blob2Ref.value) {
    gsap.to(blob2Ref.value, { xPercent: -xPercent * 1.5, yPercent: -yPercent * 1.5, duration: 2.5, ease: 'power2.out' })
  }
  if (blob3Ref.value) {
    gsap.to(blob3Ref.value, { xPercent: xPercent * 0.5, yPercent: -yPercent, duration: 3, ease: 'power2.out' })
  }
}

let observer: MutationObserver

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  
  // Initial check
  updateBlobColors()
  initScrollColor()

  // Watch for class changes on <html>
  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        updateBlobColors()
      }
    })
  })
  
  observer.observe(document.documentElement, { attributes: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  observer.disconnect()
})
</script>

<template>
  <div ref="bgRef" class="interactive-bg">
    <div ref="blob1Ref" class="blob blob-1"></div>
    <div ref="blob2Ref" class="blob blob-2"></div>
    <div ref="blob3Ref" class="blob blob-3"></div>
    <div class="noise-overlay"></div>
  </div>
</template>

<style scoped>
.interactive-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  background: var(--bg-primary); /* Base color lives here now */
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
}

.blob-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 200, 221, 0.4) 0%, rgba(255, 200, 221, 0) 70%); /* Soft Pink */
  top: -10%;
  left: -10%;
}

.blob-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(162, 210, 255, 0.4) 0%, rgba(162, 210, 255, 0) 70%); /* Soft Blue */
  bottom: -10%;
  right: -10%;
}

.blob-3 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(205, 180, 219, 0.4) 0%, rgba(205, 180, 219, 0) 70%); /* Soft Purple */
  top: 40%;
  left: 30%;
}

.noise-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.03;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

/* Dark mode adjustment if you implement dark mode toggle later */
:global(body.dark-mode) .interactive-bg {
  background: #0f0f0f;
}
</style>
