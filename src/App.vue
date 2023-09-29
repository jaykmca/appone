<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quo, dicta consequuntur aperiam, vel numquam excepturi esse consequatur illum eum eligendi ipsa facere praesentium ex odit id necessitatibus repellendus sunt.
    <HelloWorld msg="Welcome to Your Vue.js App ++++==="/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import HelloWorld   from 'apptwo/HelloWorld'


export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
