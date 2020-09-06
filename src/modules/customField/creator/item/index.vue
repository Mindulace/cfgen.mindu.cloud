<template>
    <div class="customfield-item-wrapper mb-3">
        <div class="position-relative">
            <a @click="onClick()" class="remove-button btn btn-danger position-absolute" href="#" role="button"><i class="fa fa-times" aria-hidden="true"></i></a>
            <component v-for="(component, index) in configuration" :key="index" v-bind:is="component.type"
                :propsData="component.propsData"
                :customField="customField" />
        </div>
    </div>
</template>

<script>
import optionElement from './elements/optionElement.vue'
import headerElement from './elements/headerElement.vue'

export default {
    name: 'item',
    props: [
        'customField',
        'index'
    ],
    components: {
        optionElement,
        headerElement
    },
    methods: {
        onClick: function() {
            this.$store.commit('removeCustomField', this.customField)
        },
        getConfiguration: function(node) {
            var configurationElements = []

            node.forEach(element => {
                if (element.type == 'optionElement') {
                    configurationElements.push({
                        type: element.type,
                        propsData: {
                            type: element.config.type,
                            options: element.config.options,
                            label: element.config.label,
                            property: element.config.property,
                            placeholder: element.config.placeholder
                        }
                    })
                } else if (element.type == 'headerElement') {
                    configurationElements.push({
                        type: element.type,
                        propsData: {
                            label: element.label,
                            children: this.getConfiguration(element.children)
                        }
                    })
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

<style>
.remove-button {
    right: 0px;
    top: 0px;
}

.customfield-item-wrapper::not(:first-of-type) {
    border-top: 1px solid #000
}
</style>