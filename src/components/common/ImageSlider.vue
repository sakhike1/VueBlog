<template>
    <section class="">
        <div class="relative max-w-screen-xl px-8 py-24 mx-auto md:px-12 lg:px-32">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 sm:mx-auto xl:grid-cols-2">
                <section>
                    <div>
                        <p class="mt-8 text-4xl font-semibold tracking-tighter lg:text-6xl text-gray-950">
                            Level up your
                            <span
                                class="py-2 md:block md:text-transparent md:bg-clip-text md:bg-gradient-to-r from-pink-500 to-pink-600">
                                VueJs experience
                            </span>
                        </p>
                        <p class="max-w-sm mt-4 text-base text-gray-600">
                            These resources should give you a solid foundation and help you become proficient in Vue.js.
                        </p>
                    </div>
                </section>
                <section :class="bgColors[index]"
                    class="flex flex-col justify-between h-full p-8 shadow-xl rounded-3xl transition-colors duration-500">
                    <div class="shine-overlay"></div>
                    <div>
                        <div class="flex flex-col gap-2"></div>
                        <ul class="flex flex-col mt-10 text-sm text-white gap-y-3" role="list">
                            <li v-for="(item, i) in items" :key="i" v-show="i === index"
                                class="flex flex-row items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="size-4 icon icon-tabler icon-tabler-circle-check-filled" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                        stroke-width="0" fill="currentColor"></path>
                                </svg>
                                <span>{{ item }}</span>
                            </li>
                        </ul>
                    </div>
                    <a href="https://vuejsfeed.com/"
                        class="flex items-center justify-between h-10 px-4 py-2 text-sm font-semibold text-gray-500 transition-all duration-200 bg-white border border-gray-300 rounded-full hover:text-pink-700  shadow-button  ring-offset-gray-200 hover:shadow-none">
                        Go there now <span>→</span>
                    </a>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            items: [
                "Comprehensive guide covering all the features of Vue.js.",
                "Official forum for discussions and questions",
                "A collection of articles and tutorials about Vue.js",
                "Command line interface for rapid Vue.js development.",
            ],
            bgColors: [
                "bg-gradient-to-r from-purple-900 to-indigo-500",
                "bg-gradient-to-r from-green-900 to-teal-500",
                "bg-gradient-to-r from-blue-900 to-cyan-500",
                "bg-gradient-to-r from-red-900 to-pink-500",
            ],
            index: 0,
        };
    },
    mounted() {
        this.startSlider();
    },
    methods: {
        startSlider() {
            setInterval(() => {
                this.index = (this.index + 1) % this.items.length;
            }, 3000); // Change slide every 3 seconds
        },
    },
};
</script>

<style scoped>
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