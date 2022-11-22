import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/scss/main.scss";
import ElementPlus from "element-plus";
import es from "element-plus/es/locale/lang/es";
import App from "./App.vue";

const store = createPinia();
const app = createApp(App);
const elementPlus = (ElementPlus, { locale: es, size: "small", zIndex: 3000 });
app.use(store).use(elementPlus).mount("#app");
