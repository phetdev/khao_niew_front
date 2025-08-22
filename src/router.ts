import { createRouter, createWebHistory } from "vue-router";
import Catty from "./catty.vue";
const routes = [
    {
        path:'/a',
        name:'a',
        component:Catty
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes
})