<template>
    <Layout pageName="login">
        <transition name="dom-effect-fade" mode="out-in">
            <div>
                <a v-if="!state.installed" href="https://metamask.io"
                    >Please install wallet</a
                >

                <button
                    v-else-if="!state.connected"
                    @click.prevent="connectWallet"
                    :disabled="state.connecting"
                >
                    Connect wallet
                </button>
            </div>
        </transition>
    </Layout>
</template>

<script setup>
// Components
import Layout from "@/components/Layouts/CenterContent.vue"

// Actions
import actionAuth from "@/actions/Auth"

// Hooks
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
