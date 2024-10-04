import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "uno.css";
import "virtual:unocss-devtools";

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
