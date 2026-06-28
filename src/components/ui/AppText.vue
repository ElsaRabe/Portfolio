<script setup lang="ts">
defineProps<{
  variant?: 'muted' | 'body' | 'code'
}>()
</script>

<template>
  <p 
    :class="{
      'text-text-muted text-sm md:text-base leading-relaxed': variant === 'muted',
      'font-mono text-xs tracking-widest text-accent/80': variant === 'code',
      'text-text-main text-base leading-relaxed': !variant || variant === 'body'
    }"
  >
    <slot />
  </p>
</template>