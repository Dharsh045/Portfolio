<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const container = ref(null)

onMounted(() => {
  // Staggered Drop-in Animation
  // Start off-screen (top)
  const tagElements = document.querySelectorAll('.floating-tag')
  
  gsap.fromTo(tagElements, 
    { 
      y: -100, 
      opacity: 0 
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'bounce.out',
      stagger: 0.1, // Drop in one by one
      scrollTrigger: {
        trigger: '.about-me-section',
        start: 'top 60%',
        toggleActions: 'play none none reverse'
      },
      onComplete: () => {
        // Optional: Gentle hover after drop-in
        tagElements.forEach((tag) => {
           gsap.to(tag, {
             y: '+=5',
             duration: 2,
             yoyo: true,
             repeat: -1,
             ease: 'sine.inOut',
             delay: Math.random() // Randomize hover start
           })
        })
      }
    }
  )
})
</script>

<template>
  <section id="about" class="about-me-section" ref="container">
    <div class="header-overlay">
      <h1 class="big-text">ABOUT<br>ME</h1>
    </div>
    
    <div class="content-wrapper">
      <div class="bio-container">
        <p class="bio-text">
          I am a Computer Science student passionate about building technology that solves real-world problems. My interests lie at the intersection of <span class="highlight">full-stack development</span>, <span class="highlight">artificial intelligence</span>, and <span class="highlight">system design</span>. I enjoy transforming complex ideas into structured, user-focused solutions that are both technically sound and impactful.
        </p>
        <p class="bio-text">
          I have worked on projects ranging from intelligent AI-driven systems and research-based algorithmic models to scalable web platforms and embedded solutions. Alongside development, I actively contribute to technical communities and lead student initiatives that encourage innovation and collaboration.
        </p>
        <p class="bio-text">
          I aim to design and build systems that are purposeful, efficient, and capable of making a meaningful difference.
        </p>
      </div>
      
      </div>

  </section>
</template>

<style scoped>
.about-me-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 4rem 2rem;
}

.header-overlay {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  opacity: 0.1;
  pointer-events: none;
}

.big-text {
  font-size: 18vw;
  line-height: 1;
  font-weight: 1000;
  text-align: center;
  color: white;
  margin: 0;
}

.content-wrapper {
  position: relative;
  z-index: 10;
  max-width: 800px;
  text-align: center;
}

/* Horizontal Layout for Bio */
.bio-container {
  max-width: 100%;
  width: 95vw; /* Almost full width */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.8rem; /* Tighter gap between paragraphs */
}

.bio-text {
  font-size: clamp(1rem, 1.4vw, 1.3rem);
  font-weight: 500;
  color: white; 
  line-height: 1.6; /* Slightly tighter leading */
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center; 
  width: 100%;
}

.highlight {
  font-weight: 700;
}

.tags-cloud {
  position: relative;
  height: 300px;
  width: 100%;
}

.floating-tag {
  position: absolute;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  white-space: nowrap;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

/* Specific positions based on reference roughly */
.tag-0 { top: 60%; left: 10%; transform: rotate(-10deg); background: rgba(255, 255, 255, 0.15); } /* Info Arch */
.tag-1 { top: 20%; right: 15%; transform: rotate(15deg); background: #ff9a9e; border: none; } /* User Research */
.tag-2 { bottom: 10%; left: 25%; background: #6a11cb; border: none; } /* Wireframing */
.tag-3 { bottom: 5%; left: 50%; background: white; color: #333; } /* Prototyping */
.tag-4 { top: 70%; right: 25%; border-radius: 50%; width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; text-align: center; background: white; color: black; } /* Visuals */
.tag-5 { top: 30%; right: 5%; background: #2575fc; border: none; } /* User Flow */
.tag-6 { bottom: 20%; right: 5%; background: #fca5f1; border: none; } /* Empathy */
.tag-7 { bottom: -10%; left: 5%; } /* Comm */
.tag-8 { bottom: -15%; left: 40%; background: #fbc2eb; border: none; color: #333; } /* Critical */
.tag-9 { top: 90%; right: 15%; background: #43e97b; border: none; color: #333; } /* Business */

@media (max-width: 768px) {
  .tags-cloud {
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  .floating-tag {
    position: relative;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;
    transform: none !important;
  }
  .big-text { font-size: 20vw; }
}
</style>
