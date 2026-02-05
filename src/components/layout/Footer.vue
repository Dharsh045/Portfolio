<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <p class="footer-text">
        © {{ currentYear }} Your Name. Designed & built with care.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 4rem 2rem 2rem;
  background-color: transparent;
  color: var(--text-tertiary);
  border-top: 1px solid rgba(0,0,0,0.05);
  margin-top: var(--space-3xl);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-text {
  color: var(--text-tertiary);
  font-size: 0.95rem;
}
</style>
