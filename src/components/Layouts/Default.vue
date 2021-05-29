<template>
    <div :class="['layouts layout-default', pageClass]">
        <header
            id="header"
            :class="{ active: isScrolled, style2: isMedium || isSmall }"
        >
            <div class="inner">
                <MainNavigation :isMedium="isMedium" :isSmall="isSmall" />
            </div>
        </header>

        <section v-if="slots.highlight" id="highlight">
            <slot name="highlight" />
        </section>

        <main v-if="slots.content || slots.default" id="content" class="padded">
            <div class="inner">
                <slot name="content" />
                <slot />
            </div>
        </main>

        <section v-if="slots.lowlight" id="lowlight">
            <slot name="lowlight" />
        </section>

        <footer id="footer">
            <div class="footer-text">Warps.io — nft project</div>
        </footer>
    </div>
</template>

<script setup>
import { computed, defineProps, useContext } from "vue"
import { useWindowScroll, useWindowSize } from "@vueuse/core"

import MainNavigation from "@/components/Blocks/MainNavigation/MainNavigationContainer.vue"

const { slots } = useContext()

const viewport = useWindowSize()
const { y: winScrollY } = useWindowScroll()

const props = defineProps({
    pageName: {
        type: String,
    },
    maxWidth: {
        type: String,
        default: "1200px",
    },
    sideGap: {
        type: String,
        default: "20px",
    },
})

const isScrolled = computed(() => winScrollY.value > 0)
const isSmall = computed(() => viewport.width.value <= 850)
const isMedium = computed(() => !isSmall.value && viewport.width.value < 1240)

const pageClass = computed(() => {
    if (props.pageName) return `page-${props.pageName}`

    return undefined
})

const layoutMaxWidth = props.maxWidth
const layoutSideGap = props.sideGap
</script>

<style scoped lang="scss">
@import "@/styles/mixins/virtuals.scss";

// Style settings
$layout-maxWidth: v-bind(layoutMaxWidth);
$layout-sideGap: v-bind(layoutSideGap);

@mixin center-content() {
    max-width: $layout-maxWidth;
    padding-left: $layout-sideGap;
    padding-right: $layout-sideGap;
    box-sizing: content-box;

    margin: 0 auto;
}

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

    .inner {
        @include center-content();
    }

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

footer {
    margin-top: auto;
}

header {
    background-color: rgb(var(--base_color_1_rgb), 0.8);
    backdrop-filter: blur(20px);
    padding: 30px 0;

    position: sticky;
    z-index: 9999;
    top: 0;
    left: 0;

    @include use-hardware-acceleration();

    @include default-transition(box-shadow padding);

    &.active {
        padding: 18px 0;
        box-shadow: 0 0 20px rgb(0 0 0 / 4%);
    }

    .inner {
        @include center-content();
    }

    &.style2 {
        padding: 20px 0;
    }
}

.footer-text {
    font-size: 0.8em;
    font-weight: 300;
    color: var(--color_4);

    text-align: center;
    padding: 40px 0;
}
</style>
