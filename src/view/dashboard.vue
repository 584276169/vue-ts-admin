<template>
  <div>
    <el-row :gutter="20" class="container">
      <el-col :lg="12" :md="12" :sm="24" :offset="0">
      <BarChar />
      </el-col>
      <el-col :lg="12" :md="12" :sm="24" :offset="0">
       <LineChar />
      </el-col>
    </el-row>

      <el-row :gutter="20" class="container">
      <el-col :lg="12" :md="12" :sm="24" :offset="0">
      <PieChar />
      </el-col>
      <el-col :lg="12" :md="12" :sm="24" :offset="0">
      </el-col>
    </el-row>


  </div>
</template>
    
<script setup lang='ts'>
import PieChar from '@/components/echarts/pieChart/pieChar.vue';

onUnmounted(() => {
   window.onresize=null
})
</script>
    
<style lang="scss"  scoped>
</style>