import { computed, inject, reactive, toRefs } from "vue"

export const useWallet = () => {
    const {
        state: metaMask,
        connect,
        refreshAccounts,
    } = inject("services/metaMask")

    const state = reactive({
        ...toRefs(metaMask),
        ready: computed(() => state.connected && !state.loading),
    })

    return {
        state,
        connect,
        refreshAccounts,
    }
}

export default useWallet
