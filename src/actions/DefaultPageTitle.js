import { watchEffect } from "vue"
import { useRoute } from "vue-router"

import { appTitle } from "@/utilities"

const actionDefaultPageTitle = () => {
    const Route = useRoute()

    watchEffect(() => {
        const meta = Route.meta

        if (!meta) return

        let pageTitle = appTitle

        if (meta.title) {
            pageTitle = meta.title
        }

        document.title = pageTitle
    })
}

export default actionDefaultPageTitle
