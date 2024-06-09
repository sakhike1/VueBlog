<template>
    <div>
        <HeroSection />
        <blogView />
        <BlogSection />


        <BannerView :name="data.name" />

        <router-view />

    </div>
</template>

<script setup>
import HeroSection from "@/components/common/HeroSection.vue";
import blogView from "@/components/common/blogView.vue";
import BlogSection from "@/components/common/BlogSection.vue";
import BannerView from "@/components/common/BannerView.vue";
import { reactive } from 'vue'

const data = reactive({
    name: 'Get in touch'
});
</script>

<style lang="scss" scoped></style>