<template>
    <section class="upcoming-auctions">
        <h2>Upcoming live auctions</h2>

        <div class="list">
            <article class="auctions" />
            <article class="auctions" />
            <article class="auctions" />
            <article class="auctions" />
            <article class="auctions" />
            <article class="auctions" />
            <article class="auctions" />
            <article class="auctions" />
        </div>
    </section>
</template>

<style scoped lang="scss">
@import "@/styles/mixins/virtuals.scss";

.upcoming-auctions {
}

h2 {
    @include h2-normal(true);
}

.list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px;
}

.auctions {
    padding-bottom: 120%;

    background-color: var(--color_3);
}
</style>
