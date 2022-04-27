<template>
        router <el-button type="primary"  size="default" @click="go">132123</el-button>
        
</template>
    
<script setup lang='ts'>
const router=useRouter()
    const go = () =>{
            router.push({
                    name:'courseDetail',
            })
    }
</script>
    
<style>
    
</style>