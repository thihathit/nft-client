import { onMounted, onUnmounted, reactive, toRefs, watchEffect } from "vue"

export const useWindowResize = (handler = () => undefined) => {
    const state = reactive({
        viewport: {
            width: 0,
            height: 0,
        },
    })

    const onResize = () => {
        state.viewport.width = window.innerWidth
        state.viewport.height = window.innerHeight
    }

    watchEffect(() => {
        handler(state)
    })

    onMounted(() => {
        onResize()
        window.addEventListener("resize", onResize)
    })
    onUnmounted(() => window.removeEventListener("resize", onResize))

    return toRefs(state)
}

export default useWindowResize
