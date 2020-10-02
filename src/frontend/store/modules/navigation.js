export default {
  state: {
    title: ""
  },
  mutations: {
    NAVIGATION_TOGGLE_DRAWER() {},
    NAVIGATION_SET_TITLE(state, payload) {
      state.title = payload.title;
    }
  },
  actions: {
    toggleNavigationDrawer({ commit }) {
      commit("NAVIGATION_TOGGLE_DRAWER");
    },
    setAppBarTitle({ commit }, payload) {
      commit("NAVIGATION_SET_TITLE", { title: payload.title });
    }
  }
};
