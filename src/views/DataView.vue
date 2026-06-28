<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AppLayout from '../components/layout/AppLayout.vue'
import AppCard from '../components/ui/AppCard.vue'
import AppHeading from '../components/ui/AppHeading.vue'
import AppText from '../components/ui/AppText.vue'
import { dataProjects } from '../data/projectsData'
import { 
  Database, ArrowDown, ExternalLink, Github, CheckCircle, 
  BarChart3, Layers, Settings, MessagesSquare, FileText
} from 'lucide-vue-next'

// --- WORKFLOW GLOBAL STATE ---
const activeGlobalStep = ref('Clean')
const globalWorkflow = [
  { name: 'Collect', icon: Layers, desc: 'Querying systems, parsing multi-table relational files.' },
  { name: 'Clean', icon: Settings, desc: 'Handling missing records, de-duplication, formats mapping.' },
  { name: 'Analyze', icon: Database, desc: 'Exploratory Data Analysis (EDA), tracking statistics distributions.' },
  { name: 'Visualize', icon: BarChart3, desc: 'Designing high-impact charts and advanced metrics layout.' },
  { name: 'Communicate', icon: MessagesSquare, desc: 'Translating complex outputs into strategic corporate decisions.' }
]

// --- STICKY NAVIGATION LOGIC ---
const activeProjectTab = ref(dataProjects[0].id)
const isSticky = ref(false)

const handleScroll = () => {
  const navTrigger = document.getElementById('project-nav-trigger')
  if (navTrigger) {
    isSticky.value = window.scrollY > navTrigger.offsetTop
  }
  
  // Highlighting matching project section dynamically while scrolling
  dataProjects.forEach(proj => {
    const el = document.getElementById(`section-${proj.id}`)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 160 && rect.bottom >= 160) {
        activeProjectTab.value = proj.id
      }
    }
  })
}

const scrollToSection = (id: string) => {
  activeProjectTab.value = id
  const target = document.getElementById(`section-${id}`)
  if (target) {
    const offset = 120
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top: targetPosition, behavior: 'smooth' })
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <AppLayout>
    <div class="space-y-36 w-full pb-24">
      
      <section class="min-h-[70vh] flex flex-col justify-center items-center text-center">
        <span class="font-mono text-xs uppercase tracking-[0.3em] text-accent block mb-4">// INTEL_SUITE_V4</span>
        <AppHeading level="1" class="text-5xl md:text-8xl font-extrabold tracking-tight uppercase">
          Data Analytics
        </AppHeading>
        <AppText class="text-xl md:text-2xl text-text-muted max-w-2xl mt-4 font-light">
          Transforming raw data into actionable business insights.
        </AppText>
        <div class="flex flex-wrap justify-center gap-2 mt-8 max-w-xl">
          <span v-for="b in ['Python', 'SQL', 'Power BI', 'Pandas', 'Machine Learning', 'EDA']" :key="b" class="px-3 py-1 bg-surface border border-border-custom rounded-full text-xs font-mono text-text-muted">
            {{ b }}
          </span>
        </div>
        <div class="mt-20 flex flex-col items-center gap-2 opacity-60">
          <span class="font-mono text-[10px] uppercase tracking-widest">Scroll to explore</span>
          <ArrowDown class="w-4 h-4 text-accent animate-bounce" />
        </div>
      </section>

      <section class="grid md:grid-cols-12 gap-12 items-center">
        <div class="md:col-span-5 flex justify-center">
          <div class="w-64 h-64 rounded-full bg-gradient-to-tr from-surface via-border-custom to-bg-main border-2 border-border-custom flex items-center justify-center shadow-2xl relative overflow-hidden group">
            <div class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span class="font-mono text-xs text-text-muted/40 uppercase tracking-widest">[ Profile Image ]</span>
          </div>
        </div>
        <div class="md:col-span-7 space-y-6">
          <span class="font-mono text-xs tracking-widest text-accent uppercase">[ Identity ]</span>
          <AppHeading level="2">About Me</AppHeading>
          <AppText variant="muted" class="text-lg">
            Je suis une Data Analyst en devenir passionnée par la compréhension des données et leur transformation en décisions concrètes. Mon prisme d'analyse lie l'intégrité du code à l'efficacité business.
          </AppText>
          <div class="grid grid-cols-3 gap-4 pt-6 border-t border-border-custom/20">
            <AppCard class="p-4 text-center">
              <div class="text-xl font-bold font-display text-text-main">05</div>
              <div class="font-mono text-[9px] text-text-muted uppercase tracking-wider mt-1">Projects</div>
            </AppCard>
            <AppCard class="p-4 text-center">
              <div class="text-xl font-bold font-display text-text-main">12</div>
              <div class="font-mono text-[9px] text-text-muted uppercase tracking-wider mt-1">Techs</div>
            </AppCard>
            <AppCard class="p-4 text-center">
              <div class="text-xl font-bold font-display text-text-main">Always</div>
              <div class="font-mono text-[9px] text-text-muted uppercase tracking-wider mt-1">Learning</div>
            </AppCard>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <div>
          <span class="font-mono text-xs tracking-widest text-accent uppercase">[ Ecosystem ]</span>
          <AppHeading level="2" class="mt-1">Technical Stack</AppHeading>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AppCard v-for="cat in [
            { t: 'Programming', b: ['Python', 'SQL'] },
            { t: 'Libraries', b: ['Pandas', 'NumPy', 'Scikit-Learn'] },
            { t: 'Visualization', b: ['Matplotlib', 'Seaborn'] },
            { t: 'Tools & BI', b: ['Power BI', 'Jupyter', 'Git', 'VS Code'] }
          ]" :key="cat.t">
            <h4 class="font-mono text-xs text-accent uppercase tracking-wider mb-4 border-b border-border-custom/30 pb-2">{{ cat.t }}</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="badge in cat.b" :key="badge" class="px-2.5 py-1 bg-bg-main border border-border-custom rounded text-xs text-text-main font-medium">{{ badge }}</span>
            </div>
          </AppCard>
        </div>
      </section>

      <section class="max-w-3xl mx-auto space-y-12">
        <div class="text-center">
          <span class="font-mono text-xs tracking-widest text-accent uppercase">[ Pipeline ]</span>
          <AppHeading level="2" class="mt-1">Analytics Workflow</AppHeading>
        </div>
        <div class="border-l border-border-custom/60 ml-4 space-y-8 relative">
          <div v-for="w in globalWorkflow" :key="w.name" 
               @mouseenter="activeGlobalStep = w.name"
               class="relative pl-8 group cursor-pointer"
          >
            <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-border-custom bg-bg-main group-hover:border-accent transition-colors"
                 :class="{ 'border-accent bg-accent/20': activeGlobalStep === w.name }"></div>
            <div class="flex items-center gap-3">
              <component :is="w.icon" class="w-4 h-4" :class="activeGlobalStep === w.name ? 'text-accent' : 'text-text-muted'" />
              <h4 class="font-mono text-sm uppercase tracking-wider font-bold" :class="activeGlobalStep === w.name ? 'text-accent' : 'text-text-main'">{{ w.name }}</h4>
            </div>
            <p v-if="activeGlobalStep === w.name" class="text-text-muted text-sm mt-2 max-w-xl bg-surface/50 border border-border-custom/40 p-3 rounded-lg animate-fade-in font-sans">
              {{ w.desc }}
            </p>
          </div>
        </div>
      </section>

      <div id="project-nav-trigger" class="h-px"></div>

      <div :class="{ 'sticky top-0 left-0 right-0 z-50 bg-bg-main/90 backdrop-blur border-b border-border-custom/80 py-4 shadow-xl transition-all': isSticky }">
        <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <span v-if="isSticky" class="font-mono text-[10px] tracking-widest text-accent font-bold uppercase hidden md:inline">INDEX // MODULES</span>
          <div class="flex gap-8 overflow-x-auto w-full md:w-auto py-1 no-scrollbar">
            <button 
              v-for="p in dataProjects" :key="p.id"
              @click="scrollToSection(p.id)"
              class="font-mono text-xs uppercase tracking-widest whitespace-nowrap transition-colors"
              :class="activeProjectTab === p.id ? 'text-accent font-bold' : 'text-text-muted hover:text-text-main'"
            >
              • {{ p.id.replace('-', ' ') }}
            </button>
            <button class="font-mono text-xs uppercase tracking-widest text-text-muted/40 cursor-not-allowed" disabled>• NLP Pipeline (Soon)</button>
            <button class="font-mono text-xs uppercase tracking-widest text-text-muted/40 cursor-not-allowed" disabled>• SQL Architecture (Soon)</button>
          </div>
        </div>
      </div>

      <div v-for="project in dataProjects" :key="project.id" :id="`section-${project.id}`" class="border-t border-border-custom/30 pt-24 space-y-28">
        
        <div class="space-y-8">
          <div class="w-full h-[400px] rounded-2xl bg-surface border border-border-custom overflow-hidden shadow-2xl flex items-center justify-center relative group">
            <div class="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent opacity-60"></div>
            <span class="font-mono text-xs text-text-muted/40 tracking-widest uppercase transition-transform duration-500 group-hover:scale-105">[ Dashboard Hero Placeholder: {{ project.title }} ]</span>
          </div>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="font-mono text-xs text-accent uppercase tracking-wider">// CASE STUDY //</span>
              <span class="font-mono text-xs text-text-muted">{{ project.year }}</span>
            </div>
            <AppHeading level="1" class="text-3xl md:text-5xl font-black font-display tracking-tight">{{ project.title }}</AppHeading>
            <AppText class="text-lg text-text-muted font-light">{{ project.subtitle }}</AppText>
            <div class="flex flex-wrap gap-1.5 pt-2">
              <span v-for="tag in project.tags" :key="tag" class="text-[10px] font-mono bg-surface border border-border-custom/60 px-2.5 py-0.5 rounded text-text-muted">{{ tag }}</span>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-12 gap-8 items-stretch">
          <div class="md:col-span-8 flex flex-col justify-center">
            <h4 class="font-mono text-xs text-accent uppercase tracking-widest mb-3">[ Overview ]</h4>
            <AppText class="text-text-muted leading-relaxed text-base">{{ project.overview.description }}</AppText>
          </div>
          <div class="md:col-span-4">
            <AppCard class="h-full flex flex-col justify-between">
              <h5 class="font-mono text-[11px] text-text-main uppercase tracking-widest border-b border-border-custom/40 pb-2">Dataset Summary</h5>
              <div class="space-y-3 mt-4 font-mono text-xs">
                <div class="flex justify-between"><span class="text-text-muted">Source:</span><span class="text-text-main font-sans text-right">{{ project.overview.summary.source }}</span></div>
                <div class="flex justify-between"><span class="text-text-muted">Records:</span><span class="text-accent font-bold">{{ project.overview.summary.records }}</span></div>
                <div class="flex justify-between"><span class="text-text-muted">Features:</span><span class="text-text-main">{{ project.overview.summary.features }}</span></div>
                <div class="flex justify-between"><span class="text-text-muted">Domain:</span><span class="text-text-main font-sans text-right">{{ project.overview.summary.domain }}</span></div>
              </div>
            </AppCard>
          </div>
        </div>

        <div class="bg-surface/40 border border-border-custom/60 rounded-xl p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center">
          <div class="md:col-span-8 space-y-4">
            <h4 class="font-mono text-xs text-accent uppercase tracking-widest">[ Business Strategy ]</h4>
            <AppHeading level="2" class="text-2xl font-bold">Business Context</AppHeading>
            <AppText variant="muted" class="text-base">{{ project.businessContext }}</AppText>
          </div>
          <div class="md:col-span-4 h-32 border border-dashed border-border-custom rounded-lg flex items-center justify-center opacity-40">
            <span class="font-mono text-[10px] uppercase tracking-widest">[ Strategy Vector ]</span>
          </div>
        </div>

        <div class="space-y-4">
          <h4 class="font-mono text-xs text-accent uppercase tracking-widest">[ Source Structure ]</h4>
          <div class="w-full h-48 rounded-xl bg-bg-main border border-border-custom flex items-center justify-center overflow-hidden group">
            <span class="font-mono text-xs text-text-muted/30 uppercase tracking-wider transition-transform duration-500 group-hover:scale-95">[ Dataset Preview: Analytical Grid (first rows) ]</span>
          </div>
          <p class="font-mono text-[10px] text-text-muted/60 text-center uppercase tracking-widest">{{ project.datasetCaption }}</p>
        </div>

        <div class="grid md:grid-cols-12 gap-8 items-center">
          <div class="md:col-span-6 h-64 rounded-xl bg-surface border border-border-custom flex items-center justify-center overflow-hidden">
            <span class="font-mono text-[11px] text-text-muted/30 uppercase tracking-widest">[ Notebook ETL Pipeline Screenshot ]</span>
          </div>
          <div class="md:col-span-6 space-y-4">
            <h4 class="font-mono text-xs text-accent uppercase tracking-widest">[ Engineering Processing ]</h4>
            <AppHeading level="2" class="text-2xl font-bold">Data Preparation</AppHeading>
            <ul class="space-y-2.5">
              <li v-for="step in project.preparation.steps" :key="step" class="flex items-start gap-3 font-sans text-sm text-text-muted">
                <CheckCircle class="w-4 h-4 text-accent/80 mt-0.5 flex-shrink-0" />
                <span>{{ step }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="space-y-8 text-center max-w-5xl mx-auto">
          <h4 class="font-mono text-xs text-accent uppercase tracking-widest">[ Sequential Operations ]</h4>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div v-for="(m, idx) in project.methodology" :key="m.step" class="p-4 bg-surface/60 border border-border-custom rounded-xl flex flex-col justify-between text-left">
              <div>
                <span class="font-mono text-[10px] text-text-muted/40 block mb-1">0{{ idx + 1 }}_</span>
                <span class="font-mono text-xs font-bold text-accent uppercase tracking-wider block mb-2">{{ m.step }}</span>
              </div>
              <p class="text-xs text-text-muted font-sans leading-relaxed mt-2 border-t border-border-custom/20 pt-2">{{ m.desc }}</p>
            </div>
          </div>
        </div>

        <div class="space-y-16">
          <h4 class="font-mono text-xs text-accent uppercase tracking-widest">[ Exploratory Mining ]</h4>
          <div v-for="(chart, index) in project.eda" :key="chart.title" class="grid md:grid-cols-12 gap-8 items-center">
            
            <template v-if="chart.type === 'left'">
              <div class="md:col-span-7 h-64 rounded-xl bg-surface border border-border-custom flex items-center justify-center overflow-hidden group">
                <span class="font-mono text-xs text-text-muted/30 uppercase tracking-widest transition-all duration-500 group-hover:scale-105">[ Visualization: {{ chart.title }} ]</span>
              </div>
              <div class="md:col-span-5 space-y-2">
                <span class="font-mono text-[10px] text-accent font-bold">METRIC 0{{ index + 1 }}</span>
                <h4 class="font-display font-bold text-xl text-text-main">{{ chart.title }}</h4>
                <AppText variant="muted" class="text-sm">{{ chart.desc }}</AppText>
              </div>
            </template>

            <template v-else>
              <div class="md:col-span-5 space-y-2 md:text-right md:order-1 order-2">
                <span class="font-mono text-[10px] text-accent font-bold">METRIC 0{{ index + 1 }}</span>
                <h4 class="font-display font-bold text-xl text-text-main">{{ chart.title }}</h4>
                <AppText variant="muted" class="text-sm">{{ chart.desc }}</AppText>
              </div>
              <div class="md:col-span-7 h-64 rounded-xl bg-surface border border-border-custom flex items-center justify-center overflow-hidden group md:order-2 order-1">
                <span class="font-mono text-xs text-text-muted/30 uppercase tracking-widest transition-all duration-500 group-hover:scale-105">[ Visualization: {{ chart.title }} ]</span>
              </div>
            </template>

          </div>
        </div>

        <div class="space-y-8">
          <h4 class="font-mono text-xs text-accent uppercase tracking-widest">[ Extracted Value ]</h4>
          <div class="grid sm:grid-cols-2 gap-6">
            <AppCard v-for="ins in project.insights" :key="ins.title" class="flex gap-4 items-start border-l-2 border-l-accent/40">
              <span class="font-mono text-xs text-accent font-bold bg-bg-main border border-border-custom p-1.5 rounded">✓</span>
              <div>
                <h5 class="font-sans font-bold text-base text-text-main mb-1">{{ ins.title }}</h5>
                <AppText variant="muted" class="text-sm">{{ ins.desc }}</AppText>
              </div>
            </AppCard>
          </div>
        </div>

        <div class="space-y-8">
          <h4 class="font-mono text-xs text-accent uppercase tracking-widest">[ Production UI ]</h4>
          <AppHeading level="2" class="text-2xl font-bold">Interactive BI Suite</AppHeading>
          <div class="w-full h-[450px] rounded-2xl bg-surface border border-border-custom overflow-hidden shadow-2xl flex items-center justify-center group">
            <span class="font-mono text-xs text-text-muted/30 uppercase tracking-widest transition-all duration-500 group-hover:scale-102">[ Power BI Dashboard Active Sandbox Frame ]</span>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <AppCard v-for="kpi in project.kpis" :key="kpi.label" class="p-4 text-center bg-bg-main border border-border-custom/70">
              <div class="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-1">{{ kpi.label }}</div>
              <div class="text-2xl font-bold font-display text-accent tracking-tight">{{ kpi.value }}</div>
            </AppCard>
          </div>
        </div>

        <AppCard class="p-8 border-l-4 border-l-amber-600/60 bg-surface/20">
          <h4 class="font-mono text-xs text-accent uppercase tracking-widest mb-2">[ Complexity Handling ]</h4>
          <AppHeading level="2" class="text-xl font-bold mb-3">Technical Challenges</AppHeading>
          <AppText variant="muted" class="text-sm leading-relaxed">{{ project.challenges }}</AppText>
        </AppCard>

        <div class="grid md:grid-cols-12 gap-8 items-center border-t border-border-custom/20 pt-12">
          <div class="md:col-span-5 italic font-serif text-lg text-text-muted/80 pl-4 border-l border-accent/40 py-2">
            "Good analysis is not about creating complex charts. It is about helping people make better strategic decisions with crystal clear evidence."
          </div>
          <div class="md:col-span-7 space-y-4">
            <h4 class="font-mono text-xs text-accent uppercase tracking-widest">[ Engineering Competencies ]</h4>
            <AppHeading level="2" class="text-xl font-bold">Skills Gained</AppHeading>
            <div class="grid sm:grid-cols-1 gap-2 font-mono text-xs text-text-muted">
              <div v-for="l in project.learned" :key="l" class="flex items-center gap-2.5">
                <span class="text-accent font-bold">→</span>
                <span>{{ l }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row justify-center items-center gap-6 pt-12 border-b border-border-custom/20 pb-20">
          <a :href="project.links.github" class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-surface border border-border-custom rounded-xl font-mono text-xs uppercase tracking-widest text-text-main hover:border-accent hover:text-accent transition-all duration-300 shadow-xl">
            <Github class="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
          <a :href="project.links.dashboard" class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-bg-main rounded-xl font-mono text-xs uppercase tracking-widest font-bold hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-accent/10">
            <ExternalLink class="w-4 h-4" />
            <span>Live BI Dashboard</span>
          </a>
          <a :href="project.links.report" class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-surface border border-border-custom rounded-xl font-mono text-xs uppercase tracking-widest text-text-muted hover:border-text-main transition-all duration-300">
            <FileText class="w-4 h-4" />
            <span>Project Report</span>
          </a>
        </div>

      </div>

    </div>
  </AppLayout>
</template>

<style scoped>
/* Utility class to hide scrollbar on horizontal sticky navigation items */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>