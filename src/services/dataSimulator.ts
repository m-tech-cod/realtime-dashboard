import type { DataPoint, ActivityEvent, Metric } from '../types'

export class DataSimulator {
  private intervalId: number | null = null
  private listeners: ((data: { points: DataPoint[]; metrics: Metric[]; events: ActivityEvent[] }) => void)[] = []

  start() {
    if (this.intervalId) return
    this.intervalId = setInterval(() => {
      const newPoint: DataPoint = {
        timestamp: Date.now(),
        value: Math.random() * 100 + 50,
      }
      const newMetric: Metric = {
        id: 'cpu',
        name: 'CPU Usage',
        value: Math.random() * 100,
        unit: '%',
        trend: Math.random() > 0.7 ? 'up' : 'down',
      }
      const newEvent: ActivityEvent = {
        id: Date.now().toString(),
        timestamp: Date.now(),
        message: `Nouvelle alerte : valeur ${Math.floor(newPoint.value)}`,
        severity: Math.random() > 0.8 ? 'warning' : 'info',
      }
      this.listeners.forEach(fn => fn({
        points: [newPoint],
        metrics: [newMetric],
        events: [newEvent],
      }))
    }, 1000)
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }

  subscribe(callback: (data: any) => void) {
    this.listeners.push(callback)
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback)
    }
  }
}

export const dataSimulator = new DataSimulator()