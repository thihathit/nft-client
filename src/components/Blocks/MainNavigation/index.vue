<template>
    <section class="blocks main-navigation">
        <transition name="dom-effect-fade" mode="out-in">
            <article v-if="props.isMedium" class="medium">
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

                    <SearchBox />
                </div>

                <nav class="actions">
                    <router-link to="/">Discover creations</router-link>
                    <router-link to="/artist">Popular artists</router-link>
                    <router-link to="/about-us">About us</router-link>

                    <router-link to="/contact-us">Contact Us</router-link>

                    <router-link to="/login" class="highlighted"
                        >Sign In</router-link
                    >
                </nav>
            </article>

            <article v-else-if="props.isSmall" class="small">
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

                    <SearchBox />
                </div>

                <div class="menu-actions">
                    <button class="menu-control" @click.prevent="toggleMenu">
                        <ThreeBars />
                    </button>
                </div>
            </article>

            <article v-else class="full">
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

                    <SearchBox />
                </div>

                <nav class="main-links">
                    <router-link to="/">Discover creations</router-link>
                    <router-link to="/artist">Popular artists</router-link>
                    <router-link to="/about-us">About us</router-link>
                </nav>

                <nav class="actions">
                    <router-link to="/contact-us">Contact Us</router-link>

                    <router-link to="/login" class="highlighted"
                        >Sign In</router-link
                    >
                </nav>
            </article>
        </transition>
    </section>

    <teleport to="body">
        <transition name="mobile-nav-effect" mode="out-in">
            <keep-alive>
                <MobileLinks v-if="state.menu_open" @close="closeMenu" />
            </keep-alive>
        </transition>
    </teleport>
</template>

<script setup>
import { defineProps, onDeactivated, reactive } from "vue"

// Components
import SvgLogo from "@/components/Assets/Logo.svg.vue"

// Sub-components
import MobileLinks from "./MobileLinks.vue"
import SearchBox from "./SearchBox.vue"

// Assets
import ThreeBars from "@/components/Assets/ThreeBars.vue"

const props = defineProps({
    isMedium: {
        type: Boolean,
        default: false,
    },
    isSmall: {
        type: Boolean,
        default: false,
    },
})

const state = reactive({
    menu_open: false,
})

const toggleMenu = () => {
    state.menu_open = !state.menu_open
}

const closeMenu = () => {
    state.menu_open = false
}

onDeactivated(closeMenu)
</script>

<style scoped lang="scss">
@import "@/styles/mixins/media-queries.scss";
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
    a {
        text-decoration: none;
    }

    .site-info {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 10px;
        align-items: center;

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
    }

    .info {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 20px;
        align-items: center;
    }

    .menu-control {
        @include reset-button();
        width: 18px;
    }

    .main-links {
        margin: 0 auto;
        font-size: 0.8em;
        font-weight: 500;
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

    .full {
        display: grid;
        grid-template-columns: 1fr 30% 1fr;
        grid-gap: 30px;
        align-items: center;
    }

    .medium {
        display: grid;
        grid-template-columns: minmax(auto, 40%) auto;
        grid-gap: 30px;
        justify-content: space-between;
        align-items: center;

        @include screen-max(950) {
            .logo {
                width: 25px;
            }

            .search-box,
            .site,
            .actions {
                font-size: 0.8em;
            }
        }
    }

    .small {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 20px;
        justify-content: space-between;
        align-items: center;

        .logo {
            width: 18px;
        }

        .site {
            font-size: 0.7em;
        }

        @include screen-max(550) {
            .search-box {
                font-size: 0.8em;
            }
        }
    }
}
</style>
