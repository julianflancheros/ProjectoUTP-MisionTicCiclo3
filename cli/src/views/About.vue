<template>
  <div class="about">
    <div id="header">
        <Header />
      </div>
    <!-- <h1>Page list</h1> -->
    <OfertasDiarias />
      

    <div class="container layout_padding2-bottom">
      <div class="heading_container heading_center layout_padding2-bottom">
        <h2>Lista de productos disponibles</h2>
      </div>
      <table class="table" style="text-align:center">
        <thead>
          <tr>
            <!-- <th scope="col">#</th> -->
            <th scope="col">Producto</th>
            <th scope="col">Descripción</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
            <th scope="col">Tipo de producto</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in productos" :key="index">
            <!-- <th scope="row">{{item._id}}</th> -->
            <td>{{item.nombre}}</td>
            <td>{{item.descripcion}}</td>
            <td>{{item.cantidad}}</td>
            <td>${{item.precio}}</td>
            <td>{{item.tipoProducto}}</td>
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
  },
  data() {
    return {
      productos: [],
    }
  },
  created() {
      this.listarProductos();
  },
  methods: {
    listarProductos() {
        this.axios
          .get("/producto/producto")
          .then((res) => {
            console.log(res.data);
            this.productos = res.data;
          })
          .catch((e) => {
            console.log(e.response);
          });
      },
  }
}
</script>
