<script setup lang="ts">
defineProps<{
  level?: '1' | '2' | '3'
}>()
</script>

<template>
  <component 
    :is="level === '2' ? 'h2' : level === '3' ? 'h3' : 'h1'"
    :class="{
      'text-4xl md:text-6xl font-bold font-display tracking-tight text-text-main': !level || level === '1',
      'text-2xl md:text-3xl font-semibold font-display text-text-main': level === '2',
      'text-xl font-medium font-display text-accent': level === '3'
    }"
  >
    <slot />
  </component>
</template>