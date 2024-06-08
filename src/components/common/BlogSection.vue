<template>
    <section class="py-24" data-aos="fade-up" data-aos-duration="3000">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="select2-dropdown">Our latest blog</h2>
            <div class="grid">
                <div v-for="post in paginatedPosts" :key="post.id" class="group" data-aos="fade-up"
                    data-aos-duration="3000">
                    <div class="flex items-center">
                        <img :src="post.image" :alt="post.title" class="rounded-t-2xl w-full">
                    </div>
                    <div class="blues">
                        <span class=" text-indigo-600 font-medium mb-3 block">{{ post.date }}</span>
                        <h4 class="text-xl text-gray-900 font-medium leading-8 mb-5">{{ post.title }}</h4>
                        <p class="text-gray-500 text-xs leading-6 mb-10">{{ post.content }}</p>

                        <a :href="post.link" target="_blank" class="readmore whitespace-no-wrap ">
                            Read More
                        </a>
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
};
</script>

<style>
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
</style>