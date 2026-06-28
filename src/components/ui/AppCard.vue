<script setup lang="ts">
defineProps<{
  hoverable?: boolean
}>()
</script>

<template>
  <div 
    class="bg-surface border border-border-custom rounded-xl p-6 transition-all duration-300"
    :class="{ 'hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5': hoverable }"
  >
    <slot />
  </div>
</template>