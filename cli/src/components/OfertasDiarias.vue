<template>
    <div id="ofertas">
        <!-- offer section -->
        <section class="offer_section layout_padding-bottom">
            <div class="offer_container">
                <div class="container">
                    <div class="container">
                        <div class="heading_container heading_center">
                            <h2>
                                Ofertas del dia
                            </h2>
                        </div>

                        <div class="row">
                            <!-- <li v-for="item in servicios">{{item}}</li> -->
                            <div class="col-md-6">
                                <div class="box ">
                                    <div class="img-box">
                                        <img src="../assets/images/v1.jpg" alt="">
                                    </div>
                                    <div class="detalles__caja">
                                        <h5>
                                            Tasty Thursdays
                                        </h5>
                                        <h6>
                                            <span>20%</span> Off
                                        </h6>
                                        <a href="">
                                            Order Now
                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6  ">
                                <div class="box ">
                                    <div class="img-box">
                                        <img src="assets/images/o2.jpg" alt="">
                                    </div>
                                    <div class="detalles__caja">
                                        <h5>
                                            Pizza Days
                                        </h5>
                                        <h6>
                                            <span>15%</span> Off
                                        </h6>
                                        <a href="">
                                            Order Now
                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6  ">
                                <div class="box ">
                                    <div class="img-box">
                                        <img src="assets/images/o2.jpg" alt="">
                                    </div>
                                    <div class="detalles__caja">
                                        <h5>
                                            Pizza Days
                                        </h5>
                                        <h6>
                                            <span>15%</span> Off
                                        </h6>
                                        <a href="">
                                            Order Now
                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6  ">
                                <div class="box ">
                                    <div class="img-box">
                                        <img src="assets/images/o2.jpg" alt="">
                                    </div>
                                    <div class="detalles__caja">
                                        <h5>
                                            Pizza Days
                                        </h5>
                                        <h6>
                                            <span>15%</span> Off
                                        </h6>
                                        <a href="">
                                            Order Now
                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- end offer section -->

    </div>
</template>

<script>
    export default{
        name: 'OfertasDiarias'
    };
</script>

<style>
    /* Ofertas sección */
.offer_section {
  position: relative;
  padding-top: 45px;
}

.offer_section .box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-top: 45px;
  border-radius: 5px;
  padding: 20px 15px;
  background-color: var(--principalColor);
  color: #ffffff;
}

.offer_section .box .img-box {
  width: 175px;
  min-width: 175px;
  height: 175px;
  margin-right: 15px;
  position: relative;
  -webkit-transition: all 0.1 0.5s;
  transition: all 0.1 0.5s;
  border-radius: 100%;
  border: 5px solid var(--principalColorYellow);
  overflow: hidden;
}

.offer_section .box .img-box img {
  width: 100%;
  -webkit-transition: all .2s;
  transition: all .2s;
}

.offer_section .box .detalles__caja h5 {
  font-family: var(--titlesFont);
  font-size: 24px;
  margin: 0;
}

.offer_section .box .detalles__caja h6 {
  font-family: var(--titlesFont);
  margin: 10px 0;
}

.offer_section .box .detalles__caja h6 span {
  font-size: 2.5rem;
  font-weight: bold;
}

.offer_section .box .detalles__caja a {
  display: inline-block;
  padding: 10px 30px;
  background-color: var(--principalColorYellow);
  color: #ffffff;
  border-radius: 45px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: none;
  text-decoration: none;
}

.offer_section .box .detalles__caja a:hover {
  background-color: #e69c00;
}

.offer_section .box .detalles__caja a svg {
  width: 20px;
  height: auto;
  margin-left: 5px;
  fill: #ffffff;
}

.offer_section .box:hover .img-box img {
  -webkit-transform: scale(1.1);
          transform: scale(1.1);
}
</style>