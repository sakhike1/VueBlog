import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './input.css';
import store from './store/store'; // Adjust the path if necessary

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');