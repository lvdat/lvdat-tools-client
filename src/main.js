import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "mdb-vue-ui-kit/css/mdb.min.css";
import "/src/assets/base.css";
const app = createApp(App);

app.use(router);

app.mount("#app");
