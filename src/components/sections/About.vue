<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const lyrics = [
  "My passion lies in the",
  "intersection of art and technology,",
  "creating visually captivating",
  "interfaces and seamless",
  "experiences that leave a",
  "lasting impression."
]



onMounted(() => {
  const lines = document.querySelectorAll('.lyric-line')
  
  lines.forEach((line) => {
    gsap.to(line, {
      opacity: 1,
      scale: 1,
      color: 'var(--text-primary)', // Use theme variable
      duration: 0.5,
      scrollTrigger: {
        trigger: line,
        start: 'top 60%',
        end: 'bottom 40%',
        toggleActions: 'play reverse play reverse',
      }
    })
  })
  
})
</script>

<template>
  <section id="about" class="about-section">
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
.about-section {
  padding: 10rem 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  /* Background is transparent to let body gradient show */
}

.lyrics-container {
  max-width: 900px;
  text-align: left; /* Lyrics usually left or center. Left looks more 'Spotify' list-like */
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
  color: var(--text-muted); /* Inactive color (Dim) */
  margin: 0;
  transition: all 0.3s ease;
  transform-origin: left center;
  /* Initial state for GSAP to animate from if needed, but CSS handles default dim */
  opacity: 0.4;
  scale: 0.95;
  cursor: default;
}

.lyric-line:hover {
  color: var(--text-primary) !important; /* Allow hover peek */
}


</style>
