<template>
    <router-view v-slot="{ Component }">
        <transition name="page-effect" mode="out-in">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </transition>
    </router-view>
</template>

<script setup>
import { inject } from "vue"

import actionDefaultPageTitle from "@/actions/DefaultPageTitle"
import actionRouteAuth from "@/actions/RouteAuth"

const MetaMask = inject("services/metaMask")
const Network = inject("services/network")

// Init MetaMask sdk
MetaMask.init()

// Init BlockChain network
Network.init()

// DOM Initialize
actionRouteAuth()
actionDefaultPageTitle()
</script>
