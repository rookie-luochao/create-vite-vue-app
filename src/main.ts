import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./core/store";
import router from "./core/router";

const app = createApp(App);

app.use(store).use(router);

app.mount("#app");
