export default class Snackbar {
  constructor(store) {
    this.store = store;
  }
  install(Vue) {
    Vue.prototype.$snackbar = {
      showMessage: ({ content = "", color = null, close = false }) => {
        this.store.commit("SNACKBAR_SHOW_MESSAGE", { content, color, close });
      }
    };
  }
}
