import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "./assets/base.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style/global.scss";

const app = createApp(App);
app.config.globalProperties.$http = axios;
app.use(router);
app.use(ElementPlus);
app.mount("#app");
