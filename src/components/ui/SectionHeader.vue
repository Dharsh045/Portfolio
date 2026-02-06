<script setup lang="ts">
/**
 * Section Header Component
 *
 * Reusable header with title, subtitle, and gradient accents.
 */
interface Props {
  title: string
  subtitle?: string
  gradient?: 'lavender' | 'mint' | 'peach'
}

withDefaults(defineProps<Props>(), {
  gradient: 'lavender',
})
</script>

<template>
  <div class="section-header">
    <h2 :class="['section-title', `gradient-${gradient}`]">{{ title }}</h2>
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
    <div :class="['header-accent', `accent-${gradient}`]" />
  </div>
</template>

<style scoped>
.section-header {
  position: relative;
  margin-bottom: var(--space-3xl);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-md);
  letter-spacing: -1px;
  line-height: var(--line-height-tight);
}

.gradient-lavender {
  background: var(--gradient-lavender-sky);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-mint {
  background: var(--gradient-mint-teal);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-peach {
  background: var(--gradient-peach-blush);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
  line-height: var(--line-height-normal);
}

.header-accent {
  width: 60px;
  height: 4px;
  border-radius: 2px;
  animation: slideIn 0.6s ease-out;
}

.accent-lavender {
  background: var(--gradient-lavender-sky);
}

.accent-mint {
  background: var(--gradient-mint-teal);
}

.accent-peach {
  background: var(--gradient-peach-blush);
}

@keyframes slideIn {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 60px;
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }
}
</style>
