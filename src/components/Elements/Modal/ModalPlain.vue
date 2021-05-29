<template>
    <div :class="['modals', modalClass]" @click.self.prevent="onBlur">
        <slot />
    </div>
</template>

<script setup>
import { computed, defineEmit, defineProps } from "vue"

const emit = defineEmit(["blur"])

const props = defineProps({
    modalName: {
        type: String,
    },
})

const modalClass = computed(() => {
    if (props.modalName) return `modal-${props.modalName}`
})

const onBlur = () => {
    emit("blur")
}
</script>

<style scoped>
.modals {
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;

    overflow: auto;
}
</style>
