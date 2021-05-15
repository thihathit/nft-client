<template>
    <div
        :class="{
            loader: true,
            fullpage,
            'light-background': lightBackground,
            'dark-background': darkBackground,
            shape,
        }"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 50 50"
        >
            <path
                :fill="formattedColor"
                d="M30.9 42.993C40.68 39.704 45.94 29.1 42.65 19.33S28.767 4.288 18.987 7.577l1.297 3.856a14.62 14.62 0 0118.512 9.193c2.573 7.65-1.542 15.938-9.193 18.512l1.297 3.856z"
            />
        </svg>

        <div v-if="shape" class="shape" :style="shapeStyle" />
    </div>
</template>

<script setup>
import { computed, defineProps, inject } from "vue"

const { styles } = inject("theme/app")

const props = defineProps({
    color: {
        type: String,
    },
    fullpage: {
        type: Boolean,
        default: false,
    },
    lightBackground: {
        type: Boolean,
        default: false,
    },
    darkBackground: {
        type: Boolean,
        default: false,
    },
    shape: {
        type: Boolean,
        default: false,
    },
    w: {
        type: Number,
    },
    h: {
        type: Number,
    },
})

const formattedColor = computed(() => props.color || styles.value.dorminant_4)

const shapeStyle = computed(() => {
    const styles = {}

    if (props.w) styles["padding-left"] = `${props.w}%`
    if (props.h) styles["padding-bottom"] = `${props.h}%`

    return styles
})
</script>

<style scoped lang="scss">
@keyframes rotate {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}

.loader {
    &.fullpage {
        cursor: progress;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        height: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.7);
        z-index: 9999999;
        position: fixed;
    }
    &.light-background {
        background-color: var(--color_6);
    }
    &.dark-background {
        background-color: #1a1a1a;
    }

    &.shape {
        position: relative;
        z-index: 0;

        svg {
            position: absolute;
            z-index: 1;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .shape {
        position: relative;
        z-index: 0;
        pointer-events: none;
    }

    svg {
        display: block;
        max-width: 100%;
        height: auto;
        margin: 0 auto;

        path {
            transform-origin: center;
            animation: 0.6s linear infinite rotate;
        }
    }
}
</style>
