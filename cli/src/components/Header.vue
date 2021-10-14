<template>
  <div id="navBar">
    <!-- header section strats -->
    <header class="seccion__header">
      <div class="container">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <!-- <router-link to="/" class="navbar-brand"><span>Nombre del negocio aquí</span></router-link> -->
          <router-link to="/" class="navbar-brand"><span>FoodPly</span></router-link>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mx-auto ">
              <li class="nav-item">
                <router-link to="/About" class="nav-item nav-link">ver Productos</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Equipo" class="nav-link">Equipo</router-link>
              </li>
              <!-- <li class="nav-item">
                <router-link to="/CRUD" class="nav-link">CRUD</router-link>
              </li> -->
            </ul>

            <div class="user_option">
              <router-link to="/Login" class="user_link">
                <!-- <b-link v-b-modal.modalLogin class="nav-link" v-if="!estaActivo">Iniciar sesion</b-link>
                <b-link @click="cerrarSesion()" class="nav-link" v-if="estaActivo">Cerrar sesion</b-link> -->
                
                Log in &nbsp; <i class="fa fa-user" aria-hidden="true"></i>


              </router-link>
              <!-- <a href="" class="order_online">
                                Reserva Ahora
                            </a> -->
            </div>
          </div>
        </nav>
      </div>
    </header>
    <!-- end header section -->
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
  export default {
    name: 'Header',
    computed: {
    ...mapGetters(["estaActivo"]),
    },
    methods: {
      ...mapMutations(["obtenerUsuario"]),
      ...mapActions(["guardarUsuario", "leerToken", "cerrarSesion"]),
    },
  }
</script>
