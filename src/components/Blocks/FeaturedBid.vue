<template>
    <section class="featured-bid">
        <article class="auction-product">
            <NftVideo
                :w="3"
                :h="1"
                source="https://ipfs.io/ipfs/QmPbFnwK9yekuGNT84EWHJsxCpv7FBN7qhiF9AZFwLKaNG/nft.mp4"
            />
        </article>

        <article class="info">
            <nav class="creator">
                <div class="container">
                    <div class="photo">
                        <div class="ratio" />
                    </div>

                    <div class="name">Nicolas Ulesia</div>
                </div>
            </nav>

            <section class="product">
                <h2 class="title">Lost in Paradise</h2>

                <div class="bid">
                    <section class="container">
                        <article class="value">
                            <label>Current Bid</label>

                            <div class="amount">45.0 ETH</div>

                            <div class="equivalent-amount">$20,745.10</div>
                        </article>

                        <article class="seperator" />

                        <article class="time">
                            <label>Auction ending in</label>

                            <section class="divided-time">
                                <article class="hour">
                                    <div class="number">4</div>
                                    <div class="unit">Hours</div>
                                </article>

                                <article class="minute">
                                    <div class="number">37</div>
                                    <div class="unit">Minutes</div>
                                </article>

                                <article class="second">
                                    <div class="number">16</div>
                                    <div class="unit">Seconds</div>
                                </article>
                            </section>
                        </article>
                    </section>
                </div>

                <div class="actions">
                    <div class="bid-button">Place a bid</div>

                    <router-link to="/product-detail" class="detail-button">
                        See detail
                    </router-link>
                </div>
            </section>
        </article>
    </section>
</template>

<script setup>
import NftVideo from "@/components/Elements/NftVideo.vue"
</script>

<style scoped lang="scss">
@import "@/styles/mixins/virtuals.scss";

.featured-bid {
    max-width: 1000px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    justify-content: space-between;
}

.auction-product .nft-video {
    min-height: 100%;

    @include drop-shadow-black(30px, false, false, 0.3);
}

.info {
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 25px;

    .creator {
        display: flex;

        .container {
            @include default-transition(box-shadow);
            @include box-shadow-black();

            display: grid;
            grid-template-columns: auto auto;
            align-items: center;
            grid-gap: 10px;

            padding: 10px;
            border-radius: 50px;
            cursor: default;

            .photo {
                border-radius: 100%;
                overflow: hidden;
                width: 30px;

                background-color: var(--dorminant_1);

                position: relative;
                z-index: 0;

                .ratio {
                    pointer-events: none;
                    width: 100%;
                    padding-bottom: 100%;
                }

                img {
                    position: absolute;
                    z-index: 0;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                }
            }

            .name {
                padding-right: 5px;
                font-size: 0.8em;
            }
        }
    }

    .product {
        display: grid;
        grid-template-columns: 100%;
        grid-gap: 25px;

        .title {
            font-size: 2.85em;
            font-weight: 600;
        }

        .bid {
            display: flex;

            .container {
                display: grid;
                grid-template-columns: auto auto auto;
                justify-content: space-between;
                grid-gap: 30px;
            }

            .seperator {
                width: 1px;
                background-color: var(--color_3);
                height: 100%;
            }

            label {
                display: block;
                font-size: 0.85em;
                font-weight: 500;
                margin-bottom: 8px;
            }

            .time .number,
            .value .amount {
                font-size: 1.35em;
                font-weight: 600;
                margin-bottom: 5px;
            }

            .time .unit,
            .value .equivalent-amount {
                font-weight: 500;
                color: var(--color_4);
            }

            .value .equivalent-amount {
                font-size: 0.95em;
            }
            .time .unit {
                font-size: 0.85em;
            }

            .divided-time {
                display: flex;
                flex-wrap: nowrap;

                > *:not(:last-child) {
                    margin-right: 20px;
                }
            }
        }

        .actions {
            max-width: 400px;
            display: grid;
            grid-template-columns: 1fr minmax(auto, 40%);
            grid-gap: 15px;

            .bid-button {
                @include cta-button-1();
            }

            .detail-button {
                @include cta-button-2();
            }
        }
    }
}
</style>
