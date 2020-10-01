export default {
  mutations: {
    NAVIGATION_TOGGLE_DRAWER() {}
  },
  actions: {
    toggleNavigationDrawer() {
      this.commit("NAVIGATION_TOGGLE_DRAWER");
    }
  }
};
