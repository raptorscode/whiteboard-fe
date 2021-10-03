export default {
    state: () => ({
        name: 'Nikita',
    }),
    mutations: {
        SET_NAME(state, payload) {
            state.name = payload
        },
    },
    actions: {
        saveName({ commit }, name) {
            commit('SET_NAME', name)
        },
    },
    getters: {},
}
