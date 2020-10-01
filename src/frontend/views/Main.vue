<template>
  <v-app>
    <NavigationDrawer />

    <AppBar />

    <v-main>
      <component v-bind:is="component" />
    </v-main>

    <Snackbar />
    <Loading />
    <Disconnected />
  </v-app>
</template>

<script>
import AppBar from "@/views/fragments/AppBar";
import NavigationDrawer from "@/views/fragments/NavigationDrawer";
import Snackbar from "@/views/fragments/Snackbar";
import Loading from "@/views/fragments/Loading";
import Disconnected from "@/views/fragments/Disconnected";
import Lobby from "@/views/main/Lobby";
import Login from "@/views/main/Login";

export default {
  name: "Main",
  components: {
    AppBar,
    NavigationDrawer,
    Snackbar,
    Loading,
    Disconnected,
    Login,
    Lobby
  },
  data: () => ({
    component: "login"
  }),
  created() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === "CONTAINER_COMPONENT_UPDATE") {
        this.component = state.container.component;
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  }
};
</script>
