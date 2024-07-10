<template>
    <section class="flex bg-gradient-to-t from-[#141521] items-center relative to-[#141521]">
        <div class="shine-overlay"></div>
        <svg class="absolute" fill="none" height="100%" viewBox="0 0 400 400" width="100%"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_17_17)">
                <g filter="url(#filter0_f_17_17)">
                    <path d="M128.6 0H0V322.2L51.5 67.5L128.6 0Z" fill="#EB03FF"></path>
                    <path d="M0 322.2V400H240H320L51.5 67.5L0 322.2Z" fill="#FF0F9F"></path>
                    <path d="M320 400H400V78.75L51.5 67.5L320 400Z" fill="#3A0D84"></path>
                    <path d="M400 0H128.6L51.5 67.5L400 78.75V0Z" fill="#FAD8F4"></path>
                </g>
            </g>
            <defs>
                <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="720.666"
                    id="filter0_f_17_17" width="720.666" x="-160.333" y="-160.333">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_17_17" stdDeviation="80.1666"></feGaussianBlur>
                </filter>
            </defs>
        </svg>
        <div
            class="relative items-center w-full gap-12 p-8 mx-auto lg:inline-flex lg:p-20 max-w-7xl rounded-3xl lg:py-32">
            <div class="max-w-4xl mx-auto text-center">
                <div>

                    <p class="max-w-3xl mx-auto mt-4 lg:text-ms text-slate-100">
                        Stay informed about the latest updates and releases in the Vue.js ecosystem
                        Discover inspiring projects and stories from the Vue.js community
                    </p>
                </div>
                <div class="flex flex-col justify-center gap-3 mt-10 sm:flex-row">
                    <form @submit.prevent="handleNewsletterSubscribe"
                        class="w-full lg:w-auto bg-white/20 lg:mx-auto p-1.5 rounded-full">
                        <div class="w-full lg:flex lg:items-center">
                            <div class="shrink">
                                <input v-model="newsletterEmail" aria-label="Email address" autocomplete="email"
                                    class="block w-full p-3 text-white bg-transparent border border-transparent appearance-none rounded-full focus:border-slate-500 focus:outline-none focus:ring-slate-500 placeholder:text-slate-300 sm:text-sm"
                                    placeholder="Email address" required type="email">
                            </div>
                            <button
                                class="w-full lg:w-auto mr-1 active:bg-white active:text-white before:transition-colors bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 flex-none font-medium hover:bg-indigo-900 hover:text-white inline-flex justify-center lg:ml-4 outline-2 outline-offset-2 px-5 py-2.5 relative rounded-full text-white hover:scale-105"
                                type="submit">
                                <span>Join the newsletter</span>
                            </button>
                        </div>
                    </form>
                </div>
                <div v-if="showNewsletterAlert" class="mt-3">
                    <span class="text-white">{{ newsletterAlertMessage }}</span>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const newsletterEmail = ref('');
        const showNewsletterAlert = ref(false);
        const newsletterAlertMessage = ref('');
        const newsletterEmailValid = ref(true);

        const validateEmail = () => {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            newsletterEmailValid.value = emailPattern.test(newsletterEmail.value);
        };

        const handleNewsletterSubscribe = () => {
            validateEmail();

            if (newsletterEmailValid.value) {
                showNewsletterAlert.value = false;
                alert('Subscription successful!');
                window.location.reload();
                // Handle the subscription logic here
            } else {
                newsletterAlertMessage.value = 'Please enter a valid email.';
                showNewsletterAlert.value = true;
            }
        };

        return {
            newsletterEmail,
            showNewsletterAlert,
            newsletterAlertMessage,
            newsletterEmailValid,
            validateEmail,
            handleNewsletterSubscribe,
        };
    },
};
</script>

<style scoped>
.border-red-500 {
    border-color: red;
}

input:focus {
    outline: none;
    border-color: transparent;
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
