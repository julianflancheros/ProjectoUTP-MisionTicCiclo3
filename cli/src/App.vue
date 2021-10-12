<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  @import url('https://fonts.googleapis.com/css2?family=Courgette&family=Open+Sans:wght@400;600;700&display=swap');

  :root {
    --principalColor: #670d05;
    --principalColorYellow: #ffab2e;

    --titlesFont: 'Courgette', cursive;
    --bodyFont: "Open Sans", sans-serif;

  }

  body {
    font-family: var(--bodyFont);
    color: #0c0c0c;
    background-color: #ffffff;
  }

  .layout_padding {
    padding: 90px 0;
  }

  .layout_padding2 {
    padding: 75px 0;
  }

  .layout_padding2-top {
    padding-top: 75px;
  }

  .layout_padding2-bottom {
    padding-bottom: 75px;
  }

  .layout_padding-top {
    padding-top: 90px;
  }

  .layout_padding-bottom {
    padding-bottom: 90px;
  }

  h1,
  h2 {
    font-family: var(--titlesFont);
  }

  .heading_container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .heading_container h2 {
    position: relative;
    margin-bottom: 0;
    font-size: 2.5rem;
    font-weight: bold;
  }

  .heading_container h2 span {
    color: var(--principalColorYellow);
  }

  .heading_container p {
    margin-top: 10px;
    margin-bottom: 0;
  }

  .heading_container.heading_center {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
  }

  a,
  a:hover,
  a:focus {
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: initial;
  }

  .btn,
  .btn:focus {
    outline: none !important;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  /*header section*/
  /* .hero_area {
  position: relative;
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
} */

  .bg-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .bg-box img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .sub_page .hero_area {
    min-height: auto;
  }

  .sub_page .hero_area .bg-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .sub_page .hero_area .bg-box img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: right top;
    object-position: right top;
  }


  .seccion__slider .detalles__caja h1 {
    font-size: 3.3rem;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .seccion__slider .detalles__caja p {
    font-size: 14px;
  }

  .seccion__slider .detalles__caja a {
    display: inline-block;
    padding: 10px 45px;
    background-color: var(--principalColorYellow);
    color: #ffffff;
    border-radius: 45px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border: none;
    margin-top: 10px;
  }

  .detalles__caja a:hover {
    background-color: #e69c00;
  }
</style>

