<template>
    <section
        :class="[
            'nft-video',
            {
                'use-ratio': props.useRatio,
            },
        ]"
    >
        <article
            :class="{
                loading_data: state.loading_data,
                loading_cover: state.loading_cover,
                container: true,
            }"
        >
            <video
                :src="props.source"
                :poster="props.cover"
                playsinline
                loop
                autoplay
                muted
                :onload="onLoad"
                :onloadeddata="onLoadedData"
            />
        </article>

        <article class="ratio" :style="ratioStyle" />

        <transition name="dom-effect-fade" mode="out-in">
            <Loader
                v-if="state.loading_data"
                :float="true"
                :light="!state.loading_cover"
                :dark="state.loading_cover"
            />
        </transition>
    </section>
</template>

<script setup>
import { computed, defineProps, reactive } from "vue"
import { useImageSource } from "@/hooks/useImageSource"

const state = reactive({
    loading_data: true,
    loading_cover: true,
})

const { load: loadImage } = useImageSource()

const props = defineProps({
    w: {
        type: Number,
        default: 0,
    },
    h: {
        type: Number,
        default: 0,
    },
    useRatio: {
        type: Boolean,
        default: false,
    },
    source: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
    },
})

const ratioStyle = computed(() => {
    return {
        paddingBottom: `${(props.h / props.w) * 100}%`,
    }
})

const onLoad = () => {
    state.loading_data = true
}

const onLoadedCover = () => {
    state.loading_cover = false
}

const onLoadedData = () => {
    // Make sure cover loaded first
    onLoadedCover()

    state.loading_data = false
}

loadImage(props.source, {
    settled: onLoadedCover,
})
</script>

<style scoped lang="scss">
@import "@/styles/mixins/virtuals.scss";

.nft-video {
    position: relative;
    z-index: 0;

    .container {
        position: relative;
        z-index: 0;
        left: 0;
        top: 0;

        width: 100%;
        height: 100%;

        opacity: 1;
        filter: blur(0);

        @include use-hardware-acceleration();

        @include default-transition(opacity filter);

        &.loading_cover {
            opacity: 0;
        }

        &.loading_data {
            filter: blur(15px);
        }
    }

    video {
        width: 100%;
        height: auto;
    }

    .loader {
        z-index: 1 !important;
    }

    .ratio {
        height: 0;
        width: 100%;
        pointer-events: none;

        display: none;
    }

    &.use-ratio {
        .container {
            position: absolute;
            z-index: 0;
            left: 0;
            top: 0;
        }

        video {
            width: 100%;
            height: 100%;
        }

        .ratio {
            display: block;
        }
    }
}
</style>
