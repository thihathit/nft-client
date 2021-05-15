export const useDebounce = () => {
    let DebounceTimer

    return (fn, ms) => {
        clearTimeout(DebounceTimer)

        DebounceTimer = setTimeout(() => {
            fn()
        }, ms)
    }
}

export default useDebounce
