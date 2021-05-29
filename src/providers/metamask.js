import { computed, reactive } from "vue"

const isMetaMaskInstalled = () => {
    const { ethereum } = window

    return Boolean(ethereum && ethereum.isMetaMask)
}

export const defaultState = {
    accounts: [],
    prefer_account: null,
    refreshing: false,
    connecting: false,
}

export const state = reactive({
    ...defaultState,
    installed: isMetaMaskInstalled(),
    default_account: computed(() => {
        if (state.prefer_account) return state.prefer_account

        if (state.accounts.length) return state.accounts[0]

        return null
    }),
    connected: computed(() => state.installed && state.default_account),
    network_connected: computed(
        () => state.installed && window.ethereum.isConnected()
    ),
    loading: computed(() => state.connecting || state.refreshing),
})

export const resetState = () => {
    state.prefer_account = defaultState.prefer_account
    state.accounts = defaultState.accounts
}

export const connect = async ({ onSuccess = () => undefined } = {}) => {
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

        onSuccess(result)
    } else {
        resetState()
    }

    state.connecting = false
}

export const refreshAccounts = async () => {
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

export const init = () => {}
