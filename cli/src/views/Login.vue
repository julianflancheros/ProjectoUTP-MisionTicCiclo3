<template>
    <div class="login">
        <div class="container">
            <section id="formHolder">

                <div class="row">

                    <!-- Brand Box -->
                    <div class="col-md-6 col-sm-12 brand">
                      <router-link to="/" class="logo">
                            logo aqui <span>.</span>
                              
                            </router-link>
                        <!-- <a href="index.html" class="logo">logo aqui <span>.</span></a> -->

                        <div class="heading">
                            <h2>Nombre aqui</h2>
                            <p>Sub aqui</p>
                        </div>

                        <div class="success-msg">
                            <p>Great! You are one of our members now</p>
                            <a href="#" class="profile">Your Profile</a>
                        </div>
                    </div>


                    <!-- Form Box -->
                    <div class="col-md-6 col-sm-12 form">

                        <!-- Login Form -->
                        <div class="login form-peice switched">
                            <form class="login-form" action="#" method="post">
                                <div class="form-group">
                                    <label for="loginemail">Direccion de correo</label>
                                    <input type="email" name="loginemail" id="loginemail" required>
                                </div>

                                <div class="form-group">
                                    <label for="loginPassword">Contraseña</label>
                                    <input type="password" name="loginPassword" id="loginPassword" required>
                                </div>

                                <div class="CTA">
                                    <input type="submit" value="Login">
                                    <a href="#" class="switch">Soy nuevo</a>
                                    <a href="forgot_password.html" class="forgotKey">¿Olvidaste tu contraseña?</a>
                                </div>
                            </form>
                        </div><!-- End Login Form -->


                        <!-- Signup Form -->
                        <div class="signup form-peice">
                            <form class="signup-form" action="#" method="post">

                                <div class="form-group">
                                    <label for="name">Nombre completo</label>
                                    <input type="text" name="username" id="name" class="name">
                                    <span class="error"></span>
                                </div>

                                <div class="form-group">
                                    <label for="email">Direccion de correo</label>
                                    <input type="email" name="emailAdress" id="email" class="email">
                                    <span class="error"></span>
                                </div>

                                <div class="form-group">
                                    <label for="phone">Telefono - <small>Optional</small></label>
                                    <input type="text" name="phone" id="phone">
                                </div>

                                <div class="form-group">
                                    <label for="password">Contraseña</label>
                                    <input type="password" name="password" id="password" class="pass">
                                    <span class="error"></span>
                                </div>

                                <div class="form-group">
                                    <label for="passwordCon">Confirma tu Contraseña</label>
                                    <input type="password" name="passwordCon" id="passwordCon" class="passConfirm">
                                    <span class="error"></span>
                                </div>

                                <div class="CTA">
                                    <input type="submit" value="Iniciar Sesion" id="submit">
                                    <a href="#" class="switch">Ya estoy registrado</a>
                                </div>
                            </form>
                        </div><!-- End Signup Form -->
                    </div>
                </div>

            </section>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      notas: [],
      dismissSecs: 5,
      dismissCountDown: 0,
      mensaje: {color: '', texto: ''},
      nota: {nombre: '', descripcion: ''},
      editar: false,
      notaEditar: {}
    }
  },
  created(){
    this.listarNotas();
  },
  methods: {
    agregarNota(){
      // console.log(this.nota);
      this.axios.post('/nueva-nota', this.nota)
        .then(res => {
          this.notas.push(res.data)
          this.nota.nombre = '';
          this.nota.descripcion = '';
          //Limpieza de los campos
          this.mensaje.color = 'success';
          this.mensaje.texto = 'Nota Agregada!';
          this.showAlert()
        })
        .catch(e => {
          console.log(e.response);
          if(e.response.data.error.errors.nombre.message){
            this.mensaje.texto = e.response.data.error.errors.nombre.message
          }else{
            this.mensaje.texto = 'Error de sistema';
          }
          this.mensaje.color = 'danger';
          this.showAlert()
        })
      }
  },
    mounted () {
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
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass(
                    'hasError');
                usernameError = false;
            }
        }
        // Email
        if ($(this).hasClass('email')) {
            if ($(this).val().length == '') {
                $(this).siblings('span.error').text('Please type your email address').fadeIn()
                    .parent('.form-group').addClass('hasError');
                emailError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass(
                    'hasError');
                emailError = false;
            }
        }

        // PassWord
        if ($(this).hasClass('pass')) {
            if ($(this).val().length < 8) {
                $(this).siblings('span.error').text('Please type at least 8 charcters').fadeIn()
                    .parent('.form-group').addClass('hasError');
                passwordError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass(
                    'hasError');
                passwordError = false;
            }
        }

        // PassWord confirmation
        if ($('.pass').val() !== $('.passConfirm').val()) {
            $('.passConfirm').siblings('.error').text('Passwords don\'t match').fadeIn().parent(
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

<style>
/* Login page */
section#formHolder {
  padding: 50px 0;
}

.brand {
  padding: 20px;
  background: url(https://goo.gl/A0ynht);
  background-size: cover;
  background-position: center center;
  color: #fff;
  min-height: 540px;
  position: relative;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.6s cubic-bezier(1, -0.375, 0.285, 0.995);
  z-index: 9999;
}

.brand.active {
  width: 100%;
}

.brand::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: myanimation 40s infinite;
  z-index: -1;
}

.brand a.logo {
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  line-height: 1em;
}

.brand a.logo span {
  font-size: 30px;
  color: #fff;
  transform: translateX(-5px);
  display: inline-block;
}

.brand .heading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  transition: all 0.6s;
}

