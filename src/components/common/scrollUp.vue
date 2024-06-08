<template>
    <div v-if="showScrollButton" ref="scrollTopButton" class="fixed bottom-[350px] right-10" style="z-index: 999">
      <button @click="scrollToTop" class="hover:scale-125 text-white font-bold py-2 px-4">
        <img class="h-10 w-10" :src="require('@/assets/up-arrow.png')" />
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from "vue";
  
  const showScrollButton = ref(false);
  
  function handleScroll() {
    if (window.scrollY > 0) {
      showScrollButton.value = true;
    } else {
      showScrollButton.value = false;
    }
  }
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });
  </script>
  
  <style scoped></style>
  