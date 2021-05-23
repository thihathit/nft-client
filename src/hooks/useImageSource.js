export const useImageSource = () => {
    const load = (url, options = {}) => {
        const {
            success = () => undefined,
            settled = () => undefined,
            error = () => undefined,
        } = options

        const Img = new Image()

        Img.src = url

        Img.onload = function (...params) {
            success(...params)
            settled(...params)
        }
        Img.onerror = function (...params) {
            error(...params)
            settled(...params)
        }
    }

    return { load }
}

export default useImageSource
