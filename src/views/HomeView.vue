<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppLayout from '../components/layout/AppLayout.vue'
import AppCard from '../components/ui/AppCard.vue'
import AppHeading from '../components/ui/AppHeading.vue'
import AppText from '../components/ui/AppText.vue'
import { Database, Code, ArrowRight } from 'lucide-vue-next'

const isLoaded = ref(false)
const progress = ref(0)
const statusText = ref('INITIALIZING PROFILE...')

onMounted(() => {
  // Simulation de la jauge de chargement type console
  const interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += 4
      if (progress.value === 40) statusText.value = 'LOADING WORKSPACES...'
      if (progress.value === 80) statusText.value = 'MOUNTING MODULES...'
    } else {
      clearInterval(interval)
      setTimeout(() => {
        isLoaded.value = true
      }, 400) // Petit délai pour le côté dramatique
    }
  }, 50)
})
</script>

<template>
  <AppLayout>
    <div v-if="!isLoaded" class="max-w-md mx-auto font-mono text-left p-6 border border-border-custom bg-surface rounded-lg shadow-2xl">
      <div class="flex items-center gap-2 mb-4 border-b border-border-custom/50 pb-2">
        <span class="w-3 h-3 rounded-full bg-red-500/50"></span>
        <span class="w-3 h-3 rounded-full bg-yellow-500/50"></span>
        <span class="w-3 h-3 rounded-full bg-green-500/50"></span>
        <span class="text-[10px] text-text-muted/60 ml-2">terminal.sh</span>
      </div>
      <AppText variant="code" class="mb-2">{{ statusText }}</AppText>
      <div class="w-full bg-bg-main h-2 rounded border border-border-custom overflow-hidden mb-2">
        <div class="bg-accent h-full transition-all duration-75" :style="{ width: progress + '%' }"></div>
      </div>
      <div class="text-right text-[11px] text-text-muted font-mono">{{ progress }}%</div>
    </div>

    <div v-else class="transition-all duration-1000 ease-out opacity-100 transform translate-y-0">
      
      <div class="text-center mb-16">
        <AppHeading level="1" class="mb-4 tracking-[0.2em]">ELSA RABE</AppHeading>
        <div class="h-[1px] w-16 bg-accent mx-auto mb-6"></div>
        <div class="flex justify-center gap-3 text-xs font-mono uppercase tracking-widest text-text-muted">
          <span>Data & AI</span>
          <span class="text-accent">•</span>
          <span>Software Development</span>
        </div>
        <AppText variant="muted" class="mt-8 font-mono text-xs uppercase tracking-wider">
          Choose your experience
        </AppText>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        <RouterLink to="/data-ia" class="group">
          <AppCard hoverable class="h-full flex flex-col justify-between min-h-[260px]">
            <div>
              <div class="p-3 rounded-lg bg-bg-main border border-border-custom w-fit mb-6 text-accent group-hover:border-accent/40 transition-colors">
                <Database class="w-6 h-6" />
              </div>
              <AppHeading level="2" class="mb-3 group-hover:text-accent transition-colors">
                Data & IA
              </AppHeading>
              <AppText variant="muted">
                Analyses exploratoires complexes, traitement de données massives et entraînement de modèles intelligents (Computer Vision, YOLO).
              </AppText>
            </div>
            <div class="mt-8 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent/80 group-hover:text-accent">
              <span>Execute Workspace</span>
              <ArrowRight class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </AppCard>
        </RouterLink>

        <RouterLink to="/developpement" class="group">
          <AppCard hoverable class="h-full flex flex-col justify-between min-h-[260px]">
            <div>
              <div class="p-3 rounded-lg bg-bg-main border border-border-custom w-fit mb-6 text-accent group-hover:border-accent/40 transition-colors">
                <Code class="w-6 h-6" />
              </div>
              <AppHeading level="2" class="mb-3 group-hover:text-accent transition-colors">
                Développement
              </AppHeading>
              <AppText variant="muted">
                Conception d'applications robustes, intégration d'e-services et développement de solutions web modernes avec une architecture propre.
              </AppText>
            </div>
            <div class="mt-8 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent/80 group-hover:text-accent">
              <span>Execute Workspace</span>
              <ArrowRight class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </AppCard>
        </RouterLink>

      </div>
    </div>
  </AppLayout>
</template>