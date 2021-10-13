<template>
    <div id="ofertas">
        <!-- offer section -->
        <section class="offer_section layout_padding-bottom">
            <div class="offer_container">
                <div class="container">
                    <div class="container">
                        <div class="heading_container heading_center">
                            <h2>
                                Ofertas de la semana
                            </h2>
                        </div>

                        <div class="row">
                            <!-- <li v-for="item in servicios">{{item}}</li> -->
                            <div class="col-lg-6 col-12">
                                <div class="box ">
                                    <div class="img-box">
                                        <img src="../assets/images/OfertaLacteos.png" alt="">
                                    </div>
                                    <div class="detalles__caja">
                                        <h5>
                                            Martes de lácteos
                                        </h5>
                                        <h6>
                                            <span>20%</span> Dcto
                                        </h6>
                                        <a href="" data-toggle="modal" data-target="#martesModal">
                                            Mas información
                                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <div class="box ">
                                    <div class="img-box">
                                        <img src="../assets/images/OfertaTuberculos.png" alt="">
                                    </div>
                                    <div class="detalles__caja">
                                        <h5>
                                            Miercoles de tubérculos
                                        </h5>
                                        <h6>
                                            <span>10%</span> Dcto
                                        </h6>
                                        <a href="" data-toggle="modal" data-target="#miercolesModal">
                                            Mas información
                                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6  col-12">
                                <div class="box ">
                                    <div class="img-box">
                                        <img src="../assets/images/OfertaCarnes.png" alt="">
                                    </div>
                                    <div class="detalles__caja">
                                        <h5>
                                            Viernes de carnes
                                        </h5>
                                        <h6>
                                            <span>15%</span> Dcto
                                        </h6>
                                        <a href="" data-toggle="modal" data-target="#viernesModal">
                                            Mas información
                                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6  col-12">
                                <div class="box ">
                                    <div class="img-box">
                                        <img src="../assets/images/OfertaMercados.png" alt="">
                                    </div>
                                    <div class="detalles__caja">
                                        <h5>
                                            Domingos de mercados
                                        </h5>
                                        <h6>
                                            <span>35%</span> Dcto
                                        </h6>
                                        <a href="" data-toggle="modal" data-target="#domingoModal">
                                            Mas información
                                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
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

        <!-- Modal martes -->
        <div class="offer_section modal fade bd-example-modal-lg" tabindex="-1" role="dialog"
            aria-labelledby="myLargeModalLabel" aria-hidden="true" id="martesModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-titulo" id="martesModalTitle">Martes de lácteos</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- <img src="../assets/images/ViernesImagen.png" alt="" style="width: 100%"> -->
                        <img src="../assets/images/MartesImagen.png" alt="">

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid
                            laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis
                            voluptas! Eveniet consequatur sit at!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid
                            laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis
                            voluptas! Eveniet consequatur sit at!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid
                            laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis
                            voluptas! Eveniet consequatur sit at!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid
                            laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis
                            voluptas! Eveniet consequatur sit at!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid
                            laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis
                            voluptas! Eveniet consequatur sit at!
                        </p>
                    </div>
                    <div class="modal-footer">
                        <a href="" data-dismiss="modal">Cerrar</a>        
                    </div>

                </div>
            </div>
        </div>

        <!-- Modal miercoles -->
        <div class="offer_section modal fade bd-example-modal-lg" tabindex="-1" role="dialog"
            aria-labelledby="myLargeModalLabel" aria-hidden="true" id="miercolesModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-titulo" id="miercolesModalTitle">Domingos de mercados</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- <img src="../assets/images/ViernesImagen.png" alt="" style="width: 100%"> -->
                        <img src="../assets/images/MiercolesImagen.png" alt="">

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid
                            laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis
                            voluptas! Eveniet consequatur sit at!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid
                            laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis
                            voluptas! Eveniet consequatur sit at!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid
                            laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis
                            voluptas! Eveniet consequatur sit at!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid
                            laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis
                            voluptas! Eveniet consequatur sit at!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid
                            laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis
                            voluptas! Eveniet consequatur sit at!
                        </p>
                    </div>
                    <div class="modal-footer">
                        <a href="" data-dismiss="modal">Cerrar</a>        
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal viernes -->
        <div class="offer_section modal fade bd-example-modal-lg" tabindex="-1" role="dialog"
            aria-labelledby="myLargeModalLabel" aria-hidden="true" id="viernesModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-titulo" id="viernesModalTitle">Viernes de carnes</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- <img src="../assets/images/ViernesImagen.png" alt="" style="width: 100%"> -->
                        <img src="../assets/images/ViernesImagen.png" alt="">

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid
                            laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis
                            voluptas! Eveniet consequatur sit at!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid
                            laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis
                            voluptas! Eveniet consequatur sit at!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid
                            laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis
                            voluptas! Eveniet consequatur sit at!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid
                            laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis
                            voluptas! Eveniet consequatur sit at!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid
                            laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis
                            voluptas! Eveniet consequatur sit at!
                        </p>
                    </div>
                    <div class="modal-footer">
                        <a href="" data-dismiss="modal">Cerrar</a>        
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal domingos -->
        <div class="offer_section modal fade bd-example-modal-lg" tabindex="-1" role="dialog"
            aria-labelledby="myLargeModalLabel" aria-hidden="true" id="domingoModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-titulo" id="domingoModalTitle">Domingos de mercados</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- <img src="../assets/images/ViernesImagen.png" alt="" style="width: 100%"> -->
                        <img src="../assets/images/DomingoImagen.png" alt="">

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid
                            laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis
                            voluptas! Eveniet consequatur sit at!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid
                            laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis
                            voluptas! Eveniet consequatur sit at!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid
                            laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis
                            voluptas! Eveniet consequatur sit at!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid
                            laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis
                            voluptas! Eveniet consequatur sit at!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid
                            laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis
                            voluptas! Eveniet consequatur sit at!
                        </p>
                    </div>
                    <div class="modal-footer">
                        <a href="" data-dismiss="modal">Cerrar</a>        
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
    export default {
        name: 'OfertasDiarias'
    };
</script>