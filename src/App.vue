<template>
  <div id="app">
    <!-- <img width="25%" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Hello Vue in CodeSandbox!"/> -->
    <!-- <mi-componente/> -->
    <!-- <Leccion4/> -->
    <todo-list/>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList
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
