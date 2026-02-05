<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const education = [
  {
    degree: 'B.Tech in Computer Science',
    college: 'Amrita Vishwa Vidyapeetham, Coimbatore',
    year: '2023-2027',
    specialization: 'CGPA : 9.21',
    highlight: 'Coursework includes Data Structures and Algorithms, Operating Systems, Computer Networks, Database Management Systems, Artificial Intelligence, and Machine Learning'
  },
  {
    degree: 'Higher Secondary',
    college: 'Advaith International Academy',
    year: '2021-2023',
    specialization: 'Percentage : 93.6%',
    highlight: 'School topper in 3 main subjects - Chemistry, Mathematics and Computer Science'
  }
]

onMounted(() => {
  gsap.from('.edu-cell', {
    scrollTrigger: {
      trigger: '#education',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  })
})
</script>

<template>
  <section id="education" class="education-section">
    <div class="container">
      <div class="grid-layout">
        <div class="grid-header">
          <h2 class="title">Education</h2>
          <p class="subtitle">Academic Background</p>
        </div>

        <div 
          v-for="(edu, index) in education" 
          :key="index" 
          class="edu-cell"
        >
          <div class="edu-year">{{ edu.year }}</div>
          
          <div class="edu-content">
            <h3 class="degree">{{ edu.degree }}</h3>
            <p class="college">{{ edu.college }}</p>
            
            <div class="meta-info">
              <span class="spec">{{ edu.specialization }}</span>
              <p class="highlight">{{ edu.highlight }}</p>
            </div>
          </div>
          
          <div class="corner-accents">
            <span></span><span></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-section {
  padding: 8rem 0;
  background: transparent;
}

.container {
  max-width: 1200px; /* Wider for grid */
  margin: 0 auto;
  padding: 0 2rem;
}

.grid-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0; /* No gap, relying on borders */
  border-top: 2px solid var(--text-primary);
  border-bottom: 2px solid var(--text-primary);
}

.grid-header {
  grid-column: 1 / -1;
  padding: 3rem;
  border-bottom: 1px solid var(--divider-accent);
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.title {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  color: var(--text-primary);
  margin: 0;
  line-height: 1;
  text-transform: uppercase;
}

.subtitle {
  font-family: var(--font-mono);
  font-size: 1.1rem;
  color: var(--text-secondary);
}

.edu-cell {
  position: relative;
  padding: 4rem;
  border-right: 1px solid var(--divider-accent);
  transition: background 0.3s ease;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.edu-cell:nth-child(even) { /* Actually odd in index logic, but grid logic varies */
  border-right: none;
}

.edu-cell:hover {
  background: var(--bg-secondary);
}

/* Typography */
.edu-year {
  font-size: 1.5rem;
  font-family: var(--font-mono);
  font-weight: 700;
  color: var(--accent-secondary); /* UPS Gold in Stack/Accent */
  margin-bottom: 2rem;
}

.degree {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.1;
  color: var(--text-primary);
  margin: 0 0 1rem 0;
}

.college {
  font-size: 1.25rem;
  color: var(--text-secondary);
  font-weight: 500;
  margin-bottom: 2rem;
}

.meta-info {
  border-top: 1px solid var(--divider-light);
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.spec {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.highlight {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Corner Accents for visual flair */
.corner-accents span {
  position: absolute;
  width: 10px;
  height: 10px;
  border: 2px solid var(--text-primary);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.corner-accents span:first-child { top: 1.5rem; right: 1.5rem; border-left: none; border-bottom: none; }
.corner-accents span:last-child { bottom: 1.5rem; left: 1.5rem; border-right: none; border-top: none; }

.edu-cell:hover .corner-accents span {
  opacity: 1;
}

/* Dark Mode Overrides */
:global(.dark-mode) .grid-layout {
  border-color: rgba(255,255,255,0.2);
}

:global(.dark-mode) .edu-cell {
  border-color: rgba(255,255,255,0.1);
}

:global(.dark-mode) .edu-cell:hover {
  background: rgba(255,255,255,0.03);
}

@media (max-width: 768px) {
  .grid-layout {
    grid-template-columns: 1fr;
  }
  
  .edu-cell {
    border-right: none;
    border-bottom: 1px solid var(--divider-accent);
    padding: 2rem;
    min-height: auto;
  }
  
  .grid-header {
    flex-direction: column;
    padding: 2rem 0;
    margin: 0 2rem;
  }
}
</style>
