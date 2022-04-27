import { defineStore } from "pinia"
import {asyncRoutes} from '@/router/routes'
import router from '@/router/index'
import { getRole } from "@/config/api"
export const mainStore =defineStore('main',{
    state: () => {
        return {
            role:[],
            addRoutes:[],
        }
    },
    actions:{
        handleRoutes(){
            return new Promise(async(resolve,reject) => {
                if(this.role.length==0){
                    let myRole=await this.myRole()
                    if(myRole){
                        resolve(true)
                    }
                }else{
                    let AddRoute:any = []  
                   AddRoute = asyncRoutes.filter((i:any) => {
                       if(i.meta){
                           if(this.checkArr(this.role,i.meta.role)){
                               if(i.children){
                                   i.children = i.children.filter((x:any) => {
                                       if(this.checkArr(this.role,x.meta.role)){
                                           return true
                                       }else{
                                           return false
                                       }
                                   })  
                               }
                               return true
                           }else{
                               return false
                           }
                       }else{
                           return false
                       }
                   })
                    for(let i of AddRoute){
                           router.addRoute(i)
                    }
                    this.addRoutes = AddRoute as any
                    
                    resolve(true)
                }
               })
        },
        myRole(){
            return new Promise((resolve,reject) => {
                getRole().then((res:any)=>{
                    this.role=res
                    resolve(true)
                })
            })
        },
        REMOVE_ROLE(){
        this.role=[]
        this.addRoutes.forEach((i:any)=>{
            router.removeRoute(i.name) 
        })
        this.addRoutes=[]
        
        },

        checkArr(arr1:any[],arr2:any[]){
            var rs=false;
            for (var i=0; i<arr1.length; i++){
                for (var j=0;j<arr2.length;j++){
                    if( arr1[i]== arr2[j]){
                        rs=true;
                        break;
                       }
                    }
                }
                return rs;
        }

       
    }
})