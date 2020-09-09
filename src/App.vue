<template>
    <div id="app">
        <nav class="navbar navbar-dark bg-dark color-white">
            <a class="navbar-brand" href="/">
                <b>mindu.cloud</b> - Custom Field
            </a>
        </nav>
        <index />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import index from './pages/'
import store from './store/'

export default {
    name: 'App',
    store: store,
    components: {
        index
    },
    computed: mapState(['notifications']),
    watch: {
        notifications() {
            var currentNotification = this.$store.getters.getNewestNotification();

            alert(`Title: ${currentNotification.getTitle()}, Text: ${currentNotification.getText()}, Timeout: ${currentNotification.getTimeout()}`);
            this.$store.commit('removeNotification', currentNotification);
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap');

#app {
    font-family: 'Kumbh Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.dark-mode {
    background: #2b3038 !important
}

.dark-mode #app {
    background: #2b3038;
}

.dark-mode hr {
    border-color: #565656
}

.dark-mode .btn-primary {
    background-color: var(--light) !important;
    color: var(--dark) !important;
}

.btn-danger {
    background-color: #f90051;
    border-color: #f90051;
}

h1, h3 {
    font-weight: bold;
}

h3 {
    font-size: 27px;
}
</style>
