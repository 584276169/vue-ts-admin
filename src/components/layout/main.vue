<template>
<div>
    <Header></Header>
    <Sidebar></Sidebar>
   <div class="mainContainer" :class="collapse?'collapseActive':''">
        <RouterView></RouterView>
   </div>
</div>
</template>
    
<script setup lang='ts'>
 import emitter from '@/utils/bus'
 
 const collapse=ref<boolean>()
 emitter.on('changeCollapse',(data:any) => {
   collapse.value=data.value
    
})
</script>
    
<style lang="scss" scoped>
.mainContainer{
     position: absolute;
    left:200px;
    right: 0;
    top: 90px;
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background-color: #f6f8f9;
    padding: 25px;
}
.collapseActive{
     left: 65px;
}
    
</style>