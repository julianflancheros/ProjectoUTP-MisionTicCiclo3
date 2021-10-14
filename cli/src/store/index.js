import Vue from 'vue'
import Vuex from 'vuex'

import decode from 'jwt-decode';
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    usuarioDB:''
  },
  mutations: {
    obtenerUsuario(state, payload){
      state.token = payload;
      if (payload === '') {
        state.usuarioDB = '';
      }
      else{
        state.usuarioDB = decode(payload);
        console.log(state.usuarioDB.data);
        if(state.usuarioDB.data.role == "ADMIN"){
          router.push({name:'Admin'})
        }
      }
    }
  },
  actions: {
    guardarUsuario({commit},payload){
      localStorage.setItem('token',payload);
      commit('obtenerUsuario',payload)
    },
    cerrarSesion({commit},payload){
      commit('obtenerUsuario', '');
      localStorage.removeItem('token');
      router.push({name: 'Home'});
    },
    leerToken({commit}){
      const token = localStorage.getItem('token');
      if (token) {
        commit('obtenerUsuario',token);
      }
      else{
        commit('obtenerUsuario', '');
      }
    }
  },
  getters: {
    estaActivo: state => !!state.token
  },
  modules: {
  }
})
