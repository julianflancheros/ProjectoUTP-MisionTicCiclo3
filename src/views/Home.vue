<template>
  <div class="home">
    <div id="header">
        <Header />
      </div>
    <img alt="Vue logo" src="../assets/images/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Ofertas />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Ofertas from '@/components/Ofertas.vue'

export default {
  components: {
    HelloWorld, Header, Footer, Ofertas
  }
}
</script>

<style>
  /* @import './assets/css/fontawesome-all-min.css'; */
  @import '../assets/css/bootstrap.css';
</style>


