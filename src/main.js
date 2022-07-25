import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import "mdb-vue-ui-kit/css/mdb.min.css";
import "/src/assets/base.css";
const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);

app.mount("#app");
