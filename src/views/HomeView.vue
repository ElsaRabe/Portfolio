<script setup lang="ts">
import AppContainer from '../components/ui/AppContainer.vue'
import AppCard from '../components/ui/AppCard.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center bg-[#0B0B0F] py-12">
    <AppContainer>
      <div class="text-center mb-16 animate-fade-in">
        <h1 class="text-6xl md:text-8xl font-extrabold tracking-widest text-stone-100 mb-4">
          ELSA RABE
        </h1>
        <div class="h-[1px] w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>
        <p class="text-lg md:text-xl uppercase tracking-widest text-amber-400 font-medium">
          Data & IA <span class="text-stone-600 mx-2">•</span> Software Developer
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        <RouterLink to="/data-ia" class="group">
          <AppCard hoverable class="h-full flex flex-col justify-between min-h-[250px]">
            <div>
              <span class="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300 origin-left">📊</span>
              <h2 class="text-2xl font-bold text-stone-100 mb-2 tracking-wide group-hover:text-amber-400 transition-colors">
                Data & IA
              </h2>
              <p class="text-stone-400 text-sm leading-relaxed">
                Exploration de données, analyses prédictives, visualisations d'impact et modèles d'intelligence artificielle (Computer Vision, NLP).
              </p>
            </div>
            <div class="mt-6 flex items-center text-xs uppercase tracking-wider text-amber-400/80 group-hover:text-amber-400 font-semibold">
              Découvrir mes analyses 
              <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </AppCard>
        </RouterLink>

        <RouterLink to="/developpement" class="group">
          <AppCard hoverable class="h-full flex flex-col justify-between min-h-[250px]">
            <div>
              <span class="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300 origin-left">💻</span>
              <h2 class="text-2xl font-bold text-stone-100 mb-2 tracking-wide group-hover:text-amber-400 transition-colors">
                Développement
              </h2>
              <p class="text-stone-400 text-sm leading-relaxed">
                Conception et architecture d'applications robustes, intégration d'e-services, de l'idée jusqu'au déploiement de solutions métiers.
              </p>
            </div>
            <div class="mt-6 flex items-center text-xs uppercase tracking-wider text-amber-400/80 group-hover:text-amber-400 font-semibold">
              Explorer mes applications
              <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </AppCard>
        </RouterLink>

      </div>
    </AppContainer>
  </div>
</template>