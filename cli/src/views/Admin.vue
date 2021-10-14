<template>
  <div>
    <Header />
    <section class="logout_section">
    
      <div class="box ">
        <div class="detalles__caja">
          <a href="" @click="salir">
            Salir
          </a>
        </div>
      </div>
  
    </section>

    <div class="heading_container heading_center layout_padding2">
      <h2>Página administrador</h2>
    </div>



          <div class="container">
            <div class="row">
              <!-- <h1>Notas</h1> -->
              <div class="col-12 col-md-6">
                <form @submit.prevent="editarProductos(productoEditar)" v-if="editarProducto" style="margin-top: 5vh">
                  <div class="heading_container  heading_center"
                    style="margin-top: 10vh; font-family: var(--titlesFont);">
                    <h3>Editar producto</h3>
                  </div>
                  <input type="text" class="form-control my-2" placeholder="Nombre" v-model="productoEditar.nombre">
                  unidad de medida <select v-model="productoEditar.descripcion" style="width: 73%">
                    <option value="Bolsa">Bolsa</option>
                    <option value="Bulto">Bulto</option>
                    <option value="Libra">Libra</option>
                    <option value="Kilo">Kilo</option>
                    <option value="Unidades">Unidades</option>
                  </select>
                  <input type="text" class="form-control my-2" placeholder="Cantidad" v-model="productoEditar.cantidad">
                  <input type="text" class="form-control my-2" placeholder="$ Precio" v-model="productoEditar.precio">
                  tipo de producto <select v-model="productoEditar.tipoProducto" style="width: 75%">
                    <option value="Bebidas">Bebidas</option>
                    <option value="Carnes">Carnes</option>
                    <option value="Cereales">Cereales</option>
                    <option value="Frutas">Frutas</option>
                    <option value="Lácteos">Lácteos</option>
                    <option value="Postre">Postre</option>
                    <option value="Tuberculos">Tuberculos</option>
                    <option value="Verduras">Verduras</option>
                  </select>
                  <b-button class="btn-warning my-2 mx-2" type="submit">Editar</b-button>
                  <b-button class="my-2" type="submit" @click="editar = false">Cancelar</b-button>
                </form>

                <form @submit.prevent="registrarProductos()" v-if="!editarProducto" style="margin-top: 5vh">
                  <div class="heading_container  heading_center"
                    style="margin-top: 10vh; font-family: var(--titlesFont);">
                    <h3>Agregar un nuevo producto</h3>
                  </div>
                  <input type="text" class="form-control my-2" placeholder="Producto" v-model="producto.nombre">
                  unidad de medida <select name="TipoCarne" id="TipoCarne" placeholder="Producto"
                    v-model="producto.descripcion" style="width: 73%">
                    <option value="Bolsa">Bolsa</option>
                    <option value="Bulto">Bulto</option>
                    <option value="Libra">Libra</option>
                    <option value="Kilo">Kilo</option>
                    <option value="Unidades">Unidades</option>
                  </select>
                  <input type="text" class="form-control my-2" placeholder="Cantidad" v-model="producto.cantidad">


                  <!-- <input list="select" name="select"> -->
                  <!-- <datalist class="form-control" id="select">
              <option value="Trans" />
              <option value="Fund" />
              <option value="Insta" />
            </datalist> -->

                  <input type="text" class="form-control my-2" placeholder="$ Precio" v-model="producto.precio">
                  <!-- <input type="text" class="form-control my-2" placeholder="Tipo de Producto" v-model="producto.tipoProducto"> -->
                  tipo de producto <select name="TipoCarne" id="TipoCarne" placeholder="Producto"
                    v-model="producto.tipoProducto" style="width: 75%">
                    <option value="Bebidas">Bebidas</option>
                    <option value="Carnes">Carnes</option>
                    <option value="Cereales">Cereales</option>
                    <option value="Frutas">Frutas</option>
                    <option value="Lácteos">Lácteos</option>
                    <option value="Postre">Postre</option>
                    <option value="Tuberculos">Tuberculos</option>
                    <option value="Verduras">Verduras</option>
                  </select>

                  <b-button class="btn-success my-2 btn-block" type="submit">Agregar</b-button>
                </form>

              </div>
              <div class="col-12 col-md-6">
                <img src="../assets/images/about.jpg" alt="" style="width:100%; margin-bottom: 5vh;">
              </div>
            </div>
          </div>
          <div class="container layout_padding2-bottom">
            <b-alert :show="dismissCountDown" dismissible :variant="mensaje.color" @dismissed="dismissCountDown=0"
              @dismiss-count-down="countDownChanged">
              {{mensaje.texto}}
            </b-alert>
            <table class="table" style="text-align:center">
              <thead>
                <tr>
                  <!-- <th scope="col">#</th> -->
                  <th scope="col">Producto</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Tipo de producto</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in productos" :key="index">
                  <td>{{item.nombre}}</td>
                  <td>{{item.descripcion}}</td>
                  <td>{{item.cantidad}}</td>
                  <td>${{item.precio}}</td>
                  <td>{{item.tipoProducto}}</td>
                  <td>
                    <!-- <b-button @click="alerta()">Acción</b-button> -->
                    <b-button @click="eliminarProducto(item._id)" class="btn-danger btn-sm mx-2">Eliminar</b-button>
                    <b-button @click="activarEdicionProducto(item._id)" class="btn-warning btn-sm">Editar</b-button>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>

          <Footer />

        </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  // import Footer from '../components/Footer.vue'
  import {
    mapState,
    mapMutations,
    mapActions,
    mapGetters
  } from "vuex";
  export default {
    components: {
      Header,
      Footer
    },
    data() {
      return {
        mensaje: {
          color: "success",
          texto: ""
        },
        dismissSecs: 5,
        dismissCountDown: 0,

        productos: [],
        producto: {
          nombre: "",
          descripcion: "",
          cantidad: "",
          precio: "",
          tipoProducto: "",
        },

        editarProducto: false,
        productoEditar: {},
        itemsEstadoV: ['No vacunado', 'Primera dosís', 'Segunda dosís', 'Con Covid', 'Vacunado'],
      }
    },
    computed: {
      ...mapState(["token"]),
      ...mapGetters(["estaActivo"]),
    },
    methods: {
      ...mapMutations(["obtenerUsuario"]),
      ...mapActions(["guardarUsuario", "leerToken", "cerrarSesion"]),
      alerta() {
        this.mensaje.color = 'danger';
        this.mensaje.texto = 'Probando alerta';
        this.showAlert();
      },
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
      registrarProductos() {
        let config = {
          headers: {
            token: this.token,
          },
        };
        this.axios
          .post("/producto/nuevo-producto", this.producto, config)
          .then((res) => {
            this.productos.push(res.data);
            this.producto.nombre = "";
            this.producto.descripcion = "";
            this.producto.cantidad = "";
            this.producto.precio = "";
            this.producto.tipoCarne = "";

            this.mensaje.color = "success";
            this.mensaje.texto = "Registro exitoso";
            this.showAlert();
          })
          .catch((e) => {
            console.log(e.response);
            if (e.response.data.error.errors.nombre.message) {
              this.mensaje.texto = e.response.data.error.errors.name.message;
            } else {
              this.mensaje.texto = "Error del sistema";
            }
            this.mensaje.color = "danger";
            this.showAlert();
          });
      },
      eliminarProducto(id) {
        let config = {
          headers: {
            token: this.token,
          },
        };
        this.axios
          .delete(`producto/producto/${id}`, config)
          .then((res) => {
            const index = this.productos.findIndex(
              (item) => item._id === res.data._id
            );
            this.productos.splice(index, 1);

            this.mensaje.color = "danger";
            this.mensaje.texto = "Producto Eliminado!";
            this.showAlert();
          })
          .catch((e) => {
            console.log(e.response);
          });
      },
      activarEdicionProducto(id) {
        this.editarProducto = true;
        this.axios
          .get(`producto/producto/${id}`)
          .then((res) => {
            this.productoEditar = res.data;
          })
          .catch((e) => {
            console.log(e.response);
          });
      },
      editarProductos(item) {
        console.log(item);
        let config = {
          headers: {
            token: this.token,
          },
        };
        this.axios
          .put(`producto/producto/${item._id}`, item, config)
          .then((res) => {
            const index = this.productos.findIndex((n) => n._id === res.data._id);
            this.productos[index].nombre = res.data.nombre;
            this.productos[index].descripcion = res.data.descripcion;
            this.productos[index].precio = res.data.precio;
            this.productos[index].tipoCarne = res.data.tipoCarne;

            this.mensaje.color = "success";
            this.mensaje.texto = "Producto Editado";
            this.showAlert();
            this.editarProducto = false;
          })
          .catch((e) => {
            console.log(e.response);
          });
      },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      },
      salir(){//Elimina el token del localStorage y que  lo empuje a una vista diferente
        localStorage.removeItem('token');
        this.$router.push({
            name : 'Home'
        })
      }
    },
    created() {
      this.listarProductos();
    }
  }
</script>

<style>
.logout_section .detalles__caja a, 
.modal-footer a {
  display: inline-block;
  padding: 10px 30px;
  background-color: var(--principalColorYellow);
  color: var(--contrastColor);
  border-radius: 45px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: none;
  right: 105px;
  position: absolute;
  top: 30px;
}

.offer_section .box .detalles__caja a:hover, 
.modal-footer a:hover {
  background-color: #e69c00;
}
</style>