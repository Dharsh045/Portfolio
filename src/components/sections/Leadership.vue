<script setup lang="ts">
const leaderships = [
  {
    title: 'Anokha 2026',
    role: 'Co-Head, Technical Workshops',
    year: '2025 – Present',
    desc: 'Leading the technical committee for workshops and competitions.',
    link: '#'
  },
  {
    title: 'ACM Student Chapter',
    role: 'Co-Head, PR & Outreach',
    year: '2025 – Present',
    desc: 'Managing public relations and outreach strategies for the chapter.',
    link: '#'
  },
  {
    title: 'Amrita Model UN',
    role: 'Web & Design Team',
    year: '2025 – Present',
    desc: 'Designing and maintaining the digital presence for the Model UN society.',
    link: '#'
  },
  {
    title: 'National Service Scheme',
    role: 'Main Coordinator',
    year: '2023 – Present',
    desc: 'Coordinating large-scale social service initiatives and student volunteers.',
    link: '#'
  },
  {
    title: 'Tensor Club',
    role: 'Web Team Member',
    year: '2025',
    desc: 'Contributing to web development projects and club activities.',
    link: '#'
  },
  {
    title: 'Class Representative',
    role: 'Computer Science Dept.',
    year: '2024 – 2025',
    desc: 'Representing the class and facilitating communication with faculty.',
    link: '#'
  }
]
</script>

<template>
  <section id="leadership" class="leadership-section">
    <div class="container">
      <header class="section-header">
        <h2 class="title">LEADERSHIP & POSITIONS</h2>
        <span class="subtitle">(06)</span>
      </header>

      <ul class="leadership-list">
        <li
          v-for="(item, index) in leaderships"
          :key="index"
          class="list-item"
        >
          <div class="item-content">
            <span class="item-index">0{{ index + 1 }}</span>
            <div class="title-group">
              <h3 class="item-title">{{ item.title }}</h3>
              <span class="item-role">{{ item.role }}</span>
            </div>
            <!-- <p class="item-desc">{{ item.desc }}</p> -->
            <span class="item-year">{{ item.year }}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.leadership-section {
  padding: 8rem 0;
  background: transparent;
  color: var(--text-primary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1.5rem;
  margin-bottom: 3rem;
}

.title {
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
  color: var(--text-secondary);
}

.subtitle {
  font-size: 1rem;
  font-family: var(--font-mono);
  opacity: 0.5;
}

.leadership-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2.5rem 0;
  transition: all 0.4s ease;
  cursor: default;
}

.leadership-list:hover .list-item {
  opacity: 0.4;
}

.leadership-list:hover .list-item:hover {
  opacity: 1;
  transform: translateX(10px);
}

.item-content {
  display: grid;
  grid-template-columns: 80px 1fr auto;
  align-items: center;
  gap: 2rem;
}

.item-index {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  opacity: 0.4;
}

.title-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.item-title {
  font-size: 2.5rem; /* Adjusted size */
  font-weight: 700;
  margin: 0;
  line-height: 1.1;
  color: var(--text-primary);
}

.item-role {
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.item-year {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--text-tertiary);
  white-space: nowrap;
}

@media (max-width: 768px) {
  .item-content {
    grid-template-columns: 1fr;
    gap: 1rem;
    position: relative;
  }
  
  .item-index {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 3rem;
    opacity: 0.05;
    font-weight: 900;
  }
  
  .item-title {
    font-size: 1.8rem;
    z-index: 1;
  }
  
  .item-year {
    order: -1; 
    align-self: flex-start;
    color: var(--text-accent);
  }
}
</style>
