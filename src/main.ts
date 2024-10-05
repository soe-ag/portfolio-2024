import App from "./App.vue";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import "./style.css";
import "uno.css";
import "virtual:unocss-devtools";

import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

import Timeline from "primevue/timeline";
import Card from "primevue/card";
import Button from "primevue/button";

import Home from "./views/Home.vue";
import About from "./views/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// createApp(App).mount("#app").use(router);

const app = createApp(App);
app.use(router);
app.mount("#app");
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.component("Timeline", Timeline);
app.component("Card", Card);
app.component("Button", Button);
