import { computed, reactive } from "vue"

const isMetaMaskInstalled = () => {
    const { ethereum } = window

    return Boolean(ethereum && ethereum.isMetaMask)
}

export const defaultState = {
    accounts: [],
    prefer_account: null,
}

export const state = reactive({
    ...defaultState,
    installed: isMetaMaskInstalled(),
    default_account: computed(() => {
        if (state.prefer_account) return state.prefer_account

        if (state.accounts.length) return state.accounts[0]

        return null
    }),
})

export const init = () => {}
