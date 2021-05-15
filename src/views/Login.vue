<template>
    <Layout pageName="login">
        <transition name="dom-effect-fade" mode="out-in">
            <div v-if="!state.installed">
                <a href="https://metamask.io">Please install wallet</a>
            </div>
            <button
                v-else-if="!state.connected"
                @click.prevent="connectWallet"
                :disabled="state.connecting"
            >
                Connect wallet
            </button>
        </transition>
    </Layout>
</template>

<script setup>
import Layout from "@/components/Layouts/CenterContent.vue"

import actionAuth from "@/actions/Auth"

import useWallet from "@/hooks/useWallet"

const { redirectDestination } = actionAuth()
const { state, connect } = useWallet()

const connectWallet = () => {
    connect({
        onSuccess: () => {
            redirectDestination({
                name: "home",
            })
        },
    })
}
</script>
