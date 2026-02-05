<script setup lang="ts">
import photographyImg from '../../assets/images/extra/photography.jpeg'
import danceImg from '../../assets/images/extra/dance.jpeg'
import musicImg from '../../assets/images/extra/music.jpeg'
import volunteeringImg from '../../assets/images/extra/volunteering.jpeg'

const extras = [
  {
    title: 'Photography',
    size: 'wide',
    image: photographyImg,
    style: { backgroundPosition: 'center', backgroundSize: 'cover' },
    annotation: "Enthusiastic photographer with a keen eye for visual aesthetics.",
    arrowType: 'curved-down-right', // arrow points down-right to card
    pos: 'top-left'
  },
  {
    title: 'Dance',
    size: 'narrow',
    image: danceImg,
    annotation: "Awarded multiple distinctions from Annamalai University, including First Class with Distinction in Bharatanatyam.",
    arrowType: 'curved-down-left',
    pos: 'top-right'
  },
  {
    title: 'Music',
    size: 'narrow',
    image: musicImg,
    annotation: "Love it!",
    arrowType: 'curved-up-left', // Swapped from right
    pos: 'bottom-left'
  },
  {
    title: 'Volunteering',
    size: 'wide',
    image: volunteeringImg,
    annotation: "Active NSS volunteer for the past 3 years, contributing to community service.",
    arrowType: 'curved-up-right', // Swapped from left
    pos: 'bottom-right'
  }
]
</script>

<template>
  <section id="extracurricular" class="extra-section">
    <div class="content-wrapper">
      <div class="header">
        <h2 class="section-title">Beyond Work</h2>
        <p class="section-sub">Passions & Pursuits</p>
      </div>

      <div class="bento-grid">
        <div
          v-for="item in extras"
          :key="item.title"
          class="card-wrapper"
          :class="`wrapper-${item.size}`"
        >
          <!-- The Actual Card -->
          <div 
            class="bento-card"
            :style="{ backgroundImage: `url(${item.image})`, ...item.style }"
          >
            <div class="overlay">
              <h3 class="card-title">{{ item.title }}</h3>
            </div>
          </div>

          <!-- Creative Annotation (Outside Card) -->
          <div class="annotation" :class="`anno-${item.pos}`">
            <span class="handwritten-text">{{ item.annotation }}</span>
            <svg v-if="item.arrowType === 'curved-down-right'" class="arrow-svg" viewBox="0 0 100 100" width="50" height="50">
              <path d="M10,10 Q50,10 50,50" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrowhead)" />
            </svg>
            <svg v-if="item.arrowType === 'curved-down-left'" class="arrow-svg flip-x" viewBox="0 0 100 100" width="50" height="50">
               <path d="M90,10 Q50,10 50,50" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrowhead)" />
            </svg>
             <svg v-if="item.arrowType === 'curved-up-right'" class="arrow-svg" viewBox="0 0 100 100" width="50" height="50">
               <path d="M10,90 Q50,90 50,50" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrowhead)" />
            </svg>
             <svg v-if="item.arrowType === 'curved-up-left'" class="arrow-svg flip-x" viewBox="0 0 100 100" width="50" height="50">
               <path d="M90,90 Q50,90 50,50" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrowhead)" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Arrow Marker Def -->
      <svg style="position: absolute; width: 0; height: 0; overflow: hidden;">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
          </marker>
        </defs>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.extra-section {
  padding: 8rem 0;
  background: transparent;
  overflow: visible; /* Allow annotations to spill */
}

.content-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4rem; /* Extra padding for side text */
  position: relative;
}

.header {
  margin-bottom: 5rem;
  text-align: center;
}

.section-title {
  font-size: 3rem;
  font-weight: 900;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.section-sub {
  font-size: 1.2rem;
  color: var(--text-secondary);
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem; /* More gap for arrows */
}

/* Wrapper handles grid placement */
.card-wrapper {
  position: relative;
  /* overflow: visible for annotation */
}
.wrapper-wide { grid-column: span 2; }
.wrapper-narrow { grid-column: span 1; }

.bento-card {
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  height: 320px;
  cursor: pointer;
  width: 100%;
  transition: all 0.4s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.bento-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease;
}

.bento-card:hover .overlay {
  background: rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  text-shadow: 0 4px 12px rgba(0,0,0,0.4);
}

/* Annotations */
.annotation {
  position: absolute;
  width: 200px;
  pointer-events: none;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(255, 255, 255); /* Light mode default */
}

/* Dark Mode Override */
:global(html.dark-mode) .annotation {
  color: white !important;
}

.handwritten-text {
  font-family: 'Brush Script MT', cursive; /* Creative font */
  font-size: 1.3rem;
  line-height: 1.2;
  /* Remove shadow for cleaner look or adjust if needed */
  /* text-shadow: 0 2px 4px rgba(0,0,0,0.5); */ 
  margin-bottom: 5px;
  text-align: center;
}

.arrow-svg {
  filter: drop-shadow(0 2px 2px rgb(255, 255, 255));
}

/* Positions */
.anno-top-left {
  bottom: 100%;
  left: 0;
  transform: translate(-50px, 20px) rotate(-10deg);
}

.anno-top-right {
  bottom: 100%;
  right: -50px;
  transform: translate(20px, 20px) rotate(5deg);
}

.anno-bottom-left {
  top: 100%;
  left: -80px;
  transform: translate(0, -20px) rotate(-5deg);
}

.anno-bottom-right {
  top: 100%;
  right: 0;
  transform: translate(50px, -20px) rotate(5deg);
}

@media (max-width: 1024px) {
  .annotation { display: none; } /* Hide complex annotations on mobile/tablet for cleanliness */
  .content-wrapper { padding: 0 2rem; }
  .bento-grid { grid-template-columns: 1fr; }
  .wrapper-wide, .wrapper-narrow { grid-column: span 1; }
}
</style>
