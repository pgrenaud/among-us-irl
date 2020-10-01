export default {
  state: {
    component: "login"
  },
  mutations: {
    CONTAINER_COMPONENT_UPDATE(state, payload) {
      state.component = payload.component;
    }
  },
  actions: {
    containerLoadLogin() {
      this.commit("CONTAINER_COMPONENT_UPDATE", { component: "login" });
    },
    containerLoadLobby() {
      this.commit("CONTAINER_COMPONENT_UPDATE", { component: "lobby" });
    }
  }
};