.brand .heading.active {
  top: 100px;
  left: 100px;
  transform: translate(0);
}

.brand .heading h2 {
  font-size: 70px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0;
}

.brand .heading p {
  font-size: 15px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  white-space: 4px;
  font-family: "Raleway", sans-serif;
}

.brand .success-msg {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 60px;
}

.brand .success-msg p {
  font-size: 25px;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
}

.brand .success-msg a {
  font-size: 12px;
  text-transform: uppercase;
  padding: 8px 30px;
  background: var(--principalColor);
  text-decoration: none;
  color: #fff;
  border-radius: 30px;
}

.brand .success-msg p,
.brand .success-msg a {
  transition: all 0.9s;
  transform: translateY(20px);
  opacity: 0;
}

.brand .success-msg p.active,
.brand .success-msg a.active {
  transform: translateY(0);
  opacity: 1;
}

.form {
  position: relative;
}

.form .form-peice {
  background: #fff;
  min-height: 500px;
  margin-top: 20px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  /* color: #bbbbbb; */
  color: #777;
  padding: 30px 0 60px;
  transition: all 0.9s cubic-bezier(1, -0.375, 0.285, 0.995);
  position: absolute;
  top: 0;
  left: -30%;
  width: 130%;
  overflow: hidden;
}

.form .form-peice.switched {
  transform: translateX(-100%);
  width: 100%;
  left: 0;
}

.form form {
  padding: 0 40px;
  margin: 0;
  width: 70%;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
}

.form form .form-group {
  margin-bottom: 10px;
  position: relative;
}

.form form .form-group.hasError input {
  border-color: #f95959 !important;
  /* border-color: var(--principalColor) !important; */
}

.form form .form-group.hasError label {
  color: #f95959 !important;
  /* color: var(--principalColor) !important; */
}

.form form label {
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  transform: translateY(40px);
  transition: all 0.4s;
  cursor: text;
  z-index: -1;
  padding-left: 10px;
}

.form form label.active {
  transform: translateY(-5px);
  font-size: 10px;
}

.form form label.fontSwitch {
  font-family: "Raleway", sans-serif !important;
  font-weight: 600;
}

