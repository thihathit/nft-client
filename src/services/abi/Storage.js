import { reactive } from "vue"

// Hooks
import { useContracts } from "@/hooks/useContracts"

export const onDataSaved = (func = () => undefined) => {
    const { contracts } = useContracts()

    const { storage } = contracts

    storage.read.on("DataSaved", func)
}

export const storageGet = () => {
    const initialState = {
        loading: false,
        data: null,
        err: null,
    }

    const state = reactive(initialState)

    const { contracts } = useContracts()

    const { storage } = contracts

    const ajax = async (name) => {
        state.loading = true
        state.error = initialState.err
        state.data = initialState.data

        await storage.read
            .get(name)
            .then((data) => {
                state.data = data
            })
            .catch((err) => {
                state.error = err
            })

        state.loading = false
    }

    return {
        state,
        ajax,
    }
}

export const storageSet = () => {
    const initialState = {
        loading: false,
        data: null,
        err: null,
        transaction: null,
    }

    const state = reactive(initialState)

    const { contracts } = useContracts()

    const { storage } = contracts

    const ajax = async (name, value) => {
        state.loading = true
        state.data = initialState.data
        state.transaction = initialState.transaction
        state.error = initialState.err

        await storage.write
            .set(name, value)
            .then((data) => {
                state.data = value
                state.transaction = data
            })
            .catch((err) => {
                state.error = err
            })

        state.loading = false
    }

    return {
        state,
        ajax,
    }
}
