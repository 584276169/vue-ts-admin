import main from '@/components/layout/main.vue'  //布局文件
import { DataBoard, Open, Grid, Help } from '@element-plus/icons-vue'
export const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/view/login.vue'),
        meta: { title: '登录' }
    }
]
/**
 * 动态路由
 */
export const asyncRoutes = [
    {
        path: '/dashboard',
        component: main,
        redirect: '/dashboard/dashboard',
        meta: { role: ['adminSystem', 'userSystem'], menu: true },
        name: 'Dashboard',
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('@/view/dashboard.vue'),
                meta: { title: '仪表盘', icon: markRaw(DataBoard), role: ['adminSystem', 'userSystem'], menu: true }
            }
        ]
    },
    {
        path: '/setup',
        redirect: '/setup/setup',
        component: main,
        name: 'Setup',
        meta: { role: ['adminSystem'], menu: true },
        children: [
            {
                path: '/setup',
                name: 'setup',
                component: () => import('@/view/setup.vue'),
                meta: { title: '设定开关', icon: markRaw(Open), role: ['adminSystem'], menu: true }
            }
        ],
    }, {
        path: '/table',
        redirect: '/table/table',
        component: main,
        name: 'Table',
        meta: { role: ['adminSystem', 'userSystem'], menu: true },
        children: [
            {
                path: '/table',
                name: 'table',
                component: () => import('@/view/table.vue'),
                meta: { title: '表格', icon: markRaw(Grid), role: ['adminSystem', 'userSystem'], menu: true }
            }
        ],
    }, {
        path: '/course',
        component: main,
        name: 'Course',
        meta: { icon: markRaw(Help), title: '表格', role: ['adminSystem', 'userSystem'], menu: true },
        children: [
            {
                path: '/course/courseDetail',
                name: 'courseDetail',
                component: () => import('@/view/courseDetail.vue'),
                meta: { title: '详情', icon: markRaw(Help), role: ['adminSystem', 'userSystem'], menu: false },
            },
            {
                path: '/course/form',
                name: 'form',
                component: () => import('@/view/form.vue'),
                meta: { title: '表单', icon: markRaw(Help), role: ['adminSystem', 'userSystem'], menu: true, },
            }, {
                path: '/course/editor',
                name: 'editor',
                component: () => import('@/view/editor.vue'),
                meta: { title: '编辑', icon: markRaw(Help), role: ['adminSystem', 'userSystem'], menu: true },
            },
        ],
    }
]