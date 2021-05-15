import { computed, inject, reactive, toRefs } from "vue"

const { ethereum } = window

export const useWallet = () => {
    const { state: metaMask, defaultState } = inject("services/metaMask")

    const state = reactive({
        ...toRefs(metaMask),
        refreshing: false,
        connecting: false,
        connected: computed(() =>
            Boolean(
                metaMask.installed &&
                    metaMask.accounts.length &&
                    !state.connecting
            )
        ),
        ready: computed(() => Boolean(state.connected && !state.refreshing)),
    })

    const resetState = () => {
        state.prefer_account = defaultState.prefer_account
        state.accounts = defaultState.accounts
    }

    const connect = async ({ onSuccess }) => {
        state.connecting = true

        const result = await ethereum
            .request({
                method: "eth_requestAccounts",
            })
            .catch(() => {
                resetState()
            })

        if (result) {
            state.accounts = result

            onSuccess && onSuccess(result)
        } else {
            resetState()
        }

        state.connecting = false
    }

    const refreshAccounts = async () => {
        state.refreshing = true

        const result = await ethereum
            .request({
                method: "eth_accounts",
            })
            .catch(() => {
                resetState()
            })

        if (result) {
            state.accounts = result
        } else {
            resetState()
        }

        state.refreshing = false
    }

    return {
        state,
        connect,
        refreshAccounts,
    }
}

export default useWallet
