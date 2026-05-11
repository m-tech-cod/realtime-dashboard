<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex justify-center">
    <button
      @click="$emit('toggle')"
      class="px-4 py-2 rounded-lg font-medium"
      :class="isStreaming ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-green-500 hover:bg-green-600 text-white'"
    >
      {{ isStreaming ? '⏸️ Pause' : '▶️ Reprendre' }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ isStreaming: boolean }>()
defineEmits<{ (e: 'toggle'): void }>()
</script>