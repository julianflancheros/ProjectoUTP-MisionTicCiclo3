<template>
    <div id="footer">
        <!-- footer section -->
        <footer class="footer_section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 footer-col">
                        <div class="footer_contact">
                            <h4>
                                Contactanos
                            </h4>
                            <div class="contact_link_box">
                                <a href="https://www.google.com/maps/place/Centro+Comercial+Iserra+100/@4.6882356,-74.0647965,3a,49.1y,62.53h,87.65t/data=!3m7!1e1!3m5!1s03JT19DSuaRNOa3VLSf2eQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D03JT19DSuaRNOa3VLSf2eQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D355.63156%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m5!3m4!1s0x8e3f9ac2c446bfa1:0x8f774384bde268b6!8m2!3d4.6879668!4d-74.064409">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    <span>
                                        Tv. 55 # 98A-66, Bogotá, Cundinamarca
                                    </span>
                                </a>
                                <a href="tel:+573219167952">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                                        3219167952
                                    </span>
                                </a>
                                <a href="mailto:contacto@FoodPly.com">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                    <span>
                                        contacto@FoodPly.com
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 footer-col">
                        <div class="footer_detail">
                            <router-link to="/" class="footer-logo"><span>FoodPly</span></router-link>
                            <p>
                                Reserva tus alimentos desde cualquier sitio del pais, reclama en la tienda con convenio mas cercana y sin intermediarios.
                                <br>
                                FoodPly tu compañia en la comida
                            </p>
                            <div class="footer_social">
                                <a href="">
                                    <i class="fab fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i class="fab fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i class="fab fa-linkedin" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i class="fab fa-instagram" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i class="fab fa-pinterest" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 footer-col">
                        <h4>
                            Horas de servicio
                        </h4>
                        <p>
                            Todos los dias
                        </p>
                        <p>
                            8:00 Am - 8:00 Pm
                        </p>
                    </div>
                </div>
                <div class="footer-info">
                    <p>
                        &copy; <span id="displayYear"></span> Todos los derechos reservados por
                        <a href="#">FoodPly</a>
                    </p>
                </div>
            </div>
        </footer>
        <!-- footer section -->
    </div>
</template>

<script>
    export default{
        name: 'Footer'
    }
</script>

<!--<style>
/* footer section*/
.footer_section {
  /* background-color: var(--principalColor); */
  background-color: var(--principalColor);
  color: #ffffff;
  padding: 75px 0 40px 0;
  text-align: center;
}

.footer_section h4 {
  font-size: 28px;
}

.footer_section h4,
.footer_section .footer-logo {
  font-weight: 600;
  margin-bottom: 20px;
  font-family: var(--titlesFont);
}

.footer_section p {
  color: #dbdbdb;
}

.footer_section .footer-col {
  margin-bottom: 30px;
}

.footer_section .footer_contact .contact_link_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.footer_section .footer_contact .contact_link_box a {
  margin: 5px 0;
  color: #ffffff;
  text-decoration: none;
}

.footer_section .footer_contact .contact_link_box a i {
  margin-right: 5px;
}

.footer_section .footer_contact .contact_link_box a:hover {
  color: var(--principalColorYellow);
}

.footer_section .footer-logo {
  display: block;
  font-weight: bold;
  font-size: 38px;
  line-height: 1;
  color: #ffffff;
  text-decoration: none;
}

.footer_section .footer_social {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
}

.footer_section .footer_social a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: var(--principalColor);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #ffffff;
  border-radius: 100%;
  margin: 0 2.5px;
  font-size: 18px;
}

.footer_section .footer_social a:hover {
  color: var(--principalColorYellow);
}

.footer_section .footer-info {
  text-align: center;
  margin-top: 25px;
}

.footer_section .footer-info p {
  color: #ffffff;
  margin: 0;
}

.footer_section .footer-info p a {
  color: inherit;
}
</style>-->