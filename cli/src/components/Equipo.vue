<template>
    <div id="equipo">
        <!-- about section -->

        <section class="about_section layout_padding">
            <div class="container  ">

                <div class="row">
                    <div class="col-md-6 ">
                        <div class="img-box">
                            <img src="assets/images/about-img.png" alt="">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="detalles__caja">
                            <div class="heading_container">
                                <h2>
                                    We Are Feane
                                </h2>
                            </div>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration
                                in some form, by injected humour, or randomised words which don't look even slightly
                                believable. If you
                                are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                                embarrassing hidden in
                                the middle of text. All
                            </p>
                            <a href="">
                                Read More
                            </a>
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
    components:{
        name: 'Equipo'
    }
}
</script>

<style>
.about_section {
  background: var(--principalColor);
  color: #ffffff;
}

.about_section .row {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.about_section .img-box {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.about_section .img-box img {
  width: 100%;
  max-width: 445px;
  position: relative;
  z-index: 2;
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
</style>