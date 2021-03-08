import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const URL = "http://localhost:8080/tienda/api/v1/";
export default new Vuex.Store({
  state: {
    productos: [],
    lstUsuarios: [],
    carritoCompras: [],
    rolesUsuario: []
  },
  getters: {},
  mutations: {
    actualizarProductos(state, respuesta) {
      state.productos = respuesta;
    },
    actualizarListaUsuarios(state, respuesta) {
      state.lstUsuarios = respuesta;
    }
  },
  actions: {
    obtenerProductosDisponibles({ commit }) {
      axios.get(URL + "productos/disponibles").then((response) => {
        commit("actualizarProductos", response.data)
      }).catch(e => {
        alert(e);
      })
    },
    obtenerUsuariosActiovs({ commit }) {
      axios.get(URL + "usuario/todos").then((response) => {
        commit("actualizarListaUsuarios", response.data)
      }).catch(e => {
        alert(e);
      })

    }


  },
  modules: {}
});
