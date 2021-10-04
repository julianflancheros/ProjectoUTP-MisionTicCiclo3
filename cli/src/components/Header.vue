<template>
    <div id="navBar">
        <!-- header section strats -->
        <header class="seccion__header">
            <div class="container">
                <nav class="navbar navbar-expand-lg custom_nav-container ">
                    <router-link to="/" class="navbar-brand"><span>Nombre del negocio aquí</span></router-link>

                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class=""> </span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav  mx-auto ">
                          <li class="nav-item">
                            <router-link to="/About" class="nav-item nav-link">ver Productos</router-link>
                          </li>
                          <li class="nav-item">
                            <router-link to="/Equipo" class="nav-link">Equipo</router-link>
                          </li>
                          <li class="nav-item">
                            <router-link to="/CRUD" class="nav-link">CRUD</router-link>
                          </li>
                        </ul>

                        <div class="user_option">
                            <router-link to="/Login" class="user_link">
                            LOGIN
                              <i class="fa fa-user" aria-hidden="true"></i>
                            </router-link>
                            <!-- <a href="" class="order_online">
                                Reserva Ahora
                            </a> -->
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <!-- end header section -->
    </div>
</template>

<script>
export default {
    name: 'Header'   
}
</script>

<style>
.seccion__header {
  padding: 15px 0;
  background-color: var(--principalColor);
}

.seccion__header .container-fluid {
  padding-right: 25px;
  padding-left: 25px;
}

.navbar-brand {
  font-family: var(--titlesFont);
}

.navbar-brand span {
  font-weight: bold;
  font-size: 32px;
  color: #ffffff;
}

.custom_nav-container {
  padding: 0;
}

.custom_nav-container .navbar-nav {
  padding-left: 18%;
}

.custom_nav-container .navbar-nav .nav-item .nav-link {
  padding: 5px 20px;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  border-radius: 5px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  font-size: 12px;
}

.custom_nav-container .navbar-nav .nav-item:hover .nav-link, .custom_nav-container .navbar-nav .nav-item.active .nav-link {
  color: var(--principalColorYellow);
}

.custom_nav-container .nav_search-btn {
  width: auto;
  height: auto;
  padding: 0;
  border: none;
  color: #ffffff;
  margin: 0 10px;
}

.custom_nav-container .nav_search-btn:hover {
  color: var(--principalColorYellow);
}

.user_option {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.user_option a {
  margin: 0 10px;
}

.user_option .user_link {
  color: #ffffff;
}

.user_option .user_link:hover {
  color: var(--principalColorYellow);
}

.user_option .cart_link {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.user_option .cart_link svg {
  width: 17px;
  height: auto;
  fill: #ffffff;
  margin-bottom: 2px;
}

.user_option .cart_link:hover svg {
  fill: var(--principalColorYellow);
}

.user_option .order_online {
  display: inline-block;
  padding: 8px 30px;
  background-color: var(--principalColorYellow);
  color: #ffffff;
  border-radius: 45px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: none;
}

.user_option .order_online:hover {
  background-color: #e69c00;
}

.custom_nav-container .navbar-toggler {
  outline: none;
}

.custom_nav-container .navbar-toggler {
  padding: 0;
  width: 37px;
  height: 42px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.custom_nav-container .navbar-toggler span {
  display: block;
  width: 35px;
  height: 4px;
  background-color: #ffffff;
  margin: 7px 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  position: relative;
  border-radius: 5px;
  transition: all 0.3s;
}

.custom_nav-container .navbar-toggler span::before, .custom_nav-container .navbar-toggler span::after {
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  top: -10px;
  border-radius: 5px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.custom_nav-container .navbar-toggler span::after {
  top: 10px;
}

.custom_nav-container .navbar-toggler[aria-expanded="true"] {
  -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
}

.custom_nav-container .navbar-toggler[aria-expanded="true"] span {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.custom_nav-container .navbar-toggler[aria-expanded="true"] span::before, .custom_nav-container .navbar-toggler[aria-expanded="true"] span::after {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
  top: 0;
}

/*end header section*/
</style>