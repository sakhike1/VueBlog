<template>
  <header class="shadow-md font-sans tracking-wide relative z-50">
    <section class="py-2 bg-gradient-to-r from-green-300 to-purple-400 text-white text-right px-10">
      <p class="text-sm">
        <strong class="mx-3">vueviews</strong>providing information
        <strong class="mx-3">to junior developers</strong>vueviews
      </p>
    </section>
    <div class="nav1">
      <div class="flex flex-wrap items-center  justify-between gap-5  rounded-full w-full">
        <router-link to="/">
          <img :src="imagelogo" alt="logo" class="w-[80px] h-[60px]" />
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

          <ul class="nav3 ">
            <li class="mb-6 hidden max-lg:block">
              <router-link to="/">
                <img src="https://readymadeui.com/readymadeui.svg" alt="logo" class="w-36" />
              </router-link>
            </li>
            <li class="nav4">
              <router-link to="/" class="nav5">Home</router-link>
            </li>
            <li class="nav6">
              <router-link to="/team" class="nav7 hover:text-black">Team</router-link>
            </li>
            <li class="nav8">
              <router-link to="/feature" class="nav9 hover:text-black">Feature</router-link>
            </li>
            <li class="nav10">
              <router-link to="/blog" class="nav11">Blog</router-link>
            </li>
            <li class="nav12">
              <router-link to="/about" class="nav13">About</router-link>
            </li>
            <li class="nav14">
              <router-link to="/contact" class="nav15">Contact</router-link>
            </li>
          </ul>
        </div>

        <div class="flex max-lg:ml-auto space-x-3">
          <router-link to="/LoginView" class="nav16">Login</router-link>
          <router-link to="/registerView" class="nav17">Sign up</router-link>

          <button @click="toggleMenu" id="toggleOpen" class="lg:hidden">
            <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <router-view />
</template>


<script>
export default {
  data() {
    return {
      imagelogo: require('@/assets/logo7.png'),
      isMenuOpen: false,
    }
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
}
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
</style>