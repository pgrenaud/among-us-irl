export default {
  state: {
    isConnected: false
  },
  mutations: {
    SOCKET_connect(state) {
      state.isConnected = true;
    },
    SOCKET_disconnect(state) {
      state.isConnected = false;
    }
  },
  actions: {
    SOCKET_connect() {
      console.log("action SOCKET_connect");
    },
    SOCKET_error() {
      console.log("action SOCKET_error");
    },
    SOCKET_disconnect() {
      console.log("action SOCKET_disconnect");
    },
    SOCKET_reconnect() {
      console.log("action SOCKET_reconnect");
    },
    SOCKET_reconnect_attempt() {
      console.log("action SOCKET_reconnect_attempt");
    },
    SOCKET_reconnecting() {
      console.log("action SOCKET_reconnecting");
    },
    SOCKET_reconnect_error() {
      console.log("action SOCKET_reconnect_error");
    },
    SOCKET_reconnect_failed() {
      console.log("action SOCKET_reconnect_failed");
    },
    SOCKET_connect_error() {
      console.log("action SOCKET_connect_error");
    },
    SOCKET_connect_timeout() {
      console.log("action SOCKET_connect_timeout");
    },
    SOCKET_connecting() {
      console.log("action SOCKET_connecting");
    }
  }
};
