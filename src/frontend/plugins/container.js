export default class Container {
  constructor(store) {
    this.store = store;
  }
  install(Vue) {
    Vue.prototype.$container = {
      loadLogin: () => {
        this.store.dispatch("containerLoadLogin");
      },
      loadLobby: () => {
        this.store.dispatch("containerLoadLobby");
      }
    };
  }
}
