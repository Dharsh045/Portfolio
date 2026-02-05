<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const lyrics = [
  "Where creativity meets code",
  "turning curiosity into creations",
  "and my ideas into experiences",
]

onMounted(() => {
  const lines = document.querySelectorAll('.lyric-line')
  
  lines.forEach((line) => {
    gsap.to(line, {
      opacity: 1,
      scale: 1,
      color: '#ffffff', // Force white text for contrast on gradient
      duration: 0.5,
      scrollTrigger: {
        trigger: line,
        start: 'top 80%',
        end: 'bottom 40%',
        toggleActions: 'play reverse play reverse',
      }
    })
  })
  
})
</script>

<template>
  <section id="philosophy" class="philosophy-section">
    <div class="lyrics-container">
      <h2 
        v-for="(line, index) in lyrics" 
        :key="index"
        class="lyric-line"
      >
        {{ line }}
      </h2>
    </div>
  </section>
</template>

<style scoped>
.philosophy-section {
  padding: 10rem 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  /* Background transparency to let global scroll gradient show */
  background: transparent;
}

.lyrics-container {
  max-width: 900px;
  text-align: left;
  padding: 0 2rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.lyric-line {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.3); /* Dim white */
  margin: 0;
  transition: all 0.3s ease;
  transform-origin: left center;
  opacity: 0.4;
  scale: 0.95;
  cursor: default;
}

.lyric-line:hover {
  color: #ffffff !important;
}
</style>
