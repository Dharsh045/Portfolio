<script setup lang="ts">
const publications = [
  {
    title: 'GlowTile+ — AI-Integrated Photoluminescent Road Markings',
    venue: 'National Conference on Innovations in Sustainable Materials',
    year: '2025',
    link: '#',
    desc: 'Research focused on integrating intelligent systems with sustainable materials to improve road safety and visibility.'
  }
]
</script>

<template>
  <section id="publications" class="publications-section">
    <div class="container">
      <header class="section-header">
        <h2 class="title">Publications</h2>
      </header>

      <div class="pub-list">
        <a 
          v-for="(pub, index) in publications" 
          :key="index" 
          :href="pub.link"
          class="pub-item"
        >
          <span class="pub-year">{{ pub.year }}</span>
          <div class="pub-details">
            <h3 class="pub-title">{{ pub.title }}</h3>
            <span class="pub-venue">{{ pub.venue }}</span>
            <p v-if="pub.desc" class="pub-desc">{{ pub.desc }}</p>
          </div>
          <span class="pub-arrow">→</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.publications-section {
  padding: 8rem 0;
  background: transparent;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  margin-bottom: 4rem;
  text-align: center;
}

.title {
  font-size: 6rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0;
  letter-spacing: -1px;
}

.pub-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* Spacing between separated items */
}

.pub-item {
  display: grid;
  grid-template-columns: 80px 1fr 40px;
  gap: 2rem;
  align-items: start; /* Align top for description flow */
  padding: 2rem;
  
  /* Initial State: Clean & Minimal */
  border-radius: 12px;
  background: rgba(255,255,255,0.02);
  border: 1px solid transparent;
  text-decoration: none;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

/* Holographic / Splash Gradient Effect on Hover */
.pub-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent 20%,
    rgba(255, 182, 193, 0.1) 40%, /* Soft Pink Splash */
    rgba(173, 216, 230, 0.1) 60%, /* Soft Blue Splash */
    transparent 80%
  );
  background-size: 200% 200%;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.pub-item:hover {
  background: rgba(255,255,255,0.05); /* Slight light up */
  border-color: rgba(255,255,255,0.2);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
}

.pub-item:hover::before {
  opacity: 1;
  animation: gradientSplash 2s linear infinite; /* Moving splash */
}

@keyframes gradientSplash {
  0% { background-position: 100% 0%; }
  100% { background-position: 0% 100%; }
}

.pub-year {
  font-family: var(--font-mono);
  font-size: 1rem;
  color: var(--text-tertiary);
  margin-top: 0.3rem; /* Align with title */
}

.pub-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.pub-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  transition: color 0.3s ease;
}

.pub-venue {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-style: italic;
  font-family: var(--font-serif);
}

.pub-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
  line-height: 1.5;
  opacity: 0.8;
}

.pub-arrow {
  font-size: 1.5rem;
  color: var(--text-tertiary);
  transition: transform 0.3s ease, color 0.3s ease;
  margin-top: 0.2rem;
}

.pub-item:hover .pub-title {
  color: #eeeeee; /* Purple highlight on hover */
}

.pub-item:hover .pub-arrow {
  transform: translateX(5px) rotate(-45deg);
  color: #ffffff;
}

@media (max-width: 768px) {
  .pub-item {
    grid-template-columns: 1fr auto;
    grid-template-areas: 
      "details arrow"
      "year year";
    gap: 1rem;
    padding: 1.5rem;
  }
  
  .pub-details { grid-area: details; }
  .pub-arrow { grid-area: arrow; }
  .pub-year { grid-area: year; }
}
</style>
