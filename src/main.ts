import { createApp } from "vue";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-plus";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8888/";
const app = createApp(App);
app.use(ElementUI);
app.config.globalProperties.$http = axios;
app.use(store).use(router).mount("#app");
