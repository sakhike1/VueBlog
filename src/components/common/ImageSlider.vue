<template>
    <section>
        <div class="relative max-w-screen-xl px-8 py-24 mx-auto md:px-12 lg:px-32">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 sm:mx-auto xl:grid-cols-2">
                <section>
                    <div>
                        <p class="mt-8 text-4xl font-semibold tracking-tighter lg:text-6xl text-gray-950">
                            learn more about
                            <span
                                class="py-2 md:block md:text-transparent md:bg-clip-text md:bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400">
                                {{ currentContent.title }}
                            </span>
                        </p>
                        <p class="max-w-sm mt-8 text-base text-gray-600">
                            {{ currentContent.description }}
                        </p>
                    </div>
                </section>
                <section :class="currentContent.bgColor"
                    class="relative flex flex-col justify-between h-full p-8 shadow-xl rounded-3xl transition-colors duration-500">
                    <div class="shine-overlay"></div>
                    <div>
                        <ul class="flex flex-col mt-10 text-sm text-white gap-y-3" role="list">
                            <li v-for="(item, i) in currentContent.items" :key="i"
                                class="flex flex-row items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="size-4 icon icon-tabler icon-tabler-circle-check-filled" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24V0H0z" fill="none"></path>
                                    <path
                                        d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                        stroke-width="0" fill="currentColor"></path>
                                </svg>
                                <span>{{ item }}</span>
                            </li>
                        </ul>
                    </div>
                    <a :href="currentContent.link" target="_blank"
                        class="flex items-center justify-between h-10 px-4 py-2 mt-8 text-sm font-semibold text-gray-500 transition-all duration-200 bg-white border border-gray-300 rounded-full hover:text-pink-700 focus:ring-2 shadow-button shadow-gray-500/5  hover:shadow-none">
                        Go there now <span>→</span>
                    </a>
                </section>
            </div>
            <button @click="prevSlide"
                class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-gray-500 rounded-full p-2 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button @click="nextSlide"
                class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-gray-500 rounded-full p-2 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            contents: [
                {
                    title: "Reactivity Fundamentals",
                    description: "These resources should give you a solid foundation and help you become proficient in Vue.Js",
                    items: [
                        "Learn about options API and composition API",
                        "Declaring Reactive State’",
                        "mutate a ref directly in event handlers",
                        "Text Interpolation",
                    ],
                    bgColor: "bg-gradient-to-t from-orange-400 to-sky-400",
                    link: "https://vuejs.org/guide/essentials/reactivity-fundamentals.html#reactivity-fundamentals",
                },
                {
                    title: "Conditional Rendering",
                    description: "When v-if and v-for are both used on the same element, v-if will be evaluated first",
                    items: [
                        "The directive v-if is used to conditionally render a block.",
                        "A v-else element must immediately follow a v-if",
                        "a v-else-if element must immediately follow a v-if",
                        "v-if is a directive, it has to be attached to a single element.",
                    ],
                    bgColor: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800",
                    link: "https://vuejs.org/guide/essentials/conditional.html#conditional-rendering",
                },
                {
                    title: "Computed Properties",
                    description: "computed property automatically track its reactive dependencies.",
                    items: [
                        "Computed properties are by default getter-only",
                        "a method invocation will always run the function",
                        "don't mutate other state, make async requests",
                        "computed property  derives a value based on other values",
                    ],
                    bgColor: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500",
                    link: "https://vuejs.org/guide/essentials/computed.html#computed-properties",
                },
                {
                    title: "Event Handling",
                    description: "We can use the v-on directive, which we typically shorten to the @ symbol, to listen to DOM events",
                    items: [
                        "receives the native DOM Event object that triggers it",
                        "checks whether the v-on value string is a valid JavaScript identifier",
                        "we can also call methods in an inline handler",
                        "Sometimes we also need to access the original DOM event in an inline handler",
                    ],
                    bgColor: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600",
                    link: "https://vuejs.org/guide/essentials/event-handling.html#event-handling",
                },
            ],
            index: 0,
        };
    },
    computed: {
        currentContent() {
            return this.contents[this.index];
        },
    },
    mounted() {
        this.startSlider();
    },
    methods: {
        startSlider() {
            setInterval(() => {
                this.index = (this.index + 1) % this.contents.length;
            }, 3000); // Change slide every 3 seconds
        },
        prevSlide() {
            this.index = (this.index - 1 + this.contents.length) % this.contents.length;
        },
        nextSlide() {
            this.index = (this.index + 1) % this.contents.length;
        },

        saveCurrentPage() {
            sessionStorage.setItem('previousPage', window.location.href);
        },
        goBack() {
            const previousPage = sessionStorage.getItem('previousPage');
            if (previousPage) {
                window.location.href = previousPage;
            } else {
                alert('No previous page found');
            }
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
    background: linear-gradient(110deg, rgba(255, 255, 255, 0.2) 45%, rgba(255, 255, 255, 0.1) 55%, rgba(255, 255, 255, 0.2));
    background-size: 200% 100%;
    animation: background-shine 3s linear infinite;
    pointer-events: none;
}

button {
    z-index: 10;
}
</style>