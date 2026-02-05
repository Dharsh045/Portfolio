<script setup lang="ts">
interface Props {
  gradient?: 'lavender' | 'mint' | 'peach' | 'none'
  hoverable?: boolean
}

withDefaults(defineProps<Props>(), {
  gradient: 'lavender',
  hoverable: true,
})
</script>

<template>
  <div
    :class="[
      'card',
      `card-gradient-${gradient}`,
      { 'card-hoverable': hoverable },
    ]"
  >
    <slot />
  </div>
</template>

<style scoped>
.card {
  background-color: var(--bg-secondary);
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Gradient Borders */
.card-gradient-lavender {
  border-image: linear-gradient(135deg, #e8d5f2, #b8e1f5) 1;
  border: 2px solid;
  border-image-slice: 1;
}

.card-gradient-mint {
  border-image: linear-gradient(135deg, #c8f0dc, #a8e6d8) 1;
  border: 2px solid;
  border-image-slice: 1;
}

.card-gradient-peach {
  border-image: linear-gradient(135deg, #ffd9c8, #f5d0d0) 1;
  border: 2px solid;
  border-image-slice: 1;
}

.card-gradient-none {
  border: 1px solid rgba(107, 114, 128, 0.1);
}

/* Hover Effects */
.card-hoverable:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.card-gradient-lavender:hover {
  box-shadow: 0 0 20px rgba(216, 180, 254, 0.3);
}

.card-gradient-mint:hover {
  box-shadow: 0 0 20px rgba(167, 243, 208, 0.3);
}

.card-gradient-peach:hover {
  box-shadow: 0 0 20px rgba(254, 215, 170, 0.3);
}
</style>
