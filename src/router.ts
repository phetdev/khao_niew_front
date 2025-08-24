import { createRouter, createWebHistory } from "vue-router";
import Catty from "./catty.vue";
import { routerAuth } from "./Modules/Auth/router";
import {routerUser} from "./Modules/User/router"
import layout from "./Layouts/layout.vue"
const routes = [
    {
        path: '/a',
        name: 'a',
        component: Catty
    },
    {
        path: '/layout',
        name: 'layout',
        component: layout,
        children: [
            
        ]
    },
    ...routerAuth,
    ...routerUser,
]
export const router = createRouter({
    history: createWebHistory(),
    routes
})