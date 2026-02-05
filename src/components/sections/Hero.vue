<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  const tl = gsap.timeline()
  
  // Staggered Text Reveal from Sides
  tl.from('.line-2', {
    x: -100, // Name from left
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.2
  })
  .from('.line-3', {
    x: -100, // surname from left too? or maybe right? "form the sides" - let's do surname from left too to keep name together, or maybe slightly staggered. 
    // Actually user said "name in heri section and descrp. should come form the sides". 
    // Let's do Name from Left, Description from Right.
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=0.8')
  .from('.bio-container', {
    x: 100, // Bio from right
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=0.8')
})
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="content-wrapper">
      
      <!-- Massive Mixed Typography Headline -->
      <h1 class="hero-headline">
        <div class="line-2">
          <span class="headline-part sans">Dharshni</span>
        </div>
        <div class="line-3">
          <span class="headline-part serif-italic">prakash</span>
        </div>
      </h1>

      <!-- Bio Block -->
      <div class="bio-container">
        <div class="profile-avatar">
          <span class="initials">DP</span>
        </div>
        <div class="bio-text">
          <p class="bio-intro">
            Hi! I'm <strong>Dharshni Prakash</strong>, an aspiring software engineer,
            transforming complex problems into clean, <span class="bio-highlight">intuitive</span> experiences that just make sense.
          </p>
        </div>
      </div>

      <div class="arrow-indicator">
           Looking for more? ⤵
        </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  /* PUSH DOWN CLEANLY */
  padding-top: 22vh;     /* increase this to push more down */
  padding-left: 5vw;
  padding-right: 2vw;

  background: transparent;
  overflow: hidden;
  position: relative;
}
.content-wrapper {
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align left generally, but headline can be huge */
  position: relative;
}

/* Typography Layout */
.hero-headline {
  margin: 0;
  display: flex;
  flex-direction: column;
  line-height: 0.85; /* Tight stacking */
  margin-bottom: 4rem;
}

.line-1, .line-2, .line-3 {
  /* overflow: hidden;  REMOVED OVERFLOW HIDDEN SO X-TRANSFORM WORKS VISIBLY without clipping */
  display: block;
}

.headline-part {
  display: inline-block;
  text-transform: uppercase;
  color: #333; /* Dark Grey */
}

.sans {
  font-family: var(--font-sans);
  font-weight: 900;
  font-size: clamp(4rem, 15vw, 11rem);
  letter-spacing: -0.04em;
}

.serif-italic {
  font-family: var(--font-display);
  font-weight: 200;          /* thinner */
  font-style: italic;

  font-size: clamp(6rem, 17vw, 10rem);

  text-transform: none;

  /* single elegant colour */
  color: #bfa2d9;            /* soft lavender */
  background: none;

  /* prevent crop */
  line-height: 1.1;
  padding: 0.05em 0.5em;
  overflow: visible;
  display: inline-block;

  /* push to side */
  margin-left: 20rem;

  letter-spacing: -0.5px;
}

/* Bio Block */
.bio-container {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  max-width: 600px;
  margin-left: 1rem;
}

.profile-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.initials {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.5rem;
  color: #555;
}

.bio-text {
  font-family: var(--font-sans);
  font-size: 1.1rem;
  color: #555;
  line-height: 1.5;
}

.bio-text strong {
  color: #000;
  font-weight: 700;
}

.bio-highlight {
  color: #8A2BE2;
  font-weight: 600;
}

.arrow-indicator {
  position: absolute;
  right: 5vw;
  bottom: 0;
  font-family: var(--font-display);
  font-style: italic;
  color: #888;
  font-size: 1.2rem;
  transform: rotate(-5deg);
  
}

@media (max-width: 768px) {
  .hero-headline {
    align-items: center;
  }
  .line-2 {
    margin-left: 0;
  }
  .serif-italic {
    margin-left: 0;
  }
  .bio-container {
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
  }
  .arrow-indicator {
    display: none;
  }
}
</style>
