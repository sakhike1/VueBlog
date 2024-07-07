<template>
    <div class="card-switcher m-20 ">
        <div class="cards">
            <div v-if="currentContent === 1" class="card-content bg-gradient">
                <div class="text-center p-6">
                    <h3 class="text-3xl leading-10">offering expert guidance and advice </h3>
                    <p class="mt-6 text-sm"> I ensure clients are equipped with the knowledge and strategies necessary
                        to achieve their digital objectives effectively and efficiently</p>

                </div>
            </div>
            <div v-if="currentContent === 2" class="card-content bg-gradient">
                <div class="text-center p-6">
                    <h3 class="text-3xl leading-10">Providing web development consultation</h3>
                    <p class="mt-6 text-sm">My role extends to recommending tailored solutions, such as frontend and
                        backend optimizations, responsive design implementations</p>

                </div>
            </div>
        </div>
        <div>
            <div class="buttons">
                <button @click="showContent1" :class="{ active: currentContent === 1 }">
                    <span class="inline-flex items-center">
                        <span
                            class="animate-background-shine rounded-full  text-xs font-medium text-gray-300 bg-gradient">
                        </span>
                        Show Content 1
                    </span>
                </button>
                <button @click="showContent2" :class="{ active: currentContent === 2 }" class="ml-4">
                    <span class="inline-flex items-center">
                        <span
                            class="animate-background-shine rounded-full  text-xs font-medium text-gray-300 bg-gradient">
                        </span>
                        Show Content 2
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentContent: 1,
        };
    },
    methods: {
        showContent1() {
            this.currentContent = 1;
        },
        showContent2() {
            this.currentContent = 2;
        },
    },
    mounted() {
        // Add animation styles dynamically
        const style = document.createElement('style');
        style.textContent = `
      @keyframes background-shine {
        from {
          background-position: 0 0;
        }
        to {
          background-position: -200% 0;
        }
      }
      .animate-background-shine {
        animation: background-shine 2s linear infinite;
      }
      .bg-gradient {
        background: linear-gradient(110deg, #000 45%, #4D4B4B 55%, #000);
        background-size: 250% 100%;
      }
    `;
        document.head.appendChild(style);
    },
};
</script>

<style scoped>
.card-switcher {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    margin-bottom: 40px;
    /* Added margin-bottom for space after the component */
}

.buttons {
    margin-top: 20px;
}

button {
    cursor: pointer;
    border: 1px solid #ccc;
    padding: 10px 20px;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    border-radius: 100px;
}

button.active {
    background-image: radial-gradient(at center bottom, rgb(253, 230, 138), rgb(124, 58, 237), rgb(12, 74, 110));
    color: white;
    border-radius: 100px;
}

span.animate-background-shine {
    margin-right: 10px;
    /* Adjust spacing between badge and text as needed */
}

.cards {
    width: 100%;
}

.card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
}

.bg-gradient {
    background: radial-gradient(ellipse at bottom, var(--tw-gradient-stops)), from-amber-200, via-violet-600, to-sky-900;
}

.text-3xl {
    font-size: 1.875rem;
}

.leading-10 {
    line-height: 2.5rem;
}

.mt-6 {
    margin-top: 1.5rem;
}

.text-sm {
    font-size: 0.875rem;
}

.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.m-2 {
    margin: 0.5rem;
}

.font-semibold {
    font-weight: 600;
}

.rounded {
    border-radius: 0.375rem;
}

.outline-none {
    outline: 0;
}

.border-2 {
    border-width: 2px;
}

.border-white {
    border-color: white;
}

.mt-10 {
    margin-top: 2.5rem;
}
</style>
