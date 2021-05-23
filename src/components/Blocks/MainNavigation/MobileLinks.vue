<template>
    <Modal modalName="mobile-links" :light="true" @blur="emit('close')">
        <footer>
            <button @click.prevent="emit('close')">
                <Back />
                <span>Quit Menu</span>
            </button>
        </footer>

        <nav class="links">
            <div class="items">
                <router-link to="/">Discover creations</router-link>
            </div>
            <div class="items">
                <router-link to="/artist">Popular artists</router-link>
            </div>
            <div class="items">
                <router-link to="/about-us">About us</router-link>
            </div>

            <div class="items">
                <router-link to="/contact-us">Contact Us</router-link>
            </div>

            <div class="items">
                <router-link to="/login" class="highlighted"
                    >Sign In</router-link
                >
            </div>
        </nav>
    </Modal>
</template>

<script setup>
import { defineEmit, onActivated, onDeactivated } from "vue"

// Components
import Modal from "@/components/Elements/Modal/index.vue"

// Assets
import Back from "@/components/Assets/Back.vue"

// Hooks
import useDom from "@/hooks/useDom"

const { bodyScrollHide, bodyScrollShow } = useDom()

const emit = defineEmit(["close"])

onActivated(bodyScrollHide)
onDeactivated(bodyScrollShow)
</script>

<style scoped lang="scss">
@import "@/styles/mixins/virtuals.scss";

.links {
    padding-left: 40px;

    pointer-events: none;

    .items {
        display: flex;

        &:not(:last-child) {
            margin-bottom: 25px;
        }
    }

    a {
        display: block;
        pointer-events: auto;
        text-decoration: none;
    }

    a:not(.highlighted) {
        @include default-transition(color);

        color: var(--color_4);

        font-size: 0.8em;
        font-weight: 500;

        @include x-after();
        position: relative;
        z-index: 0;

        &:after {
            width: 4px;
            height: 4px;
            border-radius: 100%;
            background-color: var(--color_4);

            top: 50%;
            left: -10px;
            transform: translateY(-50%);

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

    a.highlighted {
        @include default-transition(color background-color);

        @include featured-button-1();
    }
}

footer {
    margin-bottom: 30px;

    pointer-events: none;
}

button {
    @include reset-button();
    @include default-transition(opacity);

    font-size: 1.1em;
    font-weight: 500;

    pointer-events: auto;
    display: flex;
    align-items: center;

    opacity: 1;

    &:hover {
        opacity: 0.5;
    }

    svg {
        width: 14px;
        margin-right: 10px;
    }
}
</style>
