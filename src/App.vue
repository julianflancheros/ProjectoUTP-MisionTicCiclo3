<template>
  <div id="app">
    <router-view/>
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

:root{
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
</style>
