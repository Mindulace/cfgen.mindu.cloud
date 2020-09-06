<template>
    <div class="creator-wrapper">
        <div v-for="(customField, index) in customFields" :key="index">
            <item class="p-3 rounded creator-item" :customField='customField' :customFields="customFields" :index="index" />
        </div>
    </div>
</template>

<script>
import item from './item/'

export default {
    name: 'customFieldCreator',
    components: {
        item
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