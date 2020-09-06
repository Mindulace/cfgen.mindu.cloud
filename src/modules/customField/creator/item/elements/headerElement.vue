<template>
    <div class="header-element-wrapper">
        <div class="form-group">
            {{ propsData.label }}
            <hr />
            <component class='pl-3' v-for="(component, index) in propsData.children" :key="index" v-bind:is="component.type"
                :propsData="component.propsData"
                :customField="customField" />
        </div>
    </div>
</template>

<script>
import optionElement from './optionElement.vue'

export default {
    name: 'headerElement',
    components: {
        optionElement
    },
    props: [
        'customField',
        'propsData'
    ],
    mounted() {
        console.log(this.customField)
    }
}
</script>
