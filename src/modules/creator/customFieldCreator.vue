<template>
    <div class="customfield-creator-wrapper">
        <div>
            <a @click="onClick()" class="btn btn-danger" href="#" role="button">Remove</a>
            <form>
                <div class="form-group">
                    <label for="customFieldName">Name</label>
                    <input type="text" class="form-control" id="customFieldName" placeholder="Enter name" v-model="customField.values.name">
                </div>
                <div class="form-group">
                    <label for="customFieldType">Type</label>
                    <select class="custom-select" id="customFieldType" v-model="customField.values.type">
                        <option value="" selected disabled>Select type</option>
                        <option value="CustomFieldTypes::BOOL">Boolean</option>
                        <option value="CustomFieldTypes::DATETIME">Date/Time</option>
                        <option value="CustomFieldTypes::FLOAT">Float</option>
                        <option value="CustomFieldTypes::INT">Integer</option>
                        <option value="CustomFieldTypes::JSON">JSON</option>
                        <option value="CustomFieldTypes::TEXT">Text</option>
                        <option value="CustomFieldTypes::HTML">HTML</option>
                        <option value="CustomFieldTypes::SELECT">Select</option>
                    </select>
                </div>
            </form>
            <div v-for="(configuration, index) in options" :key="index">
                test
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'customFieldCreator',
    props: [
      'customField',
      'customFields',
      'index'
    ],
    methods: {
        onClick: function() {
            delete this.customFields[this.index]
        },
        recConfiguration: function(node) {
            console.log(node)
            Object.keys(node).forEach((entry) => {
                console.log(entry)
                // this.recConfiguration(entry);
            });

            // console.log(node)
        }
    },
    computed: {
        options: function() {
            console.log(this.customField.config)
            // return this.recConfiguration(this.customField.config);
            return this.customField.config;
        } 
    }
}
</script>