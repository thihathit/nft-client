<template>
    <Layout pageName="home">
        <template #content>
            <div class="container">
                <FeaturedBid />

                <UpcomingAuctions />
            </div>
        </template>
    </Layout>
</template>

<script setup>
import Layout from "@/components/Layouts/Default.vue"
import FeaturedBid from "@/components/Blocks/FeaturedBid.vue"
import UpcomingAuctions from "@/components/Blocks/UpcomingAuctions.vue"
</script>

<style scoped lang="scss">
@import "@/styles/mixins/media-queries.scss";

:global(body) {
    background-color: var(--base_color_1);
}

.container {
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 50px;
}

.featured-bid {
    padding: 100px 0;

    @include screen-max(1000) {
        padding: 30px 0;
    }
}
</style>
