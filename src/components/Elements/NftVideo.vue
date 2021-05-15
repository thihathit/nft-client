<template>
    <section class="nft-video">
        <video :src="props.source" playsinline loop autoplay muted />

        <div class="ratio" :style="ratioStyle" />
    </section>
</template>

<script setup>
import { computed, defineProps } from "vue-demi"

const props = defineProps({
    w: {
        type: Number,
        default: 0,
    },
    h: {
        type: Number,
        default: 0,
    },
    source: {
        type: String,
        required: true,
    },
})

const ratioStyle = computed(() => {
    return {
        paddingBottom: `${(props.h / props.w) * 100}%`,
    }
})
</script>

<style scoped lang="scss">
.nft-video {
    position: relative;
    z-index: 0;

    video {
        width: 100%;
        height: 100%;

        position: absolute;
        z-index: 0;
        left: 0;
        top: 0;
    }

    .ratio {
        height: 0;
        width: 100%;
        pointer-events: none;
    }
}
</style>
