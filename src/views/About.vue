<template>
  <div class="about">
    <div id="header">
        <Header />
      </div>
    <h1>Page list</h1>
    <OfertasDiarias />
    <!-- <hello-world-test msg="Red"/> -->
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
// import Equipo from './components/Equipo.vue'
import Footer from '../components/Footer.vue'
import OfertasDiarias from '../components/OfertasDiarias.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  components:{
    Header, Footer, OfertasDiarias
    // Footer, HelloWorld, Header, Equipo
  }
}
</script>
