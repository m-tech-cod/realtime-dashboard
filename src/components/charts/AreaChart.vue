<template>
  <div class="w-full h-64 sm:h-80">
    <v-chart class="w-full h-full" :option="option" autoresize />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart as ELineChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'
import type { DataPoint } from '../../types'

use([CanvasRenderer, ELineChart, TitleComponent, TooltipComponent, GridComponent, LegendComponent])

const props = defineProps<{ data: DataPoint[] }>()

const option = computed(() => ({
  title: { text: 'Aire (évolution)', left: 'center' },
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'time', name: 'Heure' },
  yAxis: { type: 'value', name: 'Valeur' },
  series: [{
  data: props.data.map(d => [d.timestamp, d.value]),
  type: 'line',
  smooth: true,
  lineStyle: { color: '#8B5CF6', width: 2 },
  areaStyle: { opacity: 0.3, color: '#8B5CF6' },
}]
}))
</script>