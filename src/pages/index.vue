<template>
    <div class="page-wrapper container">
        <div class="row mx-md-n5">
            <div class="col px-md-5 p-3 bg-white rounded">
                <a @click="onClick()" class="btn btn-primary" href="#" role="button">Add</a>
                <creator :customFields="customFields" />
            </div>
            <div class="col px-md-5 p-3 bg-white rounded">
                <reader :customFields="customFields" />
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import creator from '../modules/creator/creator.vue'
import reader from '../modules/reader/reader.vue'
import customFieldComponent from '../modules/customField/customField.vue'

export default {
    name: 'index',
    components: {
        creator,
        reader
    },
    methods: {
        onClick() {
            var customField = Vue.extend(customFieldComponent);

            this.customFields.push(new customField);
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
