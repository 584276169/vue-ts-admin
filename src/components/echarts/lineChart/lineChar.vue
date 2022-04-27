<template>
       <div id="line" style="width:100%;height: 300px;"></div>
</template>
    
<script setup lang='ts'>
import InitChar from '../modules/chartClass'

let options = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};
let myChar=ref('line')
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