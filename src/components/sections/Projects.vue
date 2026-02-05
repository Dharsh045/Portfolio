<script setup lang="ts">
import { onMounted } from 'vue' // removed ref
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'NSS Activity Portal',
    category: 'Full Stack | 2025',
    description: 'Built a full-stack digital platform automating QR-based attendance and out-pass management for over 300 students across 30+ events. The system streamlined administrative workflows, reducing data retrieval time by 40% and manual effort by 50% through efficient backend design and a user-friendly interface. Centralized event management and attendance tracking improved coordination and reporting.',
    tech: ['React', 'Node.js', 'Express.js', 'MySQL'],
    link: '#'
  },
  {
    title: 'Novexa',
    category: 'AI / ML | 2025',
    description: 'Developed an AI-driven platform designed to identify and classify misleading or false information using data-driven analysis and machine learning techniques. Focused on building a scalable and reliable system for digital information validation and credibility assessment. Implemented automated detection pipelines and structured verification workflows.',
    tech: ['Python', 'Machine Learning', 'NLP', 'Web'],
    link: '#'
  },
  {
    title: 'Orchard Intelligence',
    category: 'Computer Vision | 2025',
    description: 'Built a computer vision-based classification system capable of distinguishing authentic and defective apples using machine learning techniques. Focused on applying intelligent image processing for quality inspection and agricultural analysis. Implemented dataset preprocessing, model evaluation, and classification logic for real-world usage scenarios.',
    tech: ['Python', 'Computer Vision', 'ML'],
    link: '#'
  },
  {
    title: 'Rāga Evolution',
    category: 'Genetic Algorithms | 2025',
    description: 'Designed a genetic algorithm framework to generate musically valid and novel Carnatic rāgas by encoding swara sequences as chromosomes. Implemented constrained selection, crossover, and mutation operations guided by rāga grammar rules. Evaluated generated rāgas using fitness functions balancing musical novelty and theoretical correctness.',
    tech: ['Python', 'Genetic Algorithms', 'Music Theory'],
    link: '#'
  },
  {
    title: 'Distributed Locker',
    category: 'Embedded Systems | 2025',
    description: 'Designed a distributed embedded locker system using STM32 microcontrollers with synchronized nodes. Implemented inter-node communication and concurrency handling to maintain consistent locker states. Integrated low-power CPU sleep and wake mechanisms to optimize energy efficiency.',
    tech: ['STM32', 'Embedded C', 'STM32CubeIDE'],
    link: '#'
  },
  {
    title: 'APIFlow',
    category: 'Dev Tool | 2025',
    description: 'Developed a structured platform for testing and managing API workflows within a unified development interface. Enabled sending requests, inspecting responses, and organizing endpoint testing efficiently. Focused on creating a clean and developer-friendly environment for backend testing and debugging.',
    tech: ['Full Stack', 'API Architecture'],
    link: '#'
  },
  {
    title: 'Enchanted Getaway',
    category: 'Web Platform | 2024',
    description: 'Developed a web platform showcasing unexplored and culturally rich travel destinations across India. Focused on intuitive navigation, structured content presentation, and user-friendly design to enhance travel discovery.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: '#'
  },
  {
    title: 'CheckMate AI',
    category: 'Algorithms | 2025',
    description: 'Built an intelligent chess engine implementing Minimax and Alpha-Beta pruning algorithms to compute optimal moves. Focused on algorithmic efficiency, board evaluation logic, and strategic decision-making.',
    tech: ['Python', 'DSA'],
    link: '#'
  },
  {
    title: 'UAV Portal',
    category: 'Full Stack | 2025',
    description: 'Developed a centralized portal for monitoring and managing unmanned aerial vehicle operations and data. Focused on structured data visualization, operational tracking, and system organization for efficient UAV management.',
    tech: ['Full Stack', 'Web'],
    link: '#'
  }
]

