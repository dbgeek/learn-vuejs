<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="colxs-12">
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    export default {
        components: {
            appHeader: Header
        },
        created() {
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }

    .slite-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }
    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translatY(-30px);
            opacity: 0;
        }
        to {
            transform: translatY(0);
            opacity: 1;

        }
    }
    @keyframes slide-out {
        from {
            transform: translatY(0);
            opacity: 1;
        }
        to {
            transform: translatY(-30px);
            opacity: 0;

        }
    }

</style>
