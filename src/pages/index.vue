<template>
    <div class="page-wrapper mt-5 container">
        <div class="row justify-content-between">
            <div class="panel col-12 col-lg-5 py-3 bg-dark rounded">
                <div class="page-header position-relative">
                    <h1 class='mb-0'>Custom Fields</h1>
                    <a @click="onClick()" class="add-button btn btn-primary position-absolute" href="#" role="button"><i class="fa fa-plus" aria-hidden="true"></i></a>
                </div>
                <hr />
                <creator />
            </div>
            <div class="panel col-12 col-lg-6 py-3 bg-dark rounded">
                <div class="page-header">
                    <h1 class='mb-0'>Viewer</h1>
                </div>
                <hr />
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

<style>
.page-wrapper {
    background: none
}

.add-button {
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
}

.dark-mode .panel {
    color: #fff;
    background: var(--dark);
}
</style>
