export const appTitle = import.meta.env.VITE_TITLE

export const getAppTitle = (options = {}) => {
    const {
        title,
        suffix = appTitle,
        addSuffix = true,
        returnAppTitle = true,
    } = options

    if (title === undefined && returnAppTitle) {
        return appTitle
    }

    if (addSuffix) {
        return `${title} — ${suffix}`
    }

    return title
}

export const arrayGroup = (items, count) => {
    let GroupedItems = []
    const Group = []

    const total = items.length

    items.map((item, index) => {
        GroupedItems.push(item)

        if (GroupedItems.length >= count || total == index + 1) {
            Group.push(GroupedItems)
            GroupedItems = []
        }
    })

    return Group
}

export const arrayRotate = (arr, count) => {
    return [...arr.slice(count, arr.length), ...arr.slice(0, count)]
}

// shorten when exceeds
export const shortenByCharacters = (
    text,
    length,
    ellipsis,
    ellipsisCharacter
) => {
    if (!ellipsisCharacter) {
        ellipsisCharacter = "..."
    }

    if (text.length > length) {
        return `${text.substring(0, length)}${
            ellipsis ? ellipsisCharacter : ""
        }`
    }

    return text
}

export const thousandSeperator = (number) => {
    // return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return number.toLocaleString("en")
}

export const copyToClipboard = (string) => {
    const el = document.createElement("textarea")

    el.value = string

    el.setAttribute("readonly", "")
    el.style.position = "absolute"
    el.style.left = "-9999px"

    document.body.appendChild(el)

    el.select()
    document.execCommand("copy")

    document.body.removeChild(el)
}

export const wait = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}
