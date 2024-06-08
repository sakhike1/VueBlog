<template>
    <div>
        <div data-aos="fade-up" data-aos-duration="3000"
            class="bg-gradient-to-tr from-gray-100 to-gray-200 font-sans min-h-[350px] m-10 relative max-w-6xl mx-auto rounded overflow-hidden">
            <div class="grid lg:grid-cols-2 w-full h-full absolute inset-0">
                <div class="p-4 max-lg:hidden">
                    <img src="https://readymadeui.com/image-1.webp" class="object-cover w-full h-full" alt="img" />
                </div>

                <div
                    class="flex flex-col items-end justify-center text-right px-8 relative bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400 rounded-tl-[206px] z-20 before:absolute before:inset-0 before:!left-auto  before:w-2/3 before:rounded-bl-[206px] before:-z-10">
                    <h3 class="font-bold sm:text-4xl text-2xl text-white">{{ name }}</h3>
                    <p class="text-sm text-black mt-4">{{ form }}.</p>

                    <form class="w-full mt-8" @submit.prevent="handleNewsletterSubscribe">
                        <div class="flex flex-col items-end w-full">
                            <input type="text" v-model="newsletterName" placeholder="Your Name"
                                class="mb-4 p-2 w-full rounded" :class="{ 'border-red-500': !newsletterNameValid }"
                                @blur="validateName">
                            <input type="email" v-model="newsletterEmail" placeholder="Your Email"
                                class="mb-4 p-2 w-full rounded" :class="{ 'border-red-500': !newsletterEmailValid }"
                                @blur="validateEmail">
                            <button type="submit"
                                class="bg-gradient-to-b from-gray-900 to-gray-600  hover:bg-yellow-500 text-white py-2 px-8 font-semibold rounded w-max">
                                Subscribe
                            </button>
                        </div>
                        <div v-if="showNewsletterAlert" class="mt-4 text-red-500">{{ newsletterAlertMessage }}</div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('unlock your vue pontetial');
const form = ref('Subscribe to our weekly newsletter to get the latest Vue.js updates')

</script>

<style scoped></style>