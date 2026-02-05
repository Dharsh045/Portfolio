<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const cursorRef = ref<HTMLElement | null>(null)
const followerRef = ref<HTMLElement | null>(null)

const onMouseMove = (e: MouseEvent) => {
  if (!cursorRef.value || !followerRef.value) return
  
  // Instant movement for small dot
  gsap.to(cursorRef.value, {
    x: e.clientX,
    y: e.clientY,
    duration: 0
  })

  // Smooth lag for larger follower
  gsap.to(followerRef.value, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.15,
    ease: 'power2.out'
  })
}

 const onMouseEnter = () => {
   if (cursorRef.value) cursorRef.value.style.opacity = '1'
   if (followerRef.value) followerRef.value.style.opacity = '1'
 }

 const onMouseLeave = () => {
   if (cursorRef.value) cursorRef.value.style.opacity = '0'
   if (followerRef.value) followerRef.value.style.opacity = '0'
 }

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  document.body.addEventListener('mouseenter', onMouseEnter)
  document.body.addEventListener('mouseleave', onMouseLeave)

  // Add hover effect listeners
  const hoverables = document.querySelectorAll('a, button, .hover-target')
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      followerRef.value?.classList.add('is-hovering')
    })
    el.addEventListener('mouseleave', () => {
      followerRef.value?.classList.remove('is-hovering')
    })
  })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  document.body.removeEventListener('mouseenter', onMouseEnter)
  document.body.removeEventListener('mouseleave', onMouseLeave)
})
</script>

<template>
  <div>
    <div ref="cursorRef" class="custom-cursor"></div>
    <div ref="followerRef" class="cursor-follower"></div>
  </div>
</template>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: var(--text-primary, #000);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
}

.cursor-follower {
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease, background 0.3s ease, opacity 0.3s ease;
}

:global(body.dark-mode) .custom-cursor {
  background: #fff;
}

:global(body.dark-mode) .cursor-follower {
  border-color: rgba(255, 255, 255, 0.2);
}

.cursor-follower.is-hovering {
  width: 60px;
  height: 60px;
  background: rgba(139, 92, 246, 0.1); /* Subtle purple fill */
  border-color: rgba(139, 92, 246, 0.5);
}

/* Hide on mobile */
@media (max-width: 768px) {
  .custom-cursor, .cursor-follower {
    display: none;
  }
}
</style>
