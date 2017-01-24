import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

// https://vuex.vuejs.org/en/getting-started.html
export default new Vuex.Store({
    state: {
        token: undefined,
        query: undefined,
        sortDirection: 'ascending',
        packages: [],
        entities: [],
        selectedPackage: undefined,
        error: undefined
    },
    mutations: mutations,
    actions: actions,
    strict: true
})
