<template>
    <div class="creator-wrapper">
        <div v-for="(customField, index) in this.$store.customFields.getters.getCustomFields" :key="index">
            <item class="p-3 rounded creator-item" :customField='customField' :index="index" />
        </div>
    </div>
</template>

<script>
import item from './item/'

export default {
    name: 'customFieldCreator',
    components: {
        item
    }
}
</script>

<style>
    .creator-item {
        background-color: var(--light)
    }

    .dark-mode .creator-item {
        background-color: #2d3238
    }
</style>