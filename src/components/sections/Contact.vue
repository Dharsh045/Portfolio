<script setup lang="ts">
const email = 'dharshni045@gmail.com'
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="contact-line headline">HAVE A COOL IDEA?</h2>
      
      <a :href="`mailto:${email}`" class="cta-link contact-line">
        LET'S WORK TOGETHER
        <span class="arrow">→</span>
      </a>

      <p class="description contact-line">
        I am always open to meaningful collaborations, research opportunities, and impactful technical work.
        Feel free to reach out for project discussions or opportunities to build something valuable together.
      </p>

      <div class="contact-details contact-line">
        <a :href="`mailto:${email}`" class="email-link">{{ email }}</a>
      </div>

      <div class="footer-links contact-line">
        <a href="https://linkedin.com" target="_blank" class="social-link">LinkedIn</a>
        <a href="https://github.com/Dharsh045" target="_blank" class="social-link">GitHub</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 10rem 0 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background: transparent;
  overflow: hidden;
  position: relative;
  z-index: 10; /* Ensure visibility */
}

.container {
  width: 100%;
  max-width: 1000px;
  padding: 0 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.headline {
  /* VERY BIG */
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  color: #ffffff; /* Explicitly white */
  margin: 0;
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: -2px;
  opacity: 1; /* Fully visible */
}

.cta-link {
  /* SUPER BIG CTA */
  font-size: clamp(4rem, 12vw, 9rem);
  font-weight: 900;
  line-height: 0.9;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  margin-bottom: 3rem;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease, opacity 0.3s ease, letter-spacing 0.3s ease;
  text-shadow: 0 0 20px rgba(255,255,255,0.3); /* Glow */
}

.cta-link:hover {
  /* No hover effect requested */
  transform: none;
  letter-spacing: normal;
  text-shadow: 0 0 20px rgba(255,255,255,0.3); /* Keep static glow if desired, or remove. I'll keep the base glow from the main class if any, or just reset/remove this block entirely. Actually, better to just remove the changes. */
  text-shadow: none; /* User didn't ask to remove glow, but "remove hover" usually means "don't change on hover". The base state didn't have heavy shadow. Let's just remove the hover block content or set to initial values. */
/* Actually, simply removing the rules or setting them to effectively do nothing is safest. */
  opacity: 1;
}

.arrow {
  font-size: 0.5em; 
  transform: rotate(-45deg);
  transition: transform 0.3s ease;
  color: #ffffff;
}

.cta-link:hover .arrow {
  /* Keep arrow static or maybe just slight color change? user said "remove hover". So I will remove the movement. */
  transform: rotate(-45deg); 
}

.description {
  font-size: 1.2rem;
  color: #ffffff; /* White */
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.email-link {
  font-size: 1.5rem;
  color: #ffffff;
  text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,0.5);
  padding-bottom: 5px;
  transition: border-color 0.3s ease;
}

.email-link:hover {
  border-color: #ffffff;
}

.footer-links {
  margin-top: 1rem;
  display: flex;
  gap: 3rem;
}

.social-link {
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: opacity 0.3s ease;
  position: relative;
  opacity: 0.8;
}

.social-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0%;
  height: 1px;
  background: #ffffff;
  transition: width 0.3s ease;
}

.social-link:hover {
  opacity: 1;
}

.social-link:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .headline { font-size: 3rem; }
  .cta-link { font-size: 3.5rem; flex-direction: column; gap: 0; }
  .arrow { transform: rotate(90deg); margin-top: 1rem; }
  .cta-link:hover .arrow { transform: rotate(90deg) translateY(10px); }
  
  .description { font-size: 1rem; padding: 0 1rem; opacity: 1; }
}
</style>
