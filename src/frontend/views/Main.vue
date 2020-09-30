<template>
  <v-app>
    <NavigationDrawer ref="navigationDrawer" />

    <AppBar @toggle-navigation-drawer="toggleNavigationDrawer" />

    <v-main>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/views/fragments/AppBar.vue";
import NavigationDrawer from "@/views/fragments/NavigationDrawer.vue";
import HelloWorld from "@/views/main/HelloWorld.vue";

export default {
  name: "Main",
  components: {
    AppBar,
    NavigationDrawer,
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
