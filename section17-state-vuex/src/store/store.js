import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import * as actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters: {
        value: state => {
            return state.value;
        }
    },
    // can not be async
    mutations: {
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    actions,
    modules: {
        counter
    }
})