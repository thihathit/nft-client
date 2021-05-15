<template>
    <div :class="['layouts layout-center-content', pageClass]">
        <div id="top">
            <header
                v-if="slots.header"
                id="header"
                :class="{ padded: isPadded('header') }"
            >
                <div class="inner">
                    <slot name="header" />
                </div>
            </header>

            <section
                v-if="slots.info"
                id="info"
                :class="{ padded: isPadded('info') }"
            >
                <div class="inner">
                    <slot name="info" />
                </div>
            </section>
        </div>

        <main id="middle">
            <section
                v-if="slots.highlight"
                id="highlight"
                :class="{ padded: isPadded('highlight') }"
            >
                <div class="inner">
                    <slot name="highlight" />
                </div>
            </section>

            <section
                v-if="slots.content || slots.default"
                id="content"
                class="padded"
            >
                <div class="inner">
                    <slot name="content" />
                    <slot />
                </div>
            </section>

            <section
                v-if="slots.lowlight"
                id="lowlight"
                :class="{ padded: isPadded('lowlight') }"
            >
                <div class="inner">
                    <slot name="lowlight" />
                </div>
            </section>
        </main>

        <div id="bottom">
            <section
                v-if="slots['pre-footer']"
                id="pre-footer"
                :class="{ padded: isPadded('pre-footer') }"
            >
                <div class="inner">
                    <slot name="pre-footer" />
                </div>
            </section>

            <footer
                v-if="slots.footer"
                id="footer"
                :class="{ padded: isPadded('footer') }"
            >
                <div class="inner">
                    <slot name="footer" />
                </div>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps, useContext } from "vue"

const { slots } = useContext()

const props = defineProps({
    padded: {
        type: Array,
        default: () => [],
    },
    pageName: {
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

const isPadded = (region) => props.padded.includes(region)

const pageClass = computed(() => {
    if (props.pageName) return `page-${props.pageName}`

    return undefined
})

const layoutMaxWidth = props.maxWidth
const layoutSideGap = props.sideGap
</script>

<style scoped lang="scss">
// Style settings
$layout-maxWidth: v-bind(layoutMaxWidth);
$layout-sideGap: v-bind(layoutSideGap);

:global(body) {
    overflow-y: auto;
    overflow-x: hidden;
}
:global(#app) {
    display: flex;
    min-height: 100%;
}

main {
    display: flex;
    align-items: center;

    > * {
        width: 100%;
    }
}

.layouts {
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr auto;
    min-height: 100%;
    min-height: stretch;
}
.layouts > * {
    width: 100%;
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
