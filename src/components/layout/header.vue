<template>
    <div class="headerContainer" :class="collapse?'headerExtend':''">
        <div class="headerNav flex_cneter_between">
            <div class="flex_center">
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
            <div class="flex_center">
                <div class="userinfo flex_center">
                    <el-image :src="avatarUrl" fit="fill" :lazy="true"></el-image>
                    <p>{{name}}</p>
                    
                </div>
                 <el-icon  :size="30"  style="color: #F56C6C;" @click="logOut" >
                    <component :is="SwitchButton"></component>
                </el-icon>
            </div>
        </div>
        <Tag></Tag>
    </div>
</template>
    
<script setup lang='ts'>
import { Fold,Expand,SwitchButton} from '@element-plus/icons-vue'
import emitter from '@/utils/bus'
import router from '@/router';
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
 interface UserInfo {
     name:string|null,
     avatarUrl:string|null,
 }
const userInfo=reactive<UserInfo>({
    avatarUrl:'',
    name:'',
})
const {avatarUrl,name} = toRefs(userInfo)

const logOut = () => {
    router.push('/login')
    
}
onMounted(() => {
    let matched=route.matched
    breadList.value = matched.filter(i => {
      if(i.meta.title){
          return i.meta.title
      }else{
          return false
      }
   })

   userInfo.avatarUrl=localStorage.getItem('AVATARURL')
   userInfo.name=localStorage.getItem('NAME')
})

</script>
    
<style lang="scss" scoped>
.headerContainer {
    position: absolute;
    right: 0;
    top: 0;
    left: 200px;
    height: 90px;
    box-shadow: 1px 0px 5px 1px rgba(0,0,0,0.3);
    background-color: #ffffff;
    z-index: 1;
      -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
}
.headerNav {
    height: 60px;
    padding: 15px 10px;
    flex-wrap: nowrap;
}
.headerExtend{
    left: 65px;
}
.breadList{
font-size: 15px;
margin-left: 10px;
}
.userinfo{
      margin: 0 10px;
      font-size: 14px;
    .el-image{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 5px;
    }
}
</style>