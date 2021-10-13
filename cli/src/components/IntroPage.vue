<template>
    <div>

        <section class="seccion__slider">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 ">
          <div class="detalles__caja">
            <h1>
              Bienvenido a tu tienda de confianza 
            </h1>
            <p>
              Aqui podras encontrar muchos productos que podrán ser reclamados en las tiendas mas cercanas con las cuales tenemos convenio. 
            </p>
            <div class="btn-box">
              <router-link to="/Login" class="user_link">Reserva Ahora</router-link>
            </div>
          </div>
        </div>
        <div class="col lg-6">
          <img class="seccion__slider-imagen" src="../assets/images/fresh-market.jpg" alt="">
        </div>
      </div>
    </div>
  </section>

    </div>
</template>

<script>
export default {
    name: 'IntroPage'   
}
</script>
