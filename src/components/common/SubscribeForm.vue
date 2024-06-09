<template>
    <div>
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
            class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 font-sans min-h-[350px] m-10 relative max-w-6xl mx-auto rounded overflow-hidden">
            <div class="grid lg:grid-cols-2 w-full h-full absolute inset-0">
                <div class="p-4 max-lg:hidden">
                    <img src="https://readymadeui.com/image-1.webp" class="object-cover w-full h-full" alt="img" />
                </div>

                <div
                    class="flex flex-col items-end justify-center text-right px-8 relative bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400 rounded-tl-[206px] z-20 before:absolute before:inset-0 before:!left-auto before:w-2/3 before:rounded-bl-[206px] before:-z-10">
                    <h3 class="font-bold sm:text-4xl text-white">Unlock Your Vue Potential</h3>
                    <p class="text-sm text-black mt-4">
                        Subscribe to our weekly newsletter to get the latest Vue.js updates.
                    </p>

                    <form class="w-full mt-8" @submit.prevent="handleNewsletterSubscribe">
                        <div class="flex flex-col items-end w-full">
                            <input type="text" v-model="newsletterName" placeholder="Your Name"
                                class="mb-4 p-2 w-full rounded"
                                :class="{ 'border-red-500': !newsletterNameValid && showNewsletterAlert }"
                                @blur="validateName" />
                            <input type="email" v-model="newsletterEmail" placeholder="Your Email"
                                class="mb-4 p-2 w-full rounded"
                                :class="{ 'border-red-500': !newsletterEmailValid && showNewsletterAlert }"
                                @blur="validateEmail" />
                            <button type="submit" class="submit-button">
                                Subscribe
                            </button>
                        </div>
                        <div v-if="showNewsletterAlert" class="mt-4 text-red-500">{{ newsletterAlertMessage }}</div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    setup() {
        const newsletterName = ref('');
        const newsletterEmail = ref('');
        const showNewsletterAlert = ref(false);
        const newsletterAlertMessage = ref('');
        const newsletterNameValid = ref(true);
        const newsletterEmailValid = ref(true);

        const validateName = () => {
            newsletterNameValid.value = !!newsletterName.value.trim();
        };

        const validateEmail = () => {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            newsletterEmailValid.value = emailPattern.test(newsletterEmail.value);
        };

        const handleNewsletterSubscribe = () => {
            validateName();
            validateEmail();

            if (newsletterNameValid.value && newsletterEmailValid.value) {
                showNewsletterAlert.value = false;
                alert('Subscription successful!');
                location.reload();
                // Handle the subscription logic here
            } else {
                newsletterAlertMessage.value = 'Please enter a valid name and email.';
                showNewsletterAlert.value = true;
            }
        };

        return {
            newsletterName,
            newsletterEmail,
            showNewsletterAlert,
            newsletterAlertMessage,
            newsletterNameValid,
            newsletterEmailValid,
            validateName,
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

.submit-button {
    background-image: linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234));
    color: white;
    padding: 0.5rem 2rem;
    font-weight: 600;
    border-radius: 0.25rem;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.submit-button:hover {
    background-color: #e0e0e0;
    color: black;
    transform: scale(1.1);
}
</style>