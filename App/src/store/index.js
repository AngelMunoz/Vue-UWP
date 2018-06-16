import * as Vue from 'vue';
import * as Vuex from 'vuex';
import main from './main'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    main
  }
});

export default store;