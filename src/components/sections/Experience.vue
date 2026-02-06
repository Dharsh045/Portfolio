<script setup lang="ts">
/**
 * Experience Section Component
 *
 * Displays a professional timeline of work experience using GSAP animations.
 */
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    role: 'Project Intern',
    company: 'Infosys Springboard',
    period: '2024', // Inferring year or leaving generic
    desc: 'Contributed to an advanced research framework autonomously generating structured outputs using multi-agent workflows and LLMs. Focused on scalable AI-driven automation and retrieval pipelines.',
    tags: ['Multi-Agent AI', 'LLMs', 'Python', 'Research']
  },
  {
    role: 'Inplant Trainee',
    company: 'Ashok Leyland, Hosur',
    period: '2023', // Inferring year
    desc: 'Gained exposure to enterprise network systems and production software tools. Analyzed workflows for system efficiency and observed real-world integration of engineering processes.',
    tags: ['Enterprise Systems', 'Network Analysis', 'Process Optimization']
  }
]

onMounted(() => {
  const cards = document.querySelectorAll('.small-card')
  
  cards.forEach((card, index) => {
    const isEven = index % 2 === 0
    const xStart = isEven ? -100 : 100
    
    gsap.fromTo(card,
      { x: xStart, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%', // Trigger when top of card hits 80% viewport height
          toggleActions: 'play none none reverse'
        }
      }
    )
  })
})
</script>

<template>
  <section id="experience" class="experience-section">
    <div class="container">
      <header class="section-header">
        <h2 class="title">Experience</h2>
      </header>
      
      <div class="cards-timeline">
        <div 
          v-for="(exp, index) in experiences" 
          :key="index"
          class="small-card"
          :class="{ 'align-right': index % 2 !== 0 }"
        >
          <div class="card-inner">
            <span class="period">{{ exp.period }}</span>
            <h3 class="role">{{ exp.role }}</h3>
            <div class="company">{{ exp.company }}</div>
            <p class="description">{{ exp.desc }}</p>
            <div class="tags">
              <span v-for="tag in exp.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  padding: 6rem 0;

  /* Background is handled by body gradient transparency */
}

.container {
  max-width: 1000px; /* Wider container for better alignment */
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  margin-bottom: 5rem;
  text-align: center;
}

.title {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: -1px;
}

.cards-timeline {
  display: flex;
  flex-direction: column;
  gap: 4rem; /* More space between cards */
  position: relative;
}

.cards-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;

  /* NEW clean premium line */
  background: rgba(255, 255, 255, 0.3);
}

.small-card {
  width: 45%;
  position: relative;
}

/* Left aligned items (default) */
.small-card {
  align-self: flex-start;
  text-align: right;
  padding-right: 2rem;
}

.small-card .card-inner {
    align-items: flex-end;
}

/* Right aligned items */
.small-card.align-right {
  align-self: flex-end;
  text-align: left;
  padding-right: 0;
  padding-left: 2rem;
}

.small-card.align-right .card-inner {
    align-items: flex-start;
}

.card-inner::before {
  content: "";
  position: absolute;
  left: -3px;
  top: 0;
  bottom: 0;
  width: 60px;

  background: linear-gradient(
    to right,
    rgba(255,255,255,0.18),
    rgba(255,255,255,0.08),
    transparent
  );

  pointer-events: none;
}

.small-card.align-right .card-inner::before {
  left: auto;
  right: -3px;

  background: linear-gradient(
    to left,
    rgba(255,255,255,0.18),
    rgba(255,255,255,0.08),
    transparent
  );
}

/* Dot on timeline */
.small-card::after {
  content: '';
  position: absolute;
  top: 2rem; /* Adjusted for card padding */
  width: 16px;
  height: 16px;
  background: var(--text-primary);
  border-radius: 50%;
  z-index: 2;
  right: -2.6rem; /* Calculated visually based on container */
  box-shadow: 0 0 10px rgba(255,255,255,0.5);
}


/* Let's simplify timeline alignment */
/* Timeline center line is at Left: 50% of .cards-timeline */
/* Card width 45% */
/* Left card (default): right edge acts as timeline anchor */
/* Right card: left edge acts as timeline anchor */

/* .small-card::after {
  top: 20px;
  right: -3rem;
  right: -13%;
} */

.small-card.align-right::after {
  right: auto;
  left: -2.6rem; 
}

.card-inner {
  display: flex;
  flex-direction: column;
  /* Half transparent, minimal */
  background: rgba(255, 255, 255, 0.05); 
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  
  /* One line on the side */
  border: none;
  border-left: 3px solid;
  border-image: linear-gradient(to bottom, #d4a5e3, #a5c0ee) 1; /* Soft purple-blue gradient line */

  /* No boxy borders */
  border-radius: 0 10px 10px 0; /* Slight rounding on right only */
  
  padding: 1.5rem 2rem; 
  box-shadow: none;
  transition: transform 0.3s ease, background 0.3s ease;
}

.small-card.align-right .card-inner {
  border-left: none;
  border-right: 3px solid;
  border-image: linear-gradient(to bottom, #d4a5e3, #a5c0ee) 1;
  border-radius: 10px 0 0 10px;
}

.small-card:hover .card-inner {
  transform: translateX(5px); 
  background: rgba(255, 255, 255, 0.1); /* Slightly more visible on hover */
}

.small-card.align-right:hover .card-inner {
  transform: translateX(-5px); 
}

.role {
  font-size: 1.5rem; /* Reduced back */
  font-weight: 700;
  color: var(--text-primary);
  margin: 0.3rem 0;
  line-height: 1.2;
}

.company {
  font-size: 1rem; /* Reduced back */
  color: var(--text-secondary);
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.period {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-tertiary);
  display: block;
  margin-bottom: 0.2rem;
}

.description {
  font-size: 0.95rem; /* Reduced back */
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: inherit; 
}

.tag {
  font-size: 0.8rem; /* Reduced back */
  color: var(--text-primary);
  border: 1px solid rgba(255,255,255,0.2);
  background: transparent;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-weight: 500;
}

/* Dark Mode (UPS) overrides */
:global(.dark-mode) .cards-timeline::before {
  background: var(--ups-gold);
}

:global(.dark-mode) .small-card::after {
  background: var(--ups-gold);
}

:global(.dark-mode) .title {
  color: var(--ups-gold);
}

:global(.dark-mode) .role {
  color: #fff;
}

:global(.dark-mode) .card-inner {
  border-image: none;
  border-left: none;
  border-right: none;
  /* Allow dark.css to set the simple 1px border if needed, or just be borderless */
}

@media (max-width: 768px) {
  .cards-timeline::before {
    left: 20px;
  }
  
  .small-card, .small-card.align-right {
    width: 100%;
    align-self: flex-start;
    text-align: left;
    padding-left: 3rem;
    padding-right: 0;
  }
  
  .small-card::after, .small-card.align-right::after {
    left: 14px;
    right: auto;
  }
  
  .card-inner {
    align-items: flex-start !important;
  }
  
  .tags {
    justify-content: flex-start;
  }
}
</style>
