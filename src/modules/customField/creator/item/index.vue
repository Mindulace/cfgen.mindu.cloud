<template>
    <div class="customfield-creator-wrapper">
        <div>
            <a @click="onClick()" class="btn btn-danger" href="#" role="button">Remove</a>
            <component v-for="(component, index) in configuration" :key="index" v-bind:is="component"></component>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import optionElement from './elements/optionElement.vue'
import headerElement from './elements/headerElement.vue'

export default {
    name: 'item',
    props: [
        'customField',
        'index'
    ],
    methods: {
        onClick: function() {
            this.$store.commit('removeCustomField', this.customField)
        },
        getConfiguration: function(node) {
            var optionField = Vue.extend(optionElement),
                headerField = Vue.extend(headerElement),
                configurationElements = []

            node.forEach(element => {
                if (element.type == 'option') {
                    configurationElements.push(new optionField({
                        propsData: {
                            type: element.config.type,
                            value: element.config.property,
                            options: element.config.options,
                            label: element.config.label,
                            property: element.config.property
                        }
                    }))
                } else if (element.type == 'header') {
                    configurationElements.push(new headerField({
                        propsData: {
                            label: element.label,
                            children: this.getConfiguration(element.children)
                        }
                    }))
                }
            })
            
            return configurationElements
        }
    },
    computed: {
        configuration: function() {
            return this.getConfiguration(this.customField.configuration)
        }
    }
}
</script>