<template>
    <div ref="reader-wrapper" class="reader-wrapper">
        <codeViewer :code='customFields' />
    </div>
</template>

<script>
import codeViewer from './viewer/codeViewer.vue'
import jsonar from 'jsonar'

export default {
    name: 'reader',
    methods: {
        convertToPHP: function(json) {
            return jsonar.arrify(JSON.stringify(json), {prettify: true}).replaceAll('array(', "[").replaceAll(')', "]").replaceAll('	', '    ');
        }
    },
    computed: {
        customFields: {
            get: function() {
                var customFields = [];

                this.$store.getters.getCustomFields.forEach(customField => {
                    if (customField.isValid()) {
                        customFields.push(customField.getJson());
                    }
                });

                return this.convertToPHP(customFields);
            }
        }
    },
    components: {
        codeViewer
    }
}
</script>

<style>
    textarea {
        width: 100%;
    }
</style>