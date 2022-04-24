import { createApp } from "vue";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import {
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElMessage,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElIcon,
} from "element-plus";
import { Location } from "@element-plus/icons";

axios.defaults.baseURL = "http://127.0.0.1:8888/";
const app = createApp(App);
app.use(ElButton);
app.use(ElInput);
app.use(ElForm);
app.use(ElFormItem);
app.use(ElMessage);
app.use(ElContainer);
app.use(ElHeader);
app.use(ElAside);
app.use(ElMain);
app.use(ElMenu);
app.use(ElSubMenu);
app.use(ElMenuItem);
app.use(ElIcon);
app.component("location",Location);
app.config.globalProperties.$http = axios;
app.config.globalProperties.$message = ElMessage;
app.use(store).use(router).mount("#app");
