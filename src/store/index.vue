<script>
import Vue from 'vue'
import Vuex from 'vuex'
import customFields from "./customFields/store"
import notifications from "./notification/store"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        customFields,
        notifications,
    }
});
</script>