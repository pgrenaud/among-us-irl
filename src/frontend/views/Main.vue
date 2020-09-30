<template>
  <v-app>
    <NavigationDrawer ref="navigationDrawer" />

    <AppBar @toggle-navigation-drawer="toggleNavigationDrawer" />

    <v-main>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </v-main>

    <Snackbar />
    <Disconnected />
  </v-app>
</template>

<script>
import AppBar from "@/views/fragments/AppBar";
import NavigationDrawer from "@/views/fragments/NavigationDrawer";
import Snackbar from "@/views/fragments/Snackbar";
import Disconnected from "@/views/fragments/Disconnected";
import HelloWorld from "@/views/main/HelloWorld";

export default {
  name: "Main",
  components: {
    AppBar,
    NavigationDrawer,
    Snackbar,
    Disconnected,
    HelloWorld
  },
  methods: {
    toggleNavigationDrawer() {
      console.log("toggleNavigationDrawer from v-app");
      this.$refs.navigationDrawer.toggleNavigationDrawer();
    }
  }
};
</script>
