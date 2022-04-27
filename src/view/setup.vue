<template>
        <div class="container">
                <el-switch 
                v-model="open" 
                 size="small"
                 active-text="开"
                 inactive-text="关"
                 active-color="#13ce66"
                 inactive-color="#ff4949"
                 >
                </el-switch>
                
        </div>
</template>
    
<script setup lang='ts'>
import {Check,Close}  from '@element-plus/icons-vue'
    let open=ref(false)
</script>
    
<style>
    
</style>