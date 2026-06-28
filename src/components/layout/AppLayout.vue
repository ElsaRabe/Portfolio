<script setup lang="ts">
import AppContainer from '../ui/AppContainer.vue'
</script>

<template>
  <div class="min-h-screen bg-bg-main text-text-main font-sans flex flex-col justify-between selection:bg-accent/20 selection:text-accent">
    <main class="flex-grow flex items-center justify-center py-12">
      <AppContainer>
        <slot />
      </AppContainer>
    </main>

    <footer class="py-6 border-t border-border-custom/30 text-center">
      <span class="font-mono text-[10px] text-text-muted/40 uppercase tracking-widest">
        SYS.LOC // ABIDJAN_CI // © 2026 ELSA
      </span>
    </footer>
  </div>
</template>