<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 overflow-x-hidden">
      <div class="w-full px-3 sm:px-6 py-4 sm:py-6">

      <!-- En-tête avec titre et toggle -->
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-xl sm:text-3xl font-bold">📊 Real-Time Dashboard</h1>
        <ThemeToggle />
      </div>

      <!-- Grille principale -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <!-- Colonne des graphiques -->
        <div class="lg:col-span-2 space-y-4 sm:space-y-6">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 transition-all">
            <LineChart :data="store.points" />
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 transition-all">
            <BarChart :data="store.points" />
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 transition-all">
            <AreaChart :data="store.points" />
          </div>
        </div>

        <!-- Colonne des métriques et activité -->
       <div class="space-y-4 sm:space-y-6">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
            <MetricCards :metrics="store.metrics" />
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
            <ActivityFeed :events="store.events" />
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
            <Controls :isStreaming="store.isStreaming" @toggle="store.toggleStream" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useDataStore } from './stores/dataStore'
import LineChart from './components/charts/LineChart.vue'
import BarChart from './components/charts/BarChart.vue'
import AreaChart from './components/charts/AreaChart.vue'
import MetricCards from './components/dashboard/MetricCards.vue'
import ActivityFeed from './components/dashboard/ActivityFeed.vue'
import Controls from './components/dashboard/Controls.vue'
import ThemeToggle from './components/common/ThemeToggle.vue'

const store = useDataStore()

onMounted(() => {
  store.startStream()
})

onUnmounted(() => {
  store.cleanup()
})
</script>