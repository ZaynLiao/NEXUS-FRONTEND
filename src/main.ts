import { createApp } from "vue";
import "../src/style/style.css";
import App from "./App.vue";
import router from "./router";
import hljsVuePlugin from "./plugins/highlight";

const app = createApp(App);
app.use(router);
app.use(hljsVuePlugin);
app.mount("#app");
