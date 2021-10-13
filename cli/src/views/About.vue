<template>
  <div class="about">
    <div id="header">
        <Header />
      </div>
    <!-- <h1>Page list</h1> -->
    <OfertasDiarias />

    <div class="container">
      <div class="heading_container heading_center">
        <h2>Lista de productos disponibles</h2>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in notas" :key="index">
            <th scope="row">{{item._id}}</th>
            <td>{{item.nombre}}</td>
            <td>{{item.descripcion}}</td>
            <td>{{item.date}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import OfertasDiarias from '../components/OfertasDiarias.vue'

export default {
  components:{
    Header, Footer, OfertasDiarias

  }
}
</script>
