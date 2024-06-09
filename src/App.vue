<template>
  <div id="app">
    <div myprop="hello world"></div>
    <NavigationView />
    <SubscribeForm :name="data.name" />
    <scrollUp />
    <FooterView />
  </div>

</template>

<script setup>


import NavigationView from "./components/common/NavigationView.vue";
import FooterView from "@/components/common/FooterView.vue";
import scrollUp from "./components/common/scrollUp.vue";
import SubscribeForm from "@/components/common/SubscribeForm.vue";
import { reactive } from "vue";

const data = reactive({
  name: 'Subscribe now'
});


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
