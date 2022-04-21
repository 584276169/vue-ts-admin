import main from '@/components/layout/main.vue'  //布局文件
import {DataBoard,Open,Grid,Help} from '@element-plus/icons-vue'
export const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/view/login.vue'),
        meta: { title: '登录'}
    },
]
/**
 * 动态路由
 */
export const asyncRoutes = [
    {
        path: '/dashboard',
        component: main,
        redirect: '/dashboard/dashboard',
        meta: {role:['userSystem']},
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('@/view/dashboard.vue'),
                meta: { title: '仪表盘', icon:markRaw(DataBoard)}
            }
        ]
    },
    {
        path: '/setup',
        redirect: '/setup/setup',
        component: main,
        meta: {role:['userSystem'] },
        children: [
            {
                path: '/setup',
                name: 'setup',
                component: () => import('@/view/setup.vue'),
                meta: { title: '设定开关', icon:markRaw(Open)}
            }
        ],
    }, {
        path: '/form',
        redirect: '/form/form',
        component: main,
        meta: {role:['userSystem'] },
        children: [
            {
                path: '/form',
                name: 'form',
                component: () => import('@/view/form.vue'),
                meta: { title: '表格', icon:markRaw(Grid)}
            }
        ],
    }, {
        path: '/course',
        redirect: '/course/course',
        component: main,
         meta: {role:['adminSystem','userSystem'],icon:markRaw(Help),title:'教程'},
        children: [
            {
                path: 'course',
                name: 'course',
                component: () => import('@/view/course.vue'),
                meta: { title: '教程', icon:markRaw(Help)},
            },{
                path:'english',
                name:'english',
                component: () => import('@/view/english.vue'),
                meta: { title: '英语教程', icon:markRaw(Help)},
               }
        ],
    }
]