<template>
    <div class="headerContainer" :class="collapse?'headerExtend':''">
        <div class="headerNav flex_center">
            <el-icon v-if="!collapse" :size="30" @click="changeCollapse(true)">
                    <component :is="Fold"></component>
                </el-icon>
                 <el-icon v-else :size="30" @click="changeCollapse(false)">
                    <component :is="Expand"></component>
                </el-icon>
                <el-breadcrumb separator="/" class="breadList">
                  <transition-group name="breadcrumb">
                        <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{item.meta.title}}</el-breadcrumb-item>
                  </transition-group>
                </el-breadcrumb>
        </div>

    </div>
</template>
    
<script setup lang='ts'>
import { Fold,Expand } from '@element-plus/icons-vue'
import emitter from '@/utils/bus'
const route=useRoute()
const collapse=ref<boolean>()
const changeCollapse = (identi:boolean) => {
    collapse.value=identi
    emitter.emit('changeCollapse',collapse)
}

const breadList=ref<Array<any>>([])
watch(route,(options) => {
   let matched=options.matched
   breadList.value = matched.filter(i => {
      if(i.meta.title){
          return i.meta.title
      }else{
          return false
      }
   })
})


onMounted(() => {
    let matched=route.matched
    breadList.value = matched.filter(i => {
      if(i.meta.title){
          return i.meta.title
      }else{
          return false
      }
   })

})

</script>
    
<style lang="scss" scoped>
.headerContainer {
    position: absolute;
    right: 0;
    top: 0;
    left: 200px;
    height: 70px;
    box-shadow: 1px 0px 5px 1px rgba(0,0,0,0.3);
    z-index: 1;
    padding: 5px 10px;
      -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
}
.headerNav {
    height: 100%;
}
.headerExtend{
    left: 65px;
}
.breadList{
font-size: 15px;
margin-left: 10px;
}

</style>