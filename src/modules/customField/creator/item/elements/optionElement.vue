<template>
    <div class="option-element-wrapper">
        <div class="form-group" v-if="type == 'text'">
            <label for="text">{{ label }}</label>
            <input type="text" class="form-control" id="text" placeholder="" v-model="value">
        </div>
        <div class="form-group" v-if="type == 'select'">
            <label for="select">{{ label }}</label>
            <select class="custom-select" id="select" v-model="value">
                <option value="" selected disabled>Select type</option>
                <option v-for="(option, index) in options" :key="index" value="option.value">{{ option.label }}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'optionElement',
    props: [
        'type',
        'value',
        'default',
        'options'
    ]
}
</script>

<style>
</style>