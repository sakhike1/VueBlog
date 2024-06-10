<template>
  <div id="app">
    <div></div>
    <NavigationView />

    <scrollUp />
    <FooterView />
  </div>

</template>

<script setup>


import NavigationView from "./components/common/NavigationView.vue";
import FooterView from "@/components/common/FooterView.vue";
import scrollUp from "./components/common/scrollUp.vue";






</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
