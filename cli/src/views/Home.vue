<template>
  <div class="home">
    <div id="header">
        <Header />
      </div>
    <!-- <img alt="Vue logo" src="../assets/images/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <OfertasDiarias />
    <Equipo />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import OfertasDiarias from '@/components/OfertasDiarias.vue'
import Equipo from '@/components/Equipo.vue'

export default {
  components: {
    HelloWorld, Header, Footer, OfertasDiarias,Equipo
  }
}
</script>

<style>
  /* @import './assets/css/fontawesome-all-min.css'; */
  @import '../assets/css/bootstrap.css';
</style>


