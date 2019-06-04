export const types = {
    USER_LOGGEDING: 'USER_LOGGEDING'
}

export default {
    namespaced: true,
    state: {
        token: "",
    },
    mutations: {
        [types.USER_LOGGEDING](state, data) {
            state.token = data.token
        }
    },
    actions: {
        login({commit},params) {
            return new Promise((resolve,reject) => {
                commit(types.USER_LOGGEDING)
            })
        }
    },
    getters: {
        token: state => state.token
    }
}
