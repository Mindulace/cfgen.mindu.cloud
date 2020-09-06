<template>
    <div class="option-element-wrapper">
        <div class="form-group" v-if="propsData.type == 'text'">
            <label for="text">{{ propsData.label }}</label>
            <input type="text" class="form-control" :id="'text' + _uid" :placeholder="propsData.placeholder" v-model="customField.values[propsData.property]">
        </div>
        <div class="form-group" v-if="propsData.type == 'select'">
            <label for="select">{{ propsData.label }}</label>
            <select class="custom-select" :id="'select' + _uid" v-model="customField.values[propsData.property]">
                <option value="" selected disabled>{{ propsData.placeholder }}</option>
                <option v-for="(option, index) in propsData.options" :key="index" :value="option.value">{{ option.label }}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'optionElement',
    props: [
        'customField',
        'propsData'
    ]
}
</script>

<style>
</style>