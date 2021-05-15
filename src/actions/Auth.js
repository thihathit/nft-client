import { useRouter } from "vue-router"
import { useStore } from "vuex"

const actionAuth = () => {
    const Router = useRouter()
    const Store = useStore()

    const {
        dispatch,
        state: { App },
    } = Store

    const redirectDestination = (fallback, forceFallback = false) => {
        const target = App.route_destination || fallback

        dispatch("App/set_route_destination", undefined)

        if (forceFallback) Router.replace(fallback)

        if (target) Router.replace(target)
    }

    return {
        redirectDestination,
    }
}

export default actionAuth
