import { createStore } from 'vuex';

// Import images
import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image5.webp';
import image4 from '@/assets/image1.jpg';


const store = createStore({
  state: {
    blogPosts: [
      { id: 1, title: 'Streamline Two-Way Binding with define Model', date: 'Jan 01, 2024', content: 'Get this excellent tip on how to improve your form building workflows with Vue 4 newest update.', image: image1, link: 'https://vuejsfeed.com/blog/streamline-two-way-binding-with-definemodel' },
      { id: 2, title: 'Vue4-loading-shimmer - Shimmer Loading effect for Vue ', date: 'Feb 01, 2024', content: 'A customizable Vue 4 component for creating loading shimmer effects.', image: image2, link: 'https://vue3.lightvue.org/vue-components/shimmer' },
      { id: 4, title: 'Unveiling the Magic of Provide/Inject with Vue.js', date: 'Mar 01, 2024', content: 'Explore the provide and inject feature in Vue.js, its use cases, and how to implement it effectively in your Vue.js applications.', image: image4, link: 'https://vuejs.org/guide/components/provide-inject' },
      { id: 4, title: 'ways to set static or dynamic values to display on the template', date: 'Apr 01, 2024', content: 'These include using text interpolation, directly hardcoding into your HTML, or even using simple expressions to modify the data', image: image1, link: 'https://012.vuejs.org/guide/computed.html' },
      { id: 5, title: 'Visual Studio Code Shortcuts for Vue.js Developers', date: 'May 01, 2024', content: 'Say goodbye to repetitive and time-consuming tasks and hello to increased productivity with these powerful shortcuts. supercharge your workflow', image: image2, link: 'https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets' },
      { id: 6, title: 'some of the best Vue composables that deserve some extra attention', date: 'Apr 01, 2024', content: 'Detecting a click is pretty straightforward. But detecting when a click happens outside of an element? That’s a little trickier. Unless,', image: image4, link: 'https://www.vuemastery.com/blog/best-vueuse-composables/' },
      { id: 7, title: 'Registering Lifecycle Hooks hook can be used to run code after the component', date: 'Jan 01, 2024', content: 'Each Vue component instance goes through a series of initialization steps when its created  mount the instance to the DOM, and update the DOM when data changes ', image: image1, link: 'https://vuejs.org/guide/essentials/lifecycle.html' },
      { id: 8, title: 'The Complete Guide to Vue.js User Authentication with Auth0 Sign up and create an Auth0 Application ', date: 'Feb 01, 2024', content: 'Learn how to add login, logout, and sign-up to Vue.js using a plugin, and how to make secure API calls from a Vue.js app The best part of the Auth0 platform is how streamlined .', image: image2, link: 'https://auth0.com/blog/complete-guide-to-vue-user-authentication/' },
      { id: 9, title: ' The official state management library for Vue has changed to Pinia. learn Pinia', date: 'Mar 01, 2024', content: 'Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the  ', image: image4, link: 'https://vuex.vuejs.org/' },
      { id: 10, title: 'deep look at Vue.js directives and their use cases and explore.', date: 'Apr 01, 2024', content: 'Vue.js directives are special HTML attributes that tell Vue what to do with a DOM element. ', image: image1, link: 'https://vuejsfeed.com/blog/vue-js-directives-a-beginner-s-guide' },
      { id: 11, title: 'Implement face recoginiton in your Vue.js app with FaceIO.', date: 'May 01, 2024', content: 'Check out how you can add a face recognition authentication feature to your vue js app', image: image2, link: 'https://vuejsfeed.com/blog/implement-face-recoginiton-in-your-vue-js-app-with-faceio' },
      { id: 12, title: 'Vue Auth Plugin: Jwt Auth library for Vue.js.', date: 'Apr 01, 2024', content: 'Vue.js token based authentication plugin. Supports simple token based and JSON Web Tokens (JWT) authentication', image: image4, link: 'https://vuejsfeed.com/blog/vue-auth-plugin-jwt-auth-library-for-vue-js' },
      { id: 14, title: 'Pinia vs Vuex - Why Pinia wins over Vuex lets learn', date: 'Jan 01, 2024', content: 'learn why Pinia has clear advantage over Vuex in State management in Vue.js', image: image1, link: 'https://vuejsfeed.com/blog/pinia-vs-vuex-why-pinia-wins' },
      { id: 14, title: 'Effective Ways to Learn and Master Vue.js', date: 'Feb 01, 2024', content: 'Find out the most effective techniques to level up your Vue.js knowledge and skills!', image: image2, link: 'https://vuejsfeed.com/blog/effective-ways-to-learn-and-master-vue-js' },
      { id: 15, title: 'Learn Vue.js and modern, cutting-edge front-end technologies', date: 'Mar 01, 2024', content: 'from core-team members and industry experts with our premium tutorials and video courses.', image: image4, link: 'https://vueschool.io/' },
      { id: 16, title: 'Create search controls with auto suggest using vue instant', date: 'Apr 01, 2024', content: 'The vue-instant plugin allows the user to easily create search controls with auto suggestions ', image: image1, link: 'https://vuejsfeed.com/blog/create-search-controls-with-auto-suggest-using-vue-instant' },
      { id: 17, title: 'Vue.js 4 Fundamentals with the Composition API', date: 'May 01, 2024', content: 'Learn the fundamental concepts and get up and running with Vue.js 4 with the Composition API', image: image2, link: 'https://vueschool.io/courses/vue-js-fundamentals-with-the-composition-api' },
      { id: 18, title: 'Common Vue.js Mistakes and How to Avoid Them', date: 'Apr 01, 2024', content: 'Building apps with Vue is a delight but there are common gotchas you should look out for', image: image4, link: 'https://vueschool.io/courses/common-vue-js-mistakes-and-how-to-avoid-them' },
    ],
    currentPage: 1,
    postsPerPage: 9,
  },
  getters: {
    paginatedPosts: (state) => {
      const start = (state.currentPage - 1) * state.postsPerPage;
      const end = state.currentPage * state.postsPerPage;
      return state.blogPosts.slice(start, end);
    },
    totalPages: (state) => {
      return Math.ceil(state.blogPosts.length / state.postsPerPage);
    },
  },
  mutations: {
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page;
    },
  },
  actions: {
    setCurrentPage({ commit }, page) {
      commit('SET_CURRENT_PAGE', page);
    },
  },
});

export default store;
