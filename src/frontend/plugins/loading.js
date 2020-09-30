export default class Loading {
  constructor(store) {
    this.store = store;
  }
  install(Vue) {
    Vue.prototype.$loading = {
      showSpinner: () => {
        this.store.dispatch("loadingShowSpinner");
      },
      hideSpinner: () => {
        this.store.dispatch("loadingHideSpinner");
      }
    };
  }
}
