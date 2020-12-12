import { createApp } from "vue";
import App from "./App.vue";
import colorUi from "./color-ui";
import router from "./router";
const app = createApp(App);
app.use(router);
app.use(colorUi);
app.mount("#app");
