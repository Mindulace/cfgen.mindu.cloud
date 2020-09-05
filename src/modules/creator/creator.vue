<template>
    <div class="creator-wrapper">
        <div v-for="(customField, index) in customFields" :key="index">
            <customFieldCreator class="p-3 rounded creator-item" :customField='customField' :customFields="customFields" :index="index" />
        </div>
    </div>
</template>

<script>
import customFieldCreator from './customFieldCreator.vue'

export default {
    name: 'creator',
    components: {
        customFieldCreator
    },
    props: [
      'customFields'
    ]
}
</script>

<style>
    .creator-item {
        transition: background-color 0.2s ease-in-out;
    }

    .creator-item:hover {
        background-color: var(--light)
    }
</style>