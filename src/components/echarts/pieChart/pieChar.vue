<template>
       <div id="pie" style="width:100%;height: 300px;"></div>
</template>
    
<script setup lang='ts'>
import InitChar from '../modules/chartClass'

let options = {
 title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
let myChar=ref('pie')
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