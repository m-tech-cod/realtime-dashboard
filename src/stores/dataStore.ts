import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { DataPoint, ActivityEvent, Metric } from '../types'
import { dataSimulator } from '../services/dataSimulator'

export const useDataStore = defineStore('data', () => {
  const points = ref<DataPoint[]>([])
  const metrics = ref<Metric[]>([])
  const events = ref<ActivityEvent[]>([])
  const isStreaming = ref(true)

  let unsubscribe: (() => void) | null = null

  function startStream() {
    if (unsubscribe) return
    unsubscribe = dataSimulator.subscribe((newData) => {
      if (!isStreaming.value) return
      points.value = [...points.value.slice(-99), ...newData.points]
      newData.metrics.forEach((m: Metric) => {
        const index = metrics.value.findIndex(ex => ex.id === m.id)
        if (index !== -1) metrics.value[index] = m
        else metrics.value.push(m)
      })
      events.value = [...newData.events, ...events.value].slice(0, 50)
    })
    dataSimulator.start()
  }

  function stopStream() {
    dataSimulator.stop()
    if (unsubscribe) {
      unsubscribe()
      unsubscribe = null
    }
  }

  function toggleStream() {
    if (isStreaming.value) {
      isStreaming.value = false
      stopStream()
    } else {
      isStreaming.value = true
      startStream()
    }
  }

  function cleanup() {
    stopStream()
  }

  return { points, metrics, events, isStreaming, startStream, stopStream, toggleStream, cleanup }
})