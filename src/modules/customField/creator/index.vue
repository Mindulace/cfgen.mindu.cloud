<template>
    <div class="creator-wrapper">
        <div v-for="(customField, index) in this.$store.getters.getCustomFields" :key="index">
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
        transition: background-color 0.2s ease-in-out;
    }

    .creator-item:hover {
        background-color: var(--light)
    }
</style>