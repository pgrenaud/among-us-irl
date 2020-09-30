<template>
  <v-app-bar app absolute color="primary" dark>
    <v-app-bar-nav-icon
      @click.stop="toggleNavigationDrawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>Among Us IRL</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  methods: {
    toggleNavigationDrawer() {
      console.log("toggleNavigationDrawer from v-app-bar");
      this.$emit("toggle-navigation-drawer");
    }
  }
};
</script>
