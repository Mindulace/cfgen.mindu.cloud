<template>
    <div class="reader-wrapper">
        <codeViewer :code='ccustomFields' />
    </div>
</template>

<script>
import codeViewer from './viewer/codeViewer.vue'
import jsonar from 'jsonar'

export default {
    name: 'reader',
    props: [
        'customFields'
    ],
    methods: {
        convertToPHP: function(json) {
            return jsonar.arrify(JSON.stringify(json), {prettify: true}).replaceAll('array(', "[").replaceAll(')', "]").replaceAll('	', '    ');
        }
    },
    computed: {
        ccustomFields: {
            get: function() {
                var lol = [];

                this.customFields.forEach(customField => {
                    if (customField.isValid()) {
                        lol.push(customField.getJson());
                    }
                });

                return this.convertToPHP(lol);
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