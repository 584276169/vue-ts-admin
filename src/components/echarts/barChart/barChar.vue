<template>
       <div id="bar" style="width:100%;height: 300px;"></div>
</template>
    
<script setup lang='ts'>
import InitChar from '../modules/chartClass'

let options = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
}
let myChar=ref('bar')
let char=new InitChar(options,myChar.value)
onMounted(() => {
   char.init()
   char.Listen()
})
onUnmounted(() => {
})

</script>
    
<style lang="scss" scoped>
    
</style>