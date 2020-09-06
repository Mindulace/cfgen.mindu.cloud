<script>
import Vue from 'vue'
import Vuex from 'vuex'
import customFieldComponent from '../modules/customField/customField.vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        customFields: []
    },
    mutations: {
        addCustomField(state, payload) {
            if (payload) {
                state.customFields.push(payload)
            } else {
                state.customFields.push(new (Vue.extend(customFieldComponent)));
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
})
</script>