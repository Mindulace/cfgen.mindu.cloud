<template>
    <div class="customfield-creator-wrapper">
        <div>
            <a @click="onClick()" class="btn btn-danger" href="#" role="button">Remove</a>
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