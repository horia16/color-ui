import { App } from "vue";
import ColorApp from "./components/color-app/ColorApp.vue";
import ColorButton from "./components/color-button/ColorButton.vue";
import ColorCard from "./components/color-card/ColorCard.vue";
import ColorLoading from "./components/color-loading/ColorLoading.vue";
import ColorIcon from "./components/color-icon/ColorIcon.vue";
import ColorProgressBar from "./components/color-progress-bar/ColorProgressBar.vue";
import "@mdi/font/css/materialdesignicons.css";
export default {
  install: (app: App<Element>) => {
    app.component("color-app", ColorApp);
    app.component("color-button", ColorButton);
    app.component("color-card", ColorCard);
    app.component("color-progress-bar", ColorProgressBar);
    app.component("color-loading", ColorLoading);
    app.component("color-icon", ColorIcon);
  },
};
