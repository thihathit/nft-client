import { useRouter } from "vue-router"
import { useStore } from "vuex"

// Hooks
import useWallet from "@/hooks/useWallet"

const actionRouteAuth = () => {
    const Store = useStore()
    const Router = useRouter()

    const { state, connect } = useWallet()

    const { dispatch } = Store

    // Nav guards
    Router.beforeEach(async (to, from, next) => {
        // Auto-login at auth required routes
        if (to.meta.auth && state.installed) {
            await connect()
        }

        const isAuthorized = state.ready

        // Auth redirect
        if (to.meta.auth && !isAuthorized) {
            dispatch("App/set_route_destination", to)

            next("/login")
        } else if (
            isAuthorized &&
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
