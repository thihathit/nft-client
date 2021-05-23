<template>
    <section class="search-box">
        <input
            type="text"
            v-model="state.keywords"
            placeholder="Find your favourite artworks..."
        />
    </section>
</template>

<script setup>
import { reactive, watchEffect } from "vue"

// Hooks
import useDebounce from "@/hooks/useDebounce"

const debounce = useDebounce()

const state = reactive({
    keywords: null,
})

// On keywords changed
watchEffect(() => {
    const keywords = state.keywords

    if (!keywords) return

    debounce(() => {
        console.log(keywords)
    }, 380)
})
</script>

<style scoped lang="scss">
@import "@/styles/mixins/virtuals.scss";

.search-box {
    input {
        @include reset-input();
        @include default-transition(border-color);

        font-size: 0.8em;

        padding: 5px;

        width: 100%;
        border-bottom: 2px solid var(--color_3);

        &:hover {
            border-color: var(--dorminant_1);
        }
        &:focus {
            border-color: var(--color_2);
        }
    }
}
</style>
