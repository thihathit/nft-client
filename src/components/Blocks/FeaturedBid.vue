<template>
    <section class="featured-bid">
        <article class="auction-product">
            <NftVideo
                :w="3"
                :h="1"
                :useRatio="useRatio"
                source="https://ipfs.io/ipfs/QmPbFnwK9yekuGNT84EWHJsxCpv7FBN7qhiF9AZFwLKaNG/nft.mp4"
                cover="https://d2ybmb80bbm9ts.cloudfront.net/Ka/NG/QmPbFnwK9yekuGNT84EWHJsxCpv7FBN7qhiF9AZFwLKaNG/nft.jpg"
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
import { computed } from "vue"

// Hooks
import { useWindowSize } from "@vueuse/core"

// Components
import NftVideo from "@/components/Elements/NftVideo.vue"

const viewport = useWindowSize()

const useRatio = computed(() => viewport.width.value >= 1000)
</script>

<style scoped lang="scss">
@import "@/styles/mixins/media-queries.scss";
@import "@/styles/mixins/virtuals.scss";

.featured-bid {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    justify-content: space-between;

    @include screen-max(1000) {
        grid-template-columns: 100%;
        grid-gap: 25px;
    }
}

.auction-product .nft-video {
    &.use-ratio {
        min-height: 100%;
    }

    :deep(video) {
        @include drop-shadow-black(30px, false, false, 0.2);

        @include screen-max(1000) {
            @include drop-shadow-black(30px, false, false, 0.1);
        }
    }
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
        }

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
            width: 100%;
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

    @include screen-max(1000) {
        .creator {
            justify-content: center;

            .container {
                padding: 8px;

                font-size: 0.8em;
            }

            .photo {
                width: 24px;
            }
        }

        .product {
            .title {
                text-align: center;
            }

            .bid,
            .actions {
                margin: 0 auto;
            }

            .actions {
                grid-template-columns: 1fr 1fr;
            }
        }
    }

    @include screen-max(900) {
        .product {
            .title {
                font-size: 2.5em;
            }

            .bid {
                font-size: 0.8em;
            }

            .actions {
                max-width: 300px;
                grid-gap: 10px;

                .bid-button {
                    @include cta-button-1("medium");
                }

                .detail-button {
                    @include cta-button-2("medium");
                }
            }
        }
    }

    @include screen-max(550) {
        .product {
            .actions {
                grid-template-columns: 100%;
            }
        }
    }
}
</style>
