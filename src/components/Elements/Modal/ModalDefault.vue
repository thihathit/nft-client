<template>
    <ModalPlain
        :modalName="modalName"
        :class="[
            'modal-default',
            {
                light: props.light,
                dark: props.dark,
            },
        ]"
        @blur="onBlur"
    >
        <div class="inner" @click.self.prevent="onBlur">
            <div class="wrapper">
                <div class="content">
                    <slot />
                </div>
            </div>
        </div>
    </ModalPlain>
</template>

<script setup>
import { defineProps } from "vue"

import ModalPlain from "@/components/Elements/Modal/ModalPlain.vue"

const emit = defineEmit(["blur"])

const props = defineProps({
    modalName: {
        type: String,
    },
    light: {
        type: Boolean,
        default: false,
    },
    dark: {
        type: Boolean,
        default: false,
    },
})

const onBlur = () => {
    emit("blur")
}
</script>

<style scoped lang="scss">
@import "@/styles/mixins/virtuals.scss";

.modal-default {
    overflow: auto;
    display: grid;
    grid-template-columns: minmax(0, auto);
    justify-content: center;
    align-items: center;

    &.light {
        background-color: rgb(255, 255, 255, 0.7);
    }
    &.dark {
        background-color: rgb(0, 0, 0, 0.7);
    }

    backdrop-filter: blur(20px);

    @include use-hardware-acceleration();
}

.inner {
    padding: 50px 15px;
    max-width: 100%;
}
</style>
