<template>
  <div class="grid grid-cols-1 gap-4">
    <div v-for="metric in metrics" :key="metric.id" class="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
      <div class="text-sm text-gray-500">{{ metric.name }}</div>
      <div class="text-2xl font-bold">{{ metric.value }}{{ metric.unit }}</div>
      <div class="text-xs" :class="metric.trend === 'up' ? 'text-green-500' : 'text-red-500'">
        {{ metric.trend === 'up' ? '▲ En hausse' : '▼ En baisse' }}
      </div>
    </div>
  </div>
</template>