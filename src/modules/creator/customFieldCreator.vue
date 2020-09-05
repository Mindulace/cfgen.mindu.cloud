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
    name: 'customFieldCreator',
    props: [
      'customField',
      'customFields',
      'index'
    ],
    methods: {
        onClick: function() {
            delete this.customFields[this.index]
        },
        getConfiguration: function(node, configuration = []) {
            var optionField = Vue.extend(optionElement)

            node.forEach(element => {
                console.log(element)
                if (element.type == 'option') {
                    configuration.push(new optionField({
                        propsData: {
                            type: element.config.type,
                            value: element.config.property
                        }
                    }));
                } else if (element.type == 'header') {
                    configuration.push(
                        new headerElement({
                            propsData: {
                                label: element.label,
                                // children: this.getConfiguration(element.children, configuration)
                            }
                        })
                    );
                }
            })
            console.log(configuration)
            return configuration;

            // console.log(this.customField.configuration)
        }
    },
    computed: {
        options: function() {
            // console.log(this.customField.configuration)
            return this.recConfiguration(this.customField.configuration);
            // return this.customField.config;
        },
        configuration: function() {
            console.log(this.getConfiguration(this.customField.configuration))
            return this.getConfiguration(this.customField.configuration);
        }
    }
}
</script>