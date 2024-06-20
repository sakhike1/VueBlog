<template>
    <footer class="w-full py-7 border-t border-gray-200">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!--Grid-->
            <div
                class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                <div class="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                    <router-link to="/">
                        <img class="h-20 w-20 object-fit: contain;" :src="img20" alt="" /> </router-link>
                    <p class="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
                        I created this blog to share some valuable resources I've come across regarding Vue.
                    </p>
                    <router-link to="/Contact"
                        class="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-indigo-700 lg:mx-0">
                        Contact us
                    </router-link>
                </div>
                <!--End Col-->
                <div class="lg:mx-auto text-left">
                    <h4 class="text-lg text-gray-900 font-medium mb-7">UI resources</h4>
                    <ul class="text-sm transition-all duration-500">
                        <li class="mb-6">
                            <a href="https://www.tailwindawesome.com"
                                class="text-gray-600 hover:text-gray-900">tailwindawesome</a>
                        </li>
                        <li class="mb-6">
                            <a href="https://flexiwind.vercel.app"
                                class="text-gray-600 hover:text-gray-900">flexiwind</a>
                        </li>
                        <li class="mb-6">
                            <a href="https://shuffle.dev/components"
                                class="text-gray-600 hover:text-gray-900">shuffle</a>
                        </li>
                        <li>
                            <a href="https://ui.ibelick.com/?utm_source=tailkits&utm_medium=referral&utm_campaign=components"
                                class="text-gray-600 hover:text-gray-900">ui.ibelick</a>
                        </li>
                    </ul>
                </div>
                <!--End Col-->
                <div class="lg:mx-auto text-left">
                    <h4 class="text-lg text-gray-900 font-medium mb-7">UI resources</h4>
                    <ul class="text-sm transition-all duration-500">
                        <li class="mb-6">
                            <a href="https://readymadeui.com" class="text-gray-600 hover:text-gray-900">readymadeui
                            </a>
                        </li>
                        <li class="mb-6">
                            <a href="https://ui.aceternity.com/"
                                class="text-gray-600 hover:text-gray-900">ui.aceternity</a>
                        </li>
                        <li class="mb-6">
                            <a href="https://daisyui.com/?utm_source=tailkits&utm_medium=referral&utm_campaign=components"
                                class="text-gray-600 hover:text-gray-900">daisyui</a>
                        </li>
                        <li>
                            <a href="https://wickedblocks.dev/?utm_source=tailkits&utm_medium=referral&utm_campaign=components"
                                class="text-gray-600 hover:text-gray-900">wickedblocks</a>
                        </li>
                    </ul>
                </div>
                <!--End Col-->
                <div class="lg:mx-auto text-left">
                    <h4 class="text-lg text-gray-900 font-medium mb-7">UI resources</h4>
                    <ul class="text-sm transition-all duration-500">
                        <li class="mb-6">
                            <a href="https://treact.owaiskhan.me/?utm_source=tailkits&utm_medium=referral&utm_campaign=components"
                                class="text-gray-600 hover:text-gray-900">treact</a>
                        </li>
                        <li class="mb-6">
                            <a href="https://tailkits.com/components/material-tailwind"
                                class="text-gray-600 hover:text-gray-900">tailkits</a>
                        </li>
                        <li class="mb-6">
                            <a href="https://a17t.miles.land/?utm_source=tailkits&utm_medium=referral&utm_campaign=components"
                                class="text-gray-600 hover:text-gray-900">a17tmiles</a>
                        </li>
                        <li>
                            <a href="https://saasblocks.app/?utm_source=tailkits&utm_medium=referral&utm_campaign=components"
                                class="text-gray-600 hover:text-gray-900">saasblocks</a>
                        </li>
                    </ul>
                </div>
                <!--End Col-->
                <div class="lg:mx-auto text-left">
                    <h4 class="text-lg text-gray-900 font-medium mb-7">Vuejs resources</h4>
                    <ul class="text-sm transition-all duration-500">
                        <li class="mb-6">
                            <a href="https://vuejsfeed.com/" class="text-gray-600 hover:text-gray-900">vuejsfeed</a>
                        </li>
                        <li class="mb-6">
                            <a href="https://vueschool.io" class="text-gray-600 hover:text-gray-900">vueschool</a>
                        </li>
                        <li class="mb-6">
                            <a href="https://vuejs.org/guide/introduction.html"
                                class="text-gray-600 hover:text-gray-900">vuejs.org</a>
                        </li>
                        <li>
                            <a href="https://www.vuemastery.com"
                                class="text-gray-600 hover:text-gray-900">vuemastery</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!--Grid-->
            <div class="py-7 border-t border-gray-200">
                <div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <span class="text-sm text-gray-500">©<a href="https://pagedone.io/">Sakhile's Vue Blog</a> 2024, All
                        rights
                        reserved.</span>
                    <div class="flex mt-4 space-x-4 sm:justify-center lg:mt-0"></div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            img20: require("@/assets/logo7.png"),
        };
    },
};
</script>

<style lang="scss" scoped></style>