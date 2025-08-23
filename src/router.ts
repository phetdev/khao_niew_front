import { createRouter, createWebHistory } from "vue-router";
import Catty from "./catty.vue";
import { routerAuth } from "./Modules/User/router";
const routes = [
    {
        path:'/a',
        name:'a',
        component:Catty
    },
    ...routerAuth,
]
export const router = createRouter({
    history: createWebHistory(),
    routes
})