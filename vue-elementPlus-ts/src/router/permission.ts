import pinia from '@/store/index'
import NProgress from 'nprogress'
import "nprogress/nprogress.css";
import { mainStore } from '@/store/store'
import router from './index'
const store = mainStore(pinia)
let bai = ['/login']
router.beforeEach(async (to, from, next) => {
    NProgress.start()
    const token = localStorage.getItem('TOKEN')
    if (!token) {
        if (to.path == '/login') {
            next()
        } else {
            next({ path: '/login' })
        }
    } else {
        if(store.addRoutes.length==0){
            let iden = await store.handleRoutes()
             if(iden){
              next({...to})
             }
           }else{
              next()
           }
    }
})

router.afterEach(() => {
    NProgress.done()
    
})