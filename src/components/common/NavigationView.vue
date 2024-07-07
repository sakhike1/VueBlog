<template>
  <header class="shadow-md font-sans tracking-wide relative z-50">
    <!-- <section class="py-2 bg-gradient-to-r from-lime-600 via-yellow-300 to-red-600 text-white text-right px-10">
      <p class="text-xs">
        <strong :style="{ color: textColor }" class="mx-3 text-xs">Vue.js news in</strong>this blog i share information
        <strong :style="{ color: textColor }" class="mx-3 text-xs">about Vue.js</strong>
      </p>
      <div class="shine-overlay"></div>
    </section> -->
    <div class="nav1">
      <div class="flex flex-wrap items-center justify-between gap-5 rounded-full w-full">
        <router-link to="/">
          <img :src="imagelogo" alt="logo" class="w-[70px] h-[70px] object-fit: contain;" />
        </router-link>

        <div :class="{ nav2: true, hidden: !isMenuOpen }" id="collapseMenu">
          <button @click="toggleMenu" id="toggleClose"
            class="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>

          <ul class="nav3">
            <li class="mb-6 hidden max-lg:block">
              <router-link to="/">
                <img :src="imagelogo" alt="logo" class="w-[80px] h-[60px]" />
              </router-link>
            </li>
            <li class="nav4">
              <router-link to="/" class="nav5">Home</router-link>
            </li>
            <li class="nav6">
              <a href="https://vuejsfeed.com/" class="nav7 hover:text-white">vuejsfeed</a>
            </li>
            <li class="nav8">
              <a href="https://vueschool.io/" class="nav9 hover:text-white">vueschool</a>
            </li>
            <li class="nav10">
              <a href="https://vuejs.org/" class="nav11">vuejs.org</a>
            </li>
            <li class="nav12">
              <a href="https://www.vuemastery.com/" class="nav13">vuemastery</a>
            </li>
            <li class="nav14">
              <router-link to="/Contact" class="nav15">Contact</router-link>
            </li>
          </ul>
        </div>

        <div class="flex max-lg:ml-auto space-x-3">
          <router-link to="/LoginView" class="nav16">Login</router-link>
          <router-link to="/registerView" class="nav17">Sign up</router-link>

          <button @click="toggleMenu" id="toggleOpen" class="lg:hidden fill-white">
            <img :src="imagemenu" class="w-5 h-5 text-white" fill="#000" viewBox="0 0 20 20">
          </button>
        </div>
      </div>
      <!-- <div class="shine-overlay"></div> -->
    </div>
  </header>

  <router-view />
</template>

<script>
export default {
  data() {
    return {
      imagelogo: require('@/assets/logo7.png'),
      imagemenu: require('@/assets/ui.png'),
      isMenuOpen: false,
      textColor: '#333B36'
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    getRandomColor() {
      const colors = ['#333B36', '#0B1EF2'];
      return colors[Math.floor(Math.random() * colors.length)];
    },
    changeTextColor() {
      this.textColor = this.getRandomColor();
    }
  },
  mounted() {
    setInterval(this.changeTextColor, 2000);
  }
};
</script>

<style scoped>
.nav2 {
  display: block;
}

.nav2.hidden {
  display: none;
}

.nav3 {
  /* your styles */
}

.nav4,
.nav5,
.nav6,
.nav7,
.nav8,
.nav9,
.nav10,
.nav11,
.nav12,
.nav13,
.nav14,
.nav15,
.nav16,
.nav17 {
  /* your styles */
}

@keyframes background-shine {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 100% 0;
  }
}

.relative {
  position: relative;
}

.shine-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(110deg, rgba(255, 255, 255, 0.2) 45%, rgba(255, 255, 255, 0.1) 55%, rgba(255, 255, 255, 0.2));
  background-size: 200% 100%;
  animation: background-shine 3s linear infinite;
  pointer-events: none;
}
</style>