onMounted(() => {
  const sections = gsap.utils.toArray('.project-card')
  const track = document.querySelector('.projects-track') as HTMLElement
  
  if (!track) return

  // Horizontal Scroll
  const getScrollAmount = () => {
    let amount = track.scrollWidth - window.innerWidth
    return -(amount > 0 ? amount : 0)
  }

  const scrollTween = gsap.to(track, {
    x: getScrollAmount,
    ease: "none",
    scrollTrigger: {
      trigger: ".projects-section",
      start: "top top", 
      end: "+=3000", // Adjusted for natural feel
      pin: true,
      pinSpacing: true,
      scrub: 1, 
      invalidateOnRefresh: true,
      anticipatePin: 1
    }
  })
  
  // Scale Effect
  sections.forEach((card: any) => {
    gsap.set(card, { scale: 0.9, opacity: 0.7 })
    
    gsap.to(card, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card as Element,
        containerAnimation: scrollTween,
        start: "center right", 
        end: "center center",
        scrub: 1, 
      }
    })
    
    gsap.to(card, {
      scale: 0.9,
      opacity: 0.7,
      duration: 1,
      scrollTrigger: {
        trigger: card as Element,
        containerAnimation: scrollTween,
        start: "center center",
        end: "center left",
        scrub: 1 
      }
    })
  })
  
  ScrollTrigger.refresh()
})
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="header">
      <h2 class="section-title">Projects</h2>
      <p class="section-sub">Technical innovations and system designs.</p>
    </div>

    <div class="projects-track-wrapper">
      <div class="projects-track">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="project-card"
        >
          <div class="card-inner">
            <span class="category">{{ project.category }}</span>
            <h3 class="title">{{ project.title }}</h3>
            <p class="description">{{ project.description }}</p>
            <div class="tech-stack">
              <span v-for="t in project.tech" :key="t" class="tech-tag">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 2vh 0; /* Reduced padding */
  margin-bottom: 20vh; 
  background: transparent;
  overflow: hidden;
  height: 100vh; /* Fixed height for pin */
  display: flex;
  flex-direction: column; 
  justify-content: flex-start; /* Align top to avoid cutting off if screen small */
  position: relative;
  z-index: 10;
}

.header {
  position: relative; 
  width: 100%;
  text-align: center;
  z-index: 10;
  margin-bottom: 2vh; /* Use vh for spacing */
  margin-top: 5vh;    /* Push down slightly */
  flex-shrink: 0;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: var(--text-primary);
}

.section-sub {
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.projects-track-wrapper {
  overflow: hidden;
  width: 100%;
  height: 100%; /* Fill remaining */
  flex: 1; 
  display: flex;
  align-items: center; 
}

.projects-track {
  display: flex;
  flex-wrap: nowrap;
  gap: 4vw; /* Responsive gap */
  width: max-content; 
  height: 70vh; /* Fixed relative height for track */
  padding: 0 50vw; 
}

.project-card {
  width: 400px; 
  max-width: 80vw; /* Ensure it fits on mobile width */
  height: 65vh; /* Relative height !! Key fix */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.card-inner {
  width: 100%; 
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transform-style: preserve-3d;
  transition: all 0.4s ease;
  overflow: hidden; /* Safety */
}

.card-inner:hover {
  box-shadow: 0 20px 50px rgba(0,0,0,0.1);
}

.category {
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--text-tertiary);
  font-weight: 700;
  font-size: 0.75rem; /* Smaller */
  margin-bottom: 0.5rem;
}

.title {
  font-size: 1.5rem; /* Reduced to fit long titles */
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 0.8rem;
  line-height: 1.1;
}

.description {
  font-size: 1rem; /* Small & dense for full content */
  color: var(--text-secondary);
  line-height: 1.5;
  flex-grow: 1; /* Pushes tech stack down */
  overflow-y: hidden; /* Hide excess if any, but size should fit */
  text-align: justify; /* Clean blocks */
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1rem;
}

.tech-tag {
  background: rgba(255,255,255,0.5);
  padding: 0.3rem 0.7rem;
  border-radius: 50px;
  font-size: 0.7rem; /* Tiny tags */
  color: var(--text-secondary);
  font-weight: 600;
  border: 1px solid rgba(0,0,0,0.05);
}
</style>
