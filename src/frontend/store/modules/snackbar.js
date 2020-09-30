export default {
  state: {
    content: "",
    color: null,
    close: false
  },
  mutations: {
    SNACKBAR_SHOW_MESSAGE(state, payload) {
      state.content = payload.content;
      state.color = payload.color;
      state.close = payload.close;
    }
  }
};