.form form input:not([type=submit]) {
  outline: none;
  border: none;
  display: block;
  padding: 10px 0;
  width: 100%;
  border-bottom: 1px solid #eee;
  color: #444;
  font-size: 15px;
  font-family: "Montserrat", sans-serif;
  z-index: 1;
  padding-left: 15px;
  background: #f1f2f3;
  animation: myanimations 40s infinite;
  /* box-shadow: 9px -6px var(--principalColor); */
  box-shadow: 9px -6px currentColor;
  /* box-shadow: 9px -6px;
  transition: 50s color; */
}

.form form input:not([type=submit]).hasError {
  border-color: #f95959;
  /* border-color: var(--principalColorYellow); */
}

.form form span.error {
  color: #f95959;
  /* color: var(--principalColorYellow); */
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  position: absolute;
  bottom: -20px;
  right: 0;
  display: none;
}

.form form input[type=password] {
  color: var(--principalColor);
}

.form form .CTA {
  margin-top: 30px;
}

.form form .CTA a{
  margin-right: 20px;
}

.form form .CTA input {
  font-size: 12px;
  text-transform: uppercase;
  padding: 5px 30px;
  background: var(--principalColorYellow);
  color: #fff;
  border-radius: 30px;
  margin-right: 20px;
  border: none;
}

.form form .CTA input:hover {
  background-color: #e69c00;
}


.form form .CTA a.switch, .form form .CTA .forgotKey{
  font-size: 13px;
  font-weight: 400;
  color: #777;
  text-decoration: underline;
  
}
.form form .CTA a.switch{
  transition: all 0.3s;
}

.form form .CTA a.switch:hover, .form form .CTA .forgotKey:hover{
  color: var(--principalColorYellow);
}


footer {
  text-align: center;
}

footer p {
  color: #777;
}

footer p a,
footer p a:focus {
  color: #b8b09f;
  transition: all 0.3s;
  text-decoration: none !important;
}

footer p a:hover,
footer p a:focus:hover {
  color: var(--principalColor);
}

  @media (max-width: 768px) {
    .container {
        overflow: hidden;
    }

    section#formHolder {
        padding: 0;
    }

    section#formHolder div.brand {
        min-height: 200px !important;
    }

    section#formHolder div.brand.active {
        min-height: 100vh !important;
    }

    section#formHolder div.brand .heading.active {
        top: 200px;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    section#formHolder div.brand .success-msg p {
        font-size: 16px;
    }

    section#formHolder div.brand .success-msg a {
        padding: 5px 30px;
        font-size: 10px;
    }

    section#formHolder .form {
        width: 80vw;
        min-height: 500px;
        margin-left: 10vw;
    }

    section#formHolder .form .form-peice {
        margin: 0;
        top: 0;
        left: 0;
        width: 100% !important;
        transition: all 0.5s ease-in-out;
    }

    section#formHolder .form .form-peice.switched {
        transform: translateY(-100%);
        width: 100%;
        left: 0;
    }

    section#formHolder .form .form-peice>form {
        width: 100% !important;
        padding: 60px;
        left: 50%;
    }
  }

  @media screen and (min-width: 450px) {
    section#formHolder .form {
        width: 100vw;
        margin-left: 0;
    }

    h2 {
        font-size: 50px !important;
    }
  }

  #myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }

  @keyframes myanimation {
    0% {
        background-color: #670d05;
    }

    14% {
        background-color: #ca1f03;
    }

    28% {
        background-color: #de7607;
    }

    42% {
        background-color: #ffab2e;
    }

    56% {
        background-color: #9d9a27;
    }

    70% {
        background-color: #495d18;
    }

    84% {
        background-color: #1c2c05;
    }

    100% {
        background-color: #670d05;
    }
  }

  @keyframes myanimations {
    0% {
        color: #670d05;
    }

    14% {
        color: #ca1f03;
    }

    28% {
        color: #de7607;
    }

    42% {
        color: #ffab2e;
    }

    56% {
        color: #9d9a27;
    }

    70% {
        color: #495d18;
    }

    84% {
        color: #1c2c05;
    }

    100% {
        color: #670d05;
    }
  }
</style>