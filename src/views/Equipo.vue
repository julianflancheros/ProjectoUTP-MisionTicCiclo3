<template>
  <div class="equipo">
    <div id="header">
        <Header />
      </div>
    <!-- <h1>Page team</h1> -->
    <Equipo/>
    <!-- <hello-world-test msg="Red"/> -->
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Equipo from '../components/Equipo.vue'
import Footer from '../components/Footer.vue'
// import HelloWorld from '../components/HelloWorld.vue'

export default {
  components:{
    Header, Footer, Equipo
    // Footer, HelloWorld, Header, Equipo
  }, 
  // mounted() {
  //   let arrayJsItems = ['./assets/js/bootstrap.js', './assets/js/jquery-3.4.1.min.js',  './assets/js/custom.js']

  //   let externalScript = document.createElement('script')
  //   for (const item in arrayJsItems) {
  //     externalScript.setAttribute('src', item);
  //     document.head.appendChild(externalScript);
  // } 
}
</script>
