<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  duration?: number
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

withDefaults(defineProps<Props>(), {
  duration: 600,
  delay: 0,
  direction: 'up',
})

const isVisible = ref(false)
const elementRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!elementRef.value) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry && entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  )

  observer.observe(elementRef.value)
})
</script>

<template>
  <div
    ref="elementRef"
    :class="['fade-in-container', { visible: isVisible }]"
    :style="{
      '--fade-duration': `${duration}ms`,
      '--fade-delay': `${delay}ms`,
      '--fade-direction': direction,
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.fade-in-container {
  opacity: 0;
  animation: fadeInAnimation var(--fade-duration) ease-out var(--fade-delay) forwards;
}

.fade-in-container.visible {
  animation: fadeInAnimation var(--fade-duration) ease-out var(--fade-delay) forwards;
}

@keyframes fadeInAnimation {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Direction variants */
.fade-in-container[style*='--fade-direction: up'] {
  animation-name: fadeInUp;
}

.fade-in-container[style*='--fade-direction: down'] {
  animation-name: fadeInDown;
}

.fade-in-container[style*='--fade-direction: left'] {
  animation-name: fadeInLeft;
}

.fade-in-container[style*='--fade-direction: right'] {
  animation-name: fadeInRight;
}

.fade-in-container[style*='--fade-direction: none'] {
  animation-name: fadeInOnly;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInOnly {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
