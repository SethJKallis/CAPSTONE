<template>
  <NavBar/>
  <router-view/>
  <FooterComponent/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #155263;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}
nav a:hover{
color: #ffc93c;
}

nav a.router-link-exact-active {
  color: #ff9a3c;
}
</style>

<script>
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';
export default{
  components: {
    NavBar,
    FooterComponent
}
}
</script>
