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
    loadingShowSpinner({ commit }) {
      commit("LOADING_UPDATE", { loading: true });
    },
    loadingHideSpinner({ commit }) {
      commit("LOADING_UPDATE", { loading: false });
    }
  }
};
