export const useDom = () => {
    const DOMBody = document.body

    const bodyScrollHide = () => {
        const hasClass = DOMBody.classList.contains("ov-h")

        if (!hasClass) DOMBody.classList.add("ov-h")
    }

    const bodyScrollShow = () => {
        const hasClass = DOMBody.classList.contains("ov-h")

        if (hasClass) DOMBody.classList.remove("ov-h")
    }

    return {
        bodyScrollHide,
        bodyScrollShow,
    }
}

export default useDom
