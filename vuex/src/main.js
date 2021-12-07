import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },

  getters: {
    finalCounter(state) {
      return state.counter * 6;
    },
  },
});
const app = createApp(App);

app.use(store);
app.mount('#app');
