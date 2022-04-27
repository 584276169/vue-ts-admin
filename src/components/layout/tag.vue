<template>
        <div class="tagContainer flex_center">
           <div v-for="(item, index) in routerList" :key="index" class="tag flex_center" :class="item.title==pageTitle?'pageActive':''" @click="goRouter(item.path)">
           <p>{{item.title}}</p>
           <span class="circle" @click.stop="removePath(item,index)" >
                <el-icon>
                   <component :is="Close"></component>
               </el-icon>
           </span>
           </div>
        </div>
</template>
    
<script setup lang='ts'>
import { RouteRecord } from 'vue-router';
import { Close} from '@element-plus/icons-vue'

const route=useRoute()
const router = useRouter()
watch(route,(val:any)=>{
    pageTitle.value=val.meta.title
    addRoute(val)
    
})
let pageTitle=ref('')
let routerList=ref<Array<any>>([])
const goRouter =(path:string) => {
    router.push(path)
}

const removePath = (item:{title:string,path:string},index:number) => {
    if(pageTitle.value==item.title){
        routerList.value.splice(index,1)
      if(routerList.value.length!==0){
            let path =routerList.value[routerList.value.length-1].path
             router.push(path)
      }
    }else{
         routerList.value.splice(index,1)
    }
}
let addRoute = (val:RouteRecord) => {
  let find =  routerList.value.find((i:any) => {
        return i.title == val.meta.title
    })
    if(!find){
          routerList.value.push({
            title:val.meta.title,
            path:val.path
        })
    }
    
}
</script>
    
<style lang="scss"  scoped>
    .tagContainer{
        height: 30px;
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.3);
        padding: 0 15px;
        font-size: 13px;
        overflow: hidden;
    }
    .tag{
        overflow: hidden;
        cursor: pointer;
        padding: 3px 8px;
        border-radius: 3px;
        margin: 3px 5px 2px 3px;
        border: 1px solid #eee;
        .circle{
            margin: 0 3px;
            text-align: center;
            width: 15px;
            height: 15px;
            line-height: 18px;
        }
        .circle:hover{
            background-color:#F56C6C ;
            border-radius: 50%;
        }
    }
     .pageActive{
                background-color: #2b2f3a;
                color: #ffffff;
        }
</style>