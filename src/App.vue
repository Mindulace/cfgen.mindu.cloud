<template>
    <div id="app">
        <nav class="navbar navbar-dark bg-dark color-white">
            <a class="navbar-brand" href="/">
                cfgen.mindu.cloud
            </a>
        </nav>
        <index />
    </div>
</template>

<script>
import index from './pages/'
import store from './store/'

export default {
    name: 'App',
    store,
    components: {
        index
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
