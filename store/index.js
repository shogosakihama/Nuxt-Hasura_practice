import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: function() {
      return {
        message: 'count number',
        counter: 0,
      };
    },
    mutations: {
      count: function(state, n) {
        state.counter += n;
      },
      say: function(state, msg) {
        state.message = msg;
      }
    },
    actions: {
      doit: function(context) {
        let n = Math.floor(Math.random() * 10);
        context.commit('count', n);
        context.commit('say', 'add' + n + '!');
      }
    }
  })
}

export default createStore
