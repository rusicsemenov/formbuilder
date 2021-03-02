<template>
    <div id="app">
        <img class="logo" alt="logo" src="./assets/logo-white.svg" />
        <div class="my-2">
            <button
                class="btn btn-primary m-1 px-4"
                @click="component = 'Sortable'"
            >
                Grid
            </button>
            <button
                class="btn btn-primary m-1 px-4"
                @click="component = 'Mail'"
            >
                Mail
            </button>
            <button
                class="btn btn-primary m-1 px-4"
                @click="component = 'Render'"
            >
                Grid renred
            </button>
        </div>
        <component :is="component" />
    </div>
</template>

<script>
export default {
    name: "App",
    components: {
        Sortable: () => import("./components/Sortable.vue"),
        Mail: () => import("./components/Mail.vue"),
        Render: () => import("./components/Render.vue"),
    },
    data() {
        return {
            component: "Render",
        };
    },
};
</script>

<style lang="sass">
body
    padding: 0
    margin: 0
    min-height: 100vh

#app
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    background: url("./assets/main_bg.jpg")
    min-height: 100vh

.logo
    max-width: 200px
    margin: 1rem

ul
    padding: 0
    margin: 0
    border: 1px solid black
    min-height: 200px
    background-color: white

li
    list-style: none
    padding: 1rem
    cursor: pointer
    position: relative
    overflow: hidden

    &:hover
        background-color: rgba(blue, .05)
        >.action-buttons, >.render-label
            transform: translateX(0)

    .action-buttons,
        transform: translateX(150%)
        transition: 200ms transform
        position: absolute
        top: 0
        right: 0

    .render-label
        transform: translateX(-150%)
        transition: 200ms transform
        position: absolute
        font-size: 15px
        opacity: 0.2
        top: 5px
        left: 5px

.flex
    display: flex
    >*
        flex: 1 1 auto

.ghost
    opacity: 0.1
.list
    flex: 0 1 20%
</style>
