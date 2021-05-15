export default {
    namespaced: true,
    state: {
        route_destination: undefined,
    },
    mutations: {
        SET_ROUTE_DESTINATION: function(state, value) {
            state.route_destination = value
        },
    },
    actions: {
        set_route_destination: (context, value) => {
            context.commit("SET_ROUTE_DESTINATION", value)
        },
    },
}
