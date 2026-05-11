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
import { BarChart as EBarChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'
import type { DataPoint } from '../../types'

use([CanvasRenderer, EBarChart, TitleComponent, TooltipComponent, GridComponent, LegendComponent])

const props = defineProps<{ data: DataPoint[] }>()

const option = computed(() => ({
  title: { text: 'Histogramme (dix dernières valeurs)', left: 'center' },
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', name: 'Index' },
  yAxis: { type: 'value', name: 'Valeur' },
  series: [{
  data: props.data.slice(-10).map(d => d.value),
  type: 'bar',
  itemStyle: { borderRadius: [4,4,0,0], color: '#10B981' },
}]
}))
</script>