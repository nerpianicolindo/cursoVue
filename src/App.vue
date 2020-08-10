<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <HelloWorld msg="Hello Vue in CodeSandbox!"/>
    <mi-componente/>
    <Leccion4/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MiComponente from "@/components/MiComponente.vue";
import Leccion4 from "@/components/Leccion4.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    MiComponente,
    Leccion4
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
