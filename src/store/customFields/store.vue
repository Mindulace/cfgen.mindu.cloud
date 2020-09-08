<script>
    import Vue from "vue"
    import customField from "./customField"

    const customFields = {
    state: {
        customFields: []
    },
    mutations: {
        addCustomField(state, payload) {
            if (payload) {
                state.customFields.push(payload)
            } else {
                state.customFields.push(new (Vue.extend(customField)));
            }
        },
        removeCustomField(state, payload) {
            const index = state.customFields.indexOf(payload)

            if (index > -1) { 
                state.customFields.splice(index, 1)

                return true
            } else {
                return false
            }
        }
    },
    getters: {
        getCustomFields: state => state.customFields
    }
}

export default {
    customFields
}
</script>