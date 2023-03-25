import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import axios from "axios";
import Vueaxios from "vue-axios";
Vue.config.productionTip = false;
Vue.use(Vueaxios, axios);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
