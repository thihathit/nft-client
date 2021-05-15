<template>
    <div :class="['regions', regionClass]" @click.self.prevent="onBlur">
        <header
            :class="{ padded: isPadded('header') }"
            @click.self.prevent="onBlur"
        >
            <div v-if="slots.header" class="inner" @click.self.prevent="onBlur">
                <slot name="header" />
            </div>
        </header>

        <main
            :class="{ padded: isPadded('content') }"
            @click.self.prevent="onBlur"
        >
            <div
                v-if="slots.content"
                class="inner"
                @click.self.prevent="onBlur"
            >
                <slot name="content" />
            </div>
        </main>

        <footer
            :class="{ padded: isPadded('footer') }"
            @click.self.prevent="onBlur"
        >
            <div v-if="slots.footer" class="inner" @click.self.prevent="onBlur">
                <slot name="footer" />
            </div>
        </footer>
    </div>
</template>

<script setup>
import { computed, defineProps, defineEmit, useContext } from "vue"

const { slots } = useContext()
const emit = defineEmit(["blur"])

const props = defineProps({
    padded: {
        type: Array,
        default: () => [],
    },
    regionName: {
        type: String,
    },
    maxWidth: {
        type: String,
        default: "700px",
    },
    sideGap: {
        type: String,
        default: "20px",
    },
})

const regionClass = computed(() => {
    if (props.regionName) return `region-${props.regionName}`

    return undefined
})

const isPadded = (region) => props.padded.includes(region)

const onBlur = () => {
    emit("blur")
}

const layoutMaxWidth = props.maxWidth
const layoutSideGap = props.sideGap
</script>

<style scoped lang="scss">
// Style settings
$layout-maxWidth: v-bind(layoutMaxWidth);
$layout-sideGap: v-bind(layoutSideGap);

.regions {
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr auto;
    min-height: 100%;
    min-height: stretch;

    > * {
        width: 100%;
    }
}

.padded {
    > .inner {
        max-width: $layout-maxWidth;
        padding-left: $layout-sideGap;
        padding-right: $layout-sideGap;
        box-sizing: content-box;

        margin: 0 auto;
    }
}
</style>
