<template>
    <div class="header-element-wrapper">
        <div class="form-group" data-toggle="collapse" :href="'#form-group' + _uid">
            <h3>{{ propsData.label }}</h3>
            <hr />
            <div :id="'#form-group' + _uid" class="form-group-content">
                <component class='pl-3' v-for="(component, index) in propsData.children" :key="index" v-bind:is="component.type"
                    :propsData="component.propsData"
                    :customField="customField" />
            </div>
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
    ]
}
</script>
