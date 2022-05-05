import { createApp } from "vue";
import "element-plus/dist/index.css";
import "@/assets/css/globle.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import {
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElSelect,
  ElOption,
  ElMessage,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElIcon,
  ElBreadcrumb,
  ElCard,
  ElCol,
  ElTable,
  ElTableColumn,
  ElSwitch,
  ElPagination,
  ElDialog,
} from "element-plus";
import {
  Location,
  Document,
  Setting,
  Fold,
  Search,
  Edit,
  Delete,
} from "@element-plus/icons";

axios.defaults.baseURL = "http://127.0.0.1:8888/";
const app = createApp(App);
app.use(ElButton);
app.use(ElInput);
app.use(ElForm);
app.use(ElFormItem);
app.use(ElSelect);
app.use(ElOption);
app.use(ElMessage);
app.use(ElContainer);
app.use(ElHeader);
app.use(ElAside);
app.use(ElMain);
app.use(ElMenu);
app.use(ElSubMenu);
app.use(ElMenuItem);
app.use(ElIcon);
app.use(ElBreadcrumb);
app.use(ElCard);
app.use(ElCol);
app.use(ElTable);
app.use(ElTableColumn);
app.use(ElSwitch);
app.use(ElPagination);
app.use(ElDialog);
app.component("location", Location);
app.component("document", Document);
//app.component("iconMenu",IconMenu);
app.component("setting", Setting);
app.component("fold", Fold);
app.component("search", Search);
app.component("delete", Delete);
app.component("edit", Edit);
app.config.globalProperties.$http = axios;
app.config.globalProperties.$message = ElMessage;
app.use(store).use(router).mount("#app");
