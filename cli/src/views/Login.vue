<template>
    <div class="login">
        <div class="container">
            <section id="formHolder">

                <div class="row">


                    <div class="col-md-6 col-sm-12 brand">
                        <router-link to="/" class="logo">FoodPly</router-link>

                        <div class="heading">
                            <h2>Pagina de logeo</h2>

                        </div>

                        <div class="success-msg">
                            <p>Great! You are one of our members now</p>
                            <a href="#" class="profile">Your Profile</a>
                        </div>
                    </div>



                    <div class="col-md-6 col-sm-12 form">


                        <div class="login form-peice switched">
                            <form class="login-form" action="#" method="post" @submit.prevent="login()">
                                <div class="form-group">
                                    <label for="loginemail">Direccion de correo</label>
                                    <input type="email" name="loginemail" id="loginemail" required
                                        v-model="usuario.email">
                                </div>

                                <div class="form-group">
                                    <label for="loginPassword">Contraseña</label>
                                    <input type="password" name="loginPassword" id="loginPassword" required
                                        v-model="usuario.pass">
                                </div>

                                <div class="CTA">
                                    <input type="submit" value="Login">
                                    <a href="#" class="switch">Soy nuevo</a>
                                    <!-- <a href="forgot_password.html" class="forgotKey">¿Olvidaste tu contraseña?</a> -->
                                </div>
                            </form>
                        </div>

                        <div class="signup form-peice">
                            <form class="signup-form" action="#" method="post" @submit.prevent="agregarUsuario()">

                                <div class="form-group">
                                    <label for="name">Nombre completo</label>
                                    <input type="text" name="username" id="name" class="name"
                                        v-model="usuario.nombreCompleto">
                                    <span class="error"></span>
                                </div>

                                <div class="form-group">
                                    <label for="email">Direccion de correo</label>
                                    <input type="email" name="emailAdress" id="email" class="email"
                                        v-model="usuario.email">
                                    <span class="error"></span>
                                </div>

                                <div class="form-group">
                                    <label for="phone">Telefono - <small>Optional</small></label>
                                    <input type="text" name="phone" id="phone" v-model="usuario.phone">
                                </div>

                                <div class="form-group">
                                    <label for="password">Contraseña</label>
                                    <input type="password" name="password" id="password" class="pass"
                                        v-model="usuario.pass">
                                    <span class="error"></span>
                                </div>

                                <!-- <div class="form-group">
                                    <label for="passwordCon">Confirma tu Contraseña</label>
                                    <input type="password" name="passwordCon" id="passwordCon" class="passConfirm" v-model="usuario.pass2">
                                    <span class="error"></span>
                                </div> -->

                                <div class="CTA">
                                    <input type="submit" value="Iniciar Sesion" id="submit">
                                    <a href="#" class="switch">Ya estoy registrado</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapMutations,
        mapActions,
        mapGetters
    } from "vuex";
    export default {
        data() {
            return {
                mensaje: {
                    color: "success",
                    texto: ""
                },
                context: null,
                dismissSecs: 5,
                dismissCountDown: 0,
                usuarios: [],
                usuario: {
                    nombre: '',
                    email: '',
                    pass: '',
                    role: ''
                },
            }
        },
        methods: {
            ...mapMutations(["obtenerUsuario"]),
            ...mapActions(["guardarUsuario", "leerToken", "cerrarSesion"]),

            login() {
                this.axios.post('/login', this.usuario)
                    .then(res => {
                        // console.log(res.data.token);
                        const token = res.data.token;
                        // this.usuarioDB = res.data.usuarioDB
                        this.guardarUsuario(token);
                    })
                    .catch(err => {
                        console.log(err.response.data.mensaje);
                        this.mensaje = err.response.data.mensaje;
                    })
            },
            agregarUsuario() {
                this.axios
                    .post("/users/nuevo-usuario", this.usuario)
                    .then((res) => {
                        this.usuarios.push(res.data);
                        this.usuario.nombreCompleto = "";
                        this.usuario.email = "";
                        this.usuario.phone = "";
                        this.usuario.pass = "";
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
            onContext(ctx) {
                this.context = ctx;
            },
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown;
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs;
            },
        },
        computed: {
            ...mapGetters(["estaActivo"]),
        },
        created() {
            this.leerToken();
        },
        mounted() {
            // login page
            $(document).ready(function () {

                'use strict';
                var usernameError = true,
                    emailError = true,
                    passwordError = true,
                    passConfirm = true;

                // Detect browser for css purpose
                if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                    $('.form form label').addClass('fontSwitch');
                }

                // Label effect
                $('input').focus(function () {

                    $(this).siblings('label').addClass('active');
                });

                // Form validation
                $('input').blur(function () {

                    // User Name
                    if ($(this).hasClass('name')) {
                        if ($(this).val().length === 0) {
                            $(this).siblings('span.error').text('Please type your full name').fadeIn()
                                .parent('.form-group').addClass('hasError');
                            usernameError = true;
                        } else if ($(this).val().length > 1 && $(this).val().length <= 6) {
                            $(this).siblings('span.error').text('Please type at least 6 characters')
                                .fadeIn().parent('.form-group').addClass('hasError');
                            usernameError = true;
                        } else {
                            $(this).siblings('.error').text('').fadeOut().parent('.form-group')
                                .removeClass(
                                    'hasError');
                            usernameError = false;
                        }
                    }
                    // Email
                    if ($(this).hasClass('email')) {
                        if ($(this).val().length == '') {
                            $(this).siblings('span.error').text('Please type your email address')
                                .fadeIn()
                                .parent('.form-group').addClass('hasError');
                            emailError = true;
                        } else {
                            $(this).siblings('.error').text('').fadeOut().parent('.form-group')
                                .removeClass(
                                    'hasError');
                            emailError = false;
                        }
                    }

                    // PassWord
                    if ($(this).hasClass('pass')) {
                        if ($(this).val().length < 8) {
                            $(this).siblings('span.error').text('Please type at least 8 charcters')
                                .fadeIn()
                                .parent('.form-group').addClass('hasError');
                            passwordError = true;
                        } else {
                            $(this).siblings('.error').text('').fadeOut().parent('.form-group')
                                .removeClass(
                                    'hasError');
                            passwordError = false;
                        }
                    }

                    // PassWord confirmation
                    if ($('.pass').val() !== $('.passConfirm').val()) {
                        $('.passConfirm').siblings('.error').text('Passwords don\'t match').fadeIn()
                            .parent(
                                '.form-group').addClass('hasError');
                        passConfirm = false;
                    } else {
                        $('.passConfirm').siblings('.error').text('').fadeOut().parent('.form-group')
                            .removeClass('hasError');
                        passConfirm = false;
                    }

                    // label effect
                    if ($(this).val().length > 0) {
                        $(this).siblings('label').addClass('active');
                    } else {
                        $(this).siblings('label').removeClass('active');
                    }
                });


                // form switch
                $('a.switch').click(function (e) {
                    $(this).toggleClass('active');
                    e.preventDefault();

                    if ($('a.switch').hasClass('active')) {
                        $(this).parents('.form-peice').addClass('switched').siblings('.form-peice')
                            .removeClass('switched');
                    } else {
                        $(this).parents('.form-peice').removeClass('switched').siblings('.form-peice')
                            .addClass('switched');
                    }
                });


                // Form submit
                $('form.signup-form').submit(function (event) {
                    event.preventDefault();

                    if (usernameError == true || emailError == true || passwordError == true ||
                        passConfirm == true) {
                        $('.name, .email, .pass, .passConfirm').blur();
                    } else {
                        $('.signup, .login').addClass('switched');

                        setTimeout(function () {
                            $('.signup, .login').hide();
                        }, 700);
                        setTimeout(function () {
                            $('.brand').addClass('active');
                        }, 300);
                        setTimeout(function () {
                            $('.heading').addClass('active');
                        }, 600);
                        setTimeout(function () {
                            $('.success-msg p').addClass('active');
                        }, 900);
                        setTimeout(function () {
                            $('.success-msg a').addClass('active');
                        }, 1050);
                        setTimeout(function () {
                            $('.form').hide();
                        }, 700);
                    }
                });

            })

        }
    }
</script>