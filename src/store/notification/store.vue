<script>
    import Notification from './notification.js'

    const notifications = {
    state: () => ({
        notifications: []
    }),
    mutations: {
        addNotification(state, payload) {
            state.notifications.push(new Notification(...payload));
        },
        removeNotification(state, payload) {
            const index = state.notifications.indexOf(payload)

            if (index > -1) { 
                state.notifications.splice(index, 1)

                return true
            } else {
                return false
            }
        }
    },
    getters: {
        getNotifications: state => state.notifications,
        gettNotification: state => state.notifications[0]
    }
}

export default {
    notifications
}
</script>