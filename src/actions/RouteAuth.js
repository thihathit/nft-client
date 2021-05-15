import { useRouter } from "vue-router"
import { useStore } from "vuex"

import useWallet from "@/hooks/useWallet"

const actionRouteAuth = () => {
    const Store = useStore()
    const Router = useRouter()

    const { state } = useWallet()

    const { dispatch } = Store

    // Nav guards
    Router.beforeEach((to, from, next) => {
        // Auth redirect
        if (to.meta.auth && !state.ready) {
            dispatch("App/set_route_destination", to)

            next("/login")
        } else if (
            state.ready &&
            to.meta.redirectAuthenticated &&
            to.meta.redirectAuthenticated !== to.name
        ) {
            next({ name: to.meta.redirectAuthenticated })
        } else {
            next()
        }
    })
}

export default actionRouteAuth
