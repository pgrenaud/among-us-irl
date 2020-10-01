export default class Navigation {
  constructor(store) {
    this.store = store;
  }
  install(Vue) {
    Vue.prototype.$navigation = {
      toggleDrawer: () => {
        this.store.dispatch("toggleNavigationDrawer");
      }
    };
  }
}
