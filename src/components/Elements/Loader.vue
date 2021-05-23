<template>
    <div
        :class="{
            loader: true,
            fullpage: props.fullpage,
            light: props.light,
            dark: props.dark,
            float: props.float,
            'has-background': props.hasBackground,
            'blur-background': props.blurBackground,
        }"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 50 50"
        >
            <path
                :fill="props.color"
                d="M30.9 42.993C40.68 39.704 45.94 29.1 42.65 19.33S28.767 4.288 18.987 7.577l1.297 3.856a14.62 14.62 0 0118.512 9.193c2.573 7.65-1.542 15.938-9.193 18.512l1.297 3.856z"
            />
        </svg>
    </div>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
    color: {
        type: String,
        default: "#242424",
    },
    fullpage: {
        type: Boolean,
        default: false,
    },
    hasBackground: {
        type: Boolean,
        default: false,
    },
    light: {
        type: Boolean,
        default: false,
    },
    dark: {
        type: Boolean,
        default: false,
    },
    float: {
        type: Boolean,
        default: false,
    },
    blurBackground: {
        type: Boolean,
        default: false,
    },
})
</script>

<style scoped lang="scss">
@import "@/styles/mixins/virtuals.scss";

@keyframes rotate {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}

.loader {
    cursor: progress;

    @include default-transition(background-color);

    svg path {
        @include default-transition(fill);
    }

    &.float {
        position: absolute;
        z-index: 0;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &.fullpage {
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999999;
        position: fixed;
    }
    &.light {
        &.has-background {
            background-color: rgb(255, 255, 255, 0.7);
        }

        svg path {
            fill: #fff;
        }
    }
    &.dark {
        &.has-background {
            background-color: rgb(0, 0, 0, 0.7);
        }

        svg path {
            fill: #000;
        }
    }
    &.blur-background {
        backdrop-filter: blur(20px);

        @include use-hardware-acceleration();
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
