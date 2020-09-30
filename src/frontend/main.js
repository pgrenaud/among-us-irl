import Vue from "vue";
import VueSocketIO from "vue-socket.io";

import App from "@/views/layouts/App";
import router from "@/router";
import store from "@/store";
import vuetify from "@/plugins/vuetify";
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

Vue.use(new Snackbar(store));

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
