<template>
        <div class="container">
                <el-table :data="list" border stripe>
                        <el-table-column label="姓名" prop="name" align="center">
                        </el-table-column>
                        <el-table-column label="注册时间" prop="time" align="center">
                        </el-table-column>
                        <el-table-column label="地址" prop="address" align="center">
                        </el-table-column>
                        <el-table-column label="邮箱" prop="email" align="center">
                        </el-table-column>
                        <el-table-column label="操作" align="center">
                                <el-button type="warning" size="small">查看</el-button>
                                <el-button type="danger" size="small">删除</el-button>
                        </el-table-column>
                </el-table>

        </div>
</template>
    
<script setup lang='ts'>
import { getForm } from '@/config/api'

const list = ref<Array<any>>()
const GetForm = () => {
        getForm().then((res: any) => {
                console.log(res);
                if (res.code == 0) {
                        list.value = res.data.data
                }

        })
}
onMounted(() => {
        GetForm()
})
</script>
<style>
</style>