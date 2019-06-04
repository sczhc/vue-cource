import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path:'/',
        name:'home',
        component: resolve => require(["@/views/Home.vue"], resolve)
    },
    {
        path:'/split-pane',
        component: resolve => require(["@/views/split-pane.vue"], resolve)
    },
    {
        path:'/menu-page',
        component: resolve => require(["@/views/menu-page.vue"], resolve)
    }
]

const router = new Router({
    mode: 'history',
    routes
})

export default router