<template>
    <section class="py-24" data-aos="fade-up" data-aos-duration="3000">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="select2-dropdown">{{ mine() }}</h2>
            <div class="grid">
                <div v-for="post in paginatedPosts" :key="post.id" class="group" data-aos="fade-up"
                    data-aos-duration="3000">
                    <div class="relative flex items-center">
                        <img :src="post.image" :alt="post.title" class="rounded-t-2xl w-full">
                        <div class="shine-overlay"></div>
                    </div>
                    <div class="blues">
                        <span class="text-indigo-600 font-medium mb-3 block">{{ post.date }}</span>
                        <h4 class="text-xl text-gray-900 font-medium leading-8 mb-5">{{ post.title }}</h4>
                        <p class="text-gray-500 text-xs leading-6 mb-10">{{ post.content }}</p>
                        <a :href="post.link" target="_blank" class="readmore whitespace-no-wrap">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="space mt-10">
            <PaginationView />
        </div>
    </section>
</template>


<script>
import { mapGetters } from 'vuex';
import PaginationView from './PaginationView.vue';


export default {
    components: {
        PaginationView,
    },
    computed: {
        ...mapGetters(['paginatedPosts']),
    },
    methods: {
        mine() {
            return 'Our latest Blog'
        }
    }
};
</script>

<style scoped>
.group {
    max-width: 100%;
}

.group:hover {
    background-image: linear-gradient(to right, #eef0e9, #f5f2ee94);
    color: aliceblue;
}

.group:hover .group-hover\:text-hover * {
    color: #f5f5f5 !important;
    /* Adjust this color as needed */
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
