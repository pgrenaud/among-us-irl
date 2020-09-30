import Vue from "vue";
import Vuex from "vuex";

import modules from "@/store/modules/index";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules
});
