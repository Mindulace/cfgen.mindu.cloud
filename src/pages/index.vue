<template>
    <div class="page-wrapper container">
        <div class="row mx-md-n5">
            <div class="col px-md-5 p-3 bg-white rounded">
                <a @click="onClick()" class="btn btn-primary" href="#" role="button">Add</a>
                <creator />
            </div>
            <div class="col px-md-5 p-3 bg-white rounded">
                <reader />
            </div>
        </div>
    </div>
</template>

<script>
import creator from '../modules/customField/creator/'
import reader from '../modules/customField/reader/'

export default {
    name: 'index',
    components: {
        creator,
        reader
    },
    methods: {
        onClick() {
            this.$store.commit('addCustomField')
        }
    },
    data() {
        return {
            customFields: []
        };
    },
    mounted() {
        this.onClick()
    }
}
</script>
