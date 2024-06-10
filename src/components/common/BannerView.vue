<template>
  <section class="py-24" data-aos="fade-up" data-aos-duration="3000">
    <div class="bannercontainer">
      <div class="bannercontainer1">
        <div class="bannercontainer2">
          <div class="bannercontainer3">
            <span class="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45"></span>
            <span class="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45"></span>
            <span class="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45"></span>
          </div>
        </div>

        <div class="bannercontainer4">
          <div class="bannercontainer5">
            <span class="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45"></span>
            <span class="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45"></span>
            <span class="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45"></span>
          </div>
        </div>
        <div class="bannercontainer6">
          <h1 class="bannercontainer7">
            for any development project,
            <span
              class="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 from-20% via-indigo-400 via-30% to-teal-600">you
              can engage us</span>
            so we can help you build it
          </h1>
          <p class="text-gray-700 dark:text-gray-300">
            {{ welcome() }}
          </p>
          <div class="mx-auto max-w-md sm:max-w-xl flex justify-center">
            <button
              class="outline-none hover:scale-125 h-12 px-5  bg-gradient-to-r from-green-200 via-green-400 to-purple-700 rounded-full text-white flex items-center">
              {{ name }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,


    }
  },
  methods: {
    welcome() {
      return 'We provide consultation for small and medium sized companies'
    }
  }
};
</script>

<style lang="scss" scoped></style>
