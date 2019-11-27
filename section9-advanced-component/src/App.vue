<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>default Content!</p>
                    </component>
                </keep-alive>
               <!--<app-quote>
                   <h2 slot="title">The quote</h2>
                   <p slot="content">{{ text }}</p>
                </app-quote>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    import appAuthor from './components/Author.vue'
    import appNew from './components/New.vue'

    export default {
        components: {
            appQuote: Quote,
            appAuthor,
            appNew
        },
        data: function () {
            return {
                text: "A Wonderful qutoe!",
                selectedComponent: 'app-quote'
            }
        }
    }
</script>

<style>

</style>
