import "./assets/css/index.css";
import "./assets/css/mobile.css";
import "./assets/css/burgerAnimation.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { VueEmailPlugin } from 'vue-email';

const app = createApp(App);

app.use(router);
app.use(VueEmailPlugin);

app.mount("#app");
