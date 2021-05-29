<template>
    <Layout pageName="profile">
        <input type="text" v-model="models.value" placeholder="put something" />
        <button
            class="save"
            @click.prevent="onSave"
            :disabled="stateSet.loading"
        >
            Save
        </button>

        <br />
        <br />

        Value will refreshed(via smart contract event) in a few minutes...
        <br />
        <Loader v-if="stateGet.loading || stateSet.loading" />
        <div v-else>
            Saved value: <em>{{ stateGet.data }}</em>
        </div>
    </Layout>
</template>

<script setup>
import { onMounted, reactive } from "vue"

// Components
import Layout from "@/components/Layouts/Default.vue"

// Hooks
import useWallet from "@/hooks/useWallet"

// Services
import { storageGet, storageSet, onDataSaved } from "@/services/abi/Storage"

const models = reactive({
    value: null,
})

const { state: walletSatate } = useWallet()

const { state: stateGet, ajax: get } = storageGet()
const { state: stateSet, ajax: set } = storageSet()

const refresh = () => {
    get(walletSatate.default_account)
}

const onSave = () => {
    if (!models.value) {
        alert("put something")

        return
    }

    set(walletSatate.default_account, models.value)

    models.value = null

    refresh()
}

onMounted(refresh)
onDataSaved(refresh)
</script>

<style scoped></style>
