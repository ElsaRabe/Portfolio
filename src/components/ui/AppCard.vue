<script setup lang="ts">
defineProps<{
  hoverable?: boolean
}>()
</script>

<template>
  <div 
    class="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl p-6 transition-all duration-300"
    :class="{ 'hover:bg-white/[0.05] hover:border-amber-400/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-400/5': hoverable }"
  >
    <slot />
  </div>
</template>