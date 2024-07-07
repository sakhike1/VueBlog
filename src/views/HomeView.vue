<template>
    <div>
        <HeroSection />
        <blogView />
        <BlogSection />


        <BannerView :name="data.name" />
        <SubscribeForm :name="data.name" />
        <TextSlide />


        <router-view />

    </div>
</template>

<script setup>
import HeroSection from "@/components/common/HeroSection.vue";
import blogView from "@/components/common/blogView.vue";
import BlogSection from "@/components/common/BlogSection.vue";
import BannerView from "@/components/common/BannerView.vue";
import TextSlide from "@/components/common/TextSlide.vue";
import SubscribeForm from "@/components/common/SubscribeForm.vue";
import { reactive } from "vue";


const data = reactive({
    name: 'Contact Us '
});


</script>

<style lang="scss" scoped></style>