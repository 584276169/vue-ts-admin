import { defineStore } from "pinia"
import {asyncRoutes} from '@/router/routes'
import router from '@/router/index'
import { getRole } from "@/config/api"
export const mainStore =defineStore('main',{
    state: () => {
        return {
            role:['userSystem'],
            addRoutes:[],
        }
    },
    actions:{
        handleRoutes(){
            return new Promise((resolve,reject) => {
                let AddRoute = asyncRoutes.filter((item:any) => {
                    if(item.meta){
                        if(item.meta.role.includes(...this.role)){
                            return true
                        }else{
                            return false
                        }
                    }else{
                        return true
                    }
                })
                for(let i of AddRoute){
                    router.addRoute(i)
                }
                this.addRoutes = AddRoute as any
                resolve(true)
               })
        },

       
    }
})