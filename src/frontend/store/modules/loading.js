export default {
  state: {
    loading: false
  },
  mutations: {
    LOADING_UPDATE(state, payload) {
      state.loading = payload.loading;
    }
  },
  actions: {
    loadingShowSpinner() {
      this.commit("LOADING_UPDATE", { loading: true });
    },
    loadingHideSpinner() {
      this.commit("LOADING_UPDATE", { loading: false });
    }
  }
};
