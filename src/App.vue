<template>
  <div>
    <Nav/>
    
    <router-view />
  </div>
</template>

<script setup>
import Nav from './components/Nav.vue';


</script>

<style lang="scss">
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
body{
  overflow-x: hidden;
  background-color: #dddddd;
}
@font-face {
  font-family: 'Jersey';
  src: url(./assets/Font/Jersey10-Regular.ttf);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
