<template>
    <section class="blocks main-navigation">
        <div class="info">
            <div class="site-info">
                <router-link to="/" class="logo">
                    <SvgLogo />
                </router-link>

                <div class="site">
                    <div class="name">Warsp.io</div>
                    <div class="slogan">nft project</div>
                </div>
            </div>

            <div class="search-box">
                <input
                    type="text"
                    v-model="state.keywords"
                    placeholder="Find your favourite artworks..."
                />
            </div>
        </div>

        <nav>
            <router-link to="/">Discover creations</router-link>
            <router-link to="/artist">Popular artists</router-link>
            <router-link to="/about-us">About us</router-link>
        </nav>

        <div class="actions">
            <router-link to="/contact-us">Contact Us</router-link>

            <router-link to="/login" class="highlighted">Sign In</router-link>
        </div>
    </section>
</template>

<script setup>
import { reactive, watchEffect } from "vue"

import SvgLogo from "@/components/Assets/Logo.svg.vue"
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

@mixin link-styles() {
    @include default-transition(color);

    display: block;
    color: var(--color_4);

    @include x-after();
    position: relative;
    z-index: 0;

    &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: var(--color_4);

        left: 50%;
        bottom: -10px;
        transform: translateX(-50%);

        opacity: 0;
        @include default-transition(opacity);
    }

    &.is-active-trail,
    &.is-active,
    &:hover {
        color: var(--color_1);

        &:after {
            opacity: 1;
        }
    }
}

.main-navigation {
    display: grid;
    grid-template-columns: 1fr 30% 1fr;
    grid-gap: 30px;
    align-items: center;

    a {
        text-decoration: none;
    }
}

.info {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 20px;
    align-items: center;
}

.site-info {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    align-items: center;
}

.site {
    // padding-top: 5px;
    .name {
        font-size: 0.87em;
        font-weight: 600;
    }
    .slogan {
        font-size: 0.55em;
        font-weight: 500;

        color: var(--color_4);
    }
}

.logo {
    width: 30px;

    display: block;

    @include drop-shadow-1();
    @include default-transition(filter);

    svg {
        display: block;
        width: 100%;
        height: auto;
    }
}

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

nav {
    font-size: 0.8em;
    font-weight: 500;

    margin: 0 auto;

    display: flex;
    align-items: center;

    > *:not(:last-child) {
        margin-right: 25px;
    }

    a {
        @include link-styles();
    }
}

.actions {
    margin-left: auto;
    display: flex;
    align-items: center;

    > *:not(:last-child) {
        margin-right: 25px;
    }

    a:not(.highlighted) {
        @include link-styles();

        font-size: 0.8em;
        font-weight: 500;
    }

    a.highlighted {
        @include default-transition(color background-color);

        @include featured-button-1();

        &:after {
            display: none;
        }
    }
}
</style>
