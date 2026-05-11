<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
    <h3 class="font-semibold mb-2">Activité récente</h3>
    <div class="space-y-2 max-h-60 overflow-y-auto">
      <div v-for="event in events" :key="event.id" class="text-sm border-b pb-1">
        <span class="text-gray-500">{{ formatTime(event.timestamp) }}</span>
        <span :class="event.severity === 'warning' ? 'text-yellow-600' : 'text-gray-700'" class="break-words">
          {{ event.message }}
        </span>
      </div>
      <div v-if="events.length === 0" class="text-gray-400 text-center">Aucun événement</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ActivityEvent } from '../../types'
defineProps<{ events: ActivityEvent[] }>()

const formatTime = (ts: number) => new Date(ts).toLocaleTimeString()
</script>