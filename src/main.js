// polyfills
import "es6-promise/auto"

import { createApp } from "vue"

import App from "./App.vue"
import router from "./router"
import store from "./store"

import Loader from "@/components/Elements/Loader.vue"

// providers
import * as MetaMask from "@/providers/metamask"
import * as Network from "@/providers/network"

import "minireset.css"
import "@/styles/defaults.scss"

import "@/styles/fonts.scss"
import "@/styles/effects.scss"
import "@/styles/form-elements.scss"

const mainApp = createApp(App)

// register providers
mainApp.provide("services/metaMask", MetaMask)
mainApp.provide("services/network", Network)

// register plugins
mainApp.use(router)
mainApp.use(store)

// register components
mainApp.component("Loader", Loader)

mainApp.mount("#app")
