import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import vuetify from './plugins/vuetify'

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

axios.defaults.baseURL = 'http://localhost:3000/';

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

// Agregamos la URL base de nuestra API
// axios.defaults.baseURL = 'https://app-foodply.herokuapp.com/api';

new Vue({
  router,
  store,
  // vuetify,
  render: h => h(App)
}).$mount('#app')

