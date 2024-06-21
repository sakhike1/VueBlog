<template>
    <div class="relative" data-aos="fade-up" data-aos-duration="3000">
        <div class="absolute inset-0 blur-xl h-[580px]" :style="{
            background:
                'linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)',
        }"></div>

        <div class="relative">
            <!-- Section -->
            <section>
                <div class="Herosection">
                    <div class="flex-none space-y-5 max-w-xl">
                        <a href="javascript:void(0)" class="herosection10">
                            <span
                                class="inline-block rounded-full px-3 py-1 bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 border text-white">
                                News
                            </span>
                            <a href="https://vuejs.org/" class="flex items-center">
                                all you need to know about
                                <span class="text-green-700 ml-2">{{ currentWord }}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="w-5 h-5">
                                    <path fillRule="evenodd"
                                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                        clipRule="evenodd" />
                                </svg>
                            </a>
                        </a>
                        <h1 class="primary">Build beautiful components</h1>
                        <p>
                            Checkout some predictions or where things might be headed in 2024.
                            for the Vue.js Ecosystem
                        </p>
                        <div class="flex items-center gap-x-3 sm:text-sm">
                            <a class="hover:scale-105"
                                href="https://www.youtube.com/watch?v=iuBLAdUWPtQ&feature=youtu.be" target="_blank"
                                rel="noopener noreferrer">
                                <button class="herosection20">
                                    View more
                                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                                            stroke="white" stroke-width="1.6" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </a>
                            <a class="hover:scale-105"
                                href="https://www.youtube.com/watch?v=iuBLAdUWPtQ&feature=youtu.be" target="_blank"
                                rel="noopener noreferrer">
                                <button class="herosection30">
                                    View more
                                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" class="text-black"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                                            stroke="white" stroke-width="1.6" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div class="flex-1 hidden  md:block" data-aos="fade-up" data-aos-duration="3000">
                        <img src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg"
                            class="max-w-xl" :class="{ 'max-w-xl': true, 'floating-image': isFloating }" />
                    </div>
                </div>
            </section>
        </div>

    </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default {
    data() {
        return {
            isFloating: true,
            words: ['Vue.js', 'Computed Properties', 'Lifecycle Hooks', 'Props', 'Composables', 'Async Components', 'Custom Directives', 'Plugins', 'Slots'],  // Array of words
            currentIndex: 0,
            intervalId: null
        };

    },
    computed: {
        currentWord() {
            return this.words[this.currentIndex];
        }
    },
    methods: {
        toggleFloating() {
            this.isFloating = !this.isFloating;
        },
        changeWord() {
            this.currentIndex = (this.currentIndex + 1) % this.words.length;
        },
        startWordCycle() {
            this.intervalId = setInterval(this.changeWord, 2000);  // Change word every second
        },
        stopWordCycle() {
            clearInterval(this.intervalId);  // Clear the interval to stop cycling
        }
    },
    mounted() {
        this.startWordCycle();
    },
    beforeUnmount() {
        this.stopWordCycle();  // Clean up interval on component destruction
    }
};


</script>

<style scoped>
@keyframes float {
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(50px);
    }

    100% {
        transform: translateX(0);
    }
}

.floating-image {
    animation: float 3s infinite;
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

    /* Match the image border radius */
    background: linear-gradient(110deg, rgba(255, 255, 255, 0.2) 45%, rgba(255, 255, 255, 0.1) 55%, rgba(255, 255, 255, 0.2));
    background-size: 200% 100%;
    animation: background-shine 3s linear infinite;
    pointer-events: none;
    /* Ensure overlay doesn't block image interactions */
}
</style>
