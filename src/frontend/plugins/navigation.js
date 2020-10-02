export default class Navigation {
  constructor(store) {
    this.store = store;
  }
  install(Vue) {
    Vue.prototype.$navigation = {
      toggleDrawer: () => {
        this.store.dispatch("toggleNavigationDrawer");
      },
      setTitle: title => {
        console.log("$navigation.setTitle", title);
        this.store.dispatch("setAppBarTitle", { title: title });
      }
    };
  }
}
