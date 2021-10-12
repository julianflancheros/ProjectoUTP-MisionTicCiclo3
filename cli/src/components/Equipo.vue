<template>
  <div id="equipo">
    <!-- about section -->

    <section class="about_section layout_padding">
      <div class="container  ">
        <div class="heading_container heading_center">
          <h2>
            Equipo
          </h2>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-12">
            <div class="img-box">
              <img src="../assets/images/FotoHenryCogua.jpg" alt="">
            </div>
          </div>
          <div class="col-md-8 col-sm-12">
            <div class="detalles__caja">
              <div class="heading_container">
                <h2>
                  Henry Jhovanny Cogua Mora
                  <!--We Are Feane-->
                </h2>
              </div>
              <p>
                Saludos soy henry, tecnólogo en gestion en redes de datos del SENA, soy de la ciudad de Bogotá, estoy
                motivado a terminar mi curso en MisionTIC 2022 , donde afianze mi pasion en el diseno grafico de paginas
                web.
              </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-8 col-sm-12">
            <div class="detalles__caja">
              <div class="heading_container">
                <h2>
                  Julian Felipe Lancheros
                </h2>
              </div>
              <p>
                Soy estudiante de ingenieria agricola y ex-estudiante de ingenieria agronomica con muchas ganas de
                adquirir nuevos conocimientos, me gusta aprender de forma autodidacta y aprovechar las oportunidades
                para llenarme de experiencias enriquesedoras.
              </p>
              <a href="https:julianflancheros.js.org" target="_blank">
                Read More
              </a>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="img-box">
              <img src="../assets/images/FotoJulianFLancheros.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end about section -->
  </div>
</template>

<script>
  export default {
    components: {
      name: 'Equipo'
    }
  }
</script>

<!--<style>
  .about_section {
    background: var(--principalColor);
    color: #ffffff;
    text-align: left;
  }

  .about_section .row {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 50px;
  }

  .about_section .img-box {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
  }

  .about_section .img-box img {
    width: 100%;
    max-width: 445px;
    position: relative;
    z-index: 2;
    border-radius: 100%;
    border: 10px solid var(--principalColorYellow);
  }

  .about_section .detalles__caja p {
    margin-top: 15px;
  }

  .about_section .detalles__caja a {
    display: inline-block;
    padding: 10px 45px;
    background-color: var(--principalColorYellow);
    color: #ffffff;
    border-radius: 45px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border: none;
    margin-top: 15px;
    text-decoration: none;
  }

  .about_section .detalles__caja a:hover {
    background-color: #e69c00;
  }

  .book_section {
    position: relative;
  }

  .book_section .heading_container {
    margin-bottom: 25px;
  }

  .book_section .form_container .form-control {
    width: 100%;
    border: none;
    height: 50px;
    margin-bottom: 25px;
    padding-left: 25px;
    border: 1px solid #999;
    outline: none;
    color: #000000;
    border-radius: 5px;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
</style>-->