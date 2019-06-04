import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import { user } from './modules'
Vue.use(Vuex)

const modules = {
    user
}
// const PersistedState = createPersistedState({
//     key: 'application',
//     paths: ['dialog'],
// })

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
    modules,
    strict: debug,
})

export default store