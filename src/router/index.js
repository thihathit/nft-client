import { createRouter, createWebHistory } from "vue-router"

import { getAppTitle } from "@/utilities"

// Sync Pages
import Home from "@/views/Home.vue"
import PageNotFound from "@/views/404.vue"
import Login from "@/views/Login.vue"
// import Logout from "@/views/Logout.vue"

// Async Pages
// const Page = () => import('@/views/Page.vue')

// const useRouteProps = route => ({ ...route.params, ...route.query })

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            title: getAppTitle({
                title: "Home",
            }),
        },
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            title: getAppTitle({
                title: "Login",
            }),
            redirectAuthenticated: "home",
        },
    },
    // {
    //     path: "/logout",
    //     name: "logout",
    //     component: Logout,
    //     meta: {
    //         title: getAppTitle({
    //             title: "Logout",
    //         }),
    //     },
    // },

    // Default pages
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: PageNotFound,
        meta: {
            title: getAppTitle({
                title: "404 Page not found",
            }),
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "is-active-trail",
    linkExactActiveClass: "is-active",
    routes,
})

export default router
