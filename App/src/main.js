import * as Vue from 'vue'
import * as Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import './main.css'
import './material.woff2'

Vue.use(Vuetify);


import App from './App.vue'

import router from './router'
import store from './store'


new Vue({
  el: "#app",
  store,
  router,
  ...App
});

