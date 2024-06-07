<template>
    <div>
        <HeroSection />
        <blogView />
        <BlogSection />


        <BannerView />

        <router-view />

    </div>
</template>

<script>
import HeroSection from "@/components/common/HeroSection.vue";
import blogView from "@/components/common/blogView.vue";
import BlogSection from "@/components/common/BlogSection.vue";
import BannerView from "@/components/common/BannerView.vue"


export default {
    name: "App",
    components: {
        HeroSection,
        blogView,
        BlogSection,

        BannerView,


    },
};
</script>

<style lang="scss" scoped></style>