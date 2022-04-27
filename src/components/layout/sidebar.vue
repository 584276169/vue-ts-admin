<template>
  <div class="sidebarContainer" :class="collapse ? 'sideBbarHide' : ''">
  <div class="sidebarTitle flex_center">
   <img src="../../assets/logo.png" alt="" style="width: 35px;height:35px;">
   <p :class="collapse?'titleChange':''">后台管理</p>
    
  </div>
    <el-menu router :default-active="defaultIndex" background-color="#ffffff" text-color="#333" active-text-color="#20a0ff" :collapse="collapse">
    <template v-for="(item, index) in menuList" :key="index">
        <template v-if="item.children.length==1">
        <el-menu-item :index="item.path" :key="index">
          <el-icon>
            <component :is="item.children[0].meta.icon"></component>
          </el-icon>
          <span>{{item.children[0].meta.title}}</span>
        </el-menu-item>
        </template>

        <template v-else>
         <el-sub-menu :index="item.name">
         <template #title>
           <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{item.meta.title}}</span>
         </template>
         <el-menu-item :index="child.path" :key="indexOf" v-for="(child, indexOf) in item.children"  v-show="child.meta.menu"  >
          <el-icon>
            <component :is="child.meta.icon"></component>
          </el-icon>
          <span>{{child.meta.title}}</span>
         </el-menu-item>
         </el-sub-menu>
        </template>
       </template>
    </el-menu>

  </div>
</template>
<script setup lang='ts'>
import { mainStore } from '@/store/store'
import emitter from '@/utils/bus'
const store = mainStore()
const route=useRoute()

const menuList = ref<Array<any>>([])
menuList.value = store.addRoutes

const collapse = ref<boolean>(false)
emitter.on('changeCollapse', (data: any) => {
  collapse.value = data.value

})


const defaultIndex = computed(() => {
  return route.fullPath
})


</script>
    
<style lang="scss" scoped>
.sidebarContainer {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 200px;
  height:100%;
  overflow-y: scroll;
  background-color: #ffffff;
  -webkit-transition: width .3s ease-in-out;
  transition: width .3s ease-in-out;
  box-shadow: 1px 0px 5px 1px rgba(0,0,0,0.3);
  z-index: 1;
  .sidebarTitle{
    height: 70px;
    padding: 5px;
    background-color: #2b2f3a;
    p{
      font-size: 20px;
      color: #ffffff;
      font-weight: 600;
      margin-left: 10px;
       animation: mykey 3s;
    }
  }
  @keyframes mykey{
    0%{
      color: transparent;
    }

    100%{
      color: #ffffff;
    }
  }

  .titleChange{
   display: none!important;
  }
}

.sidebarContainer::-webkit-scrollbar {
  width: 0;
}

.sideBbarHide {
  width: 65px;
}
</style>