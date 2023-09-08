
// @ts-nocheck
import { createApp } from "vue";
import { createPinia } from "pinia";
import VueSplide from "@splidejs/vue-splide";
import router  from "./router/index";
import "./style.css";
import '@splidejs/vue-splide/css';
import App from "./App.vue";

const pinia = createPinia();

createApp(App).use(pinia).use(router).use(VueSplide).mount("#app");
