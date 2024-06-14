<template>
    <section class="ezy__contact11 dark dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
        <div class="shine-overlay"></div>
        <div class="bg-no-repeat bg-left-bottom bg-cover py-11"
            style="background-image: url(https://cdn.easyfrontend.com/pictures/contact/contact_11.png)">
            <div class="container px-4" data-aos="fade-up" data-aos-duration="3000">
                <div class="grid grid-cols-12 py-6">
                    <div class="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
                        <h2 class="text-2xl leading-none font-bold md:text-[40px] mb-6 text-white">Get in Touch</h2>
                        <p class="text-lg text-white">
                            If you have any questions or need any help, please contact me. I am here to help you.
                        </p>
                    </div>
                    <div class="col-span-12 lg:col-span-5 lg:col-start-8">
                        <div
                            class="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 dark:bg-[#162231] rounded-2xl border-[#F4F7FD] p-6 md:p-12">
                            <h2 class="text-2xl md:text-[45px] leading-none font-bold mb-4">Contact Us</h2>
                            <p class="text-lg mb-12">For any help with you app or web development needs</p>

                            <form @submit.prevent="validateForm">
                                <div class="mb-4">
                                    <input type="text" v-model="name"
                                        class="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                                        placeholder="Enter Name" />
                                </div>
                                <div class="mb-4">
                                    <input type="email" v-model="email"
                                        class="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                                        placeholder="Enter Email" />
                                </div>
                                <div class="mb-4">
                                    <textarea v-model="message" name="message"
                                        class="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                                        placeholder="Enter Message" rows="4"></textarea>
                                </div>
                                <div class="text-start">
                                    <button type="submit"
                                        class="bg-blue-600 hover:bg-opacity-90 text-white px-8 py-3 rounded mb-4">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ezy__contact11-blank-card"></div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        validateForm() {
            if (this.name === '') {
                alert('Please enter your name.');
                return;
            }
            if (this.email === '') {
                alert('Please enter your email.');
                return;
            }
            // Simple email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(this.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            if (this.message === '') {
                alert('Please enter your message.');
                return;
            }
            // If all validations pass
            alert('Message sent successfully!');
            // Optionally, you can handle the form submission logic here
            // For now, we'll just reset the form fields
            this.name = '';
            this.email = '';
            this.message = '';
        }
    }
}
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
</style>
