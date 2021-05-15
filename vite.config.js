import path from "path"

import { defineConfig } from "vite"

import vuePlugin from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vuePlugin()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
})
