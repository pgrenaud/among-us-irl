import Vue from "vue";
import VueSocketIO from "vue-socket.io";

import App from "@/views/layouts/App";
import i18n from "@/resources/lang";
import router from "@/router";
import store from "@/store";
import vuetify from "@/plugins/vuetify";
import Loading from "@/plugins/loading";
import Navigation from "@/plugins/navigation";
import Snackbar from "@/plugins/snackbar";

Vue.config.productionTip = false;

let hostname = window.location.hostname;

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "http://" + hostname + ":3000",
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
);

Vue.use(new Loading(store));
Vue.use(new Navigation(store));
Vue.use(new Snackbar(store));

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
