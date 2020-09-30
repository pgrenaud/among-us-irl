<template>
  <v-app>
    <NavigationDrawer ref="navigationDrawer" />

    <AppBar @toggle-navigation-drawer="toggleNavigationDrawer" />

    <v-main>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </v-main>

    <Snackbar />
  </v-app>
</template>

<script>
import AppBar from "@/views/fragments/AppBar.vue";
import NavigationDrawer from "@/views/fragments/NavigationDrawer.vue";
import Snackbar from "@/views/fragments/Snackbar.vue";
import HelloWorld from "@/views/main/HelloWorld.vue";

export default {
  name: "Main",
  components: {
    AppBar,
    NavigationDrawer,
    Snackbar,
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
