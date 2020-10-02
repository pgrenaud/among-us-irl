<template>
  <v-app-bar app absolute color="primary" dark>
    <v-app-bar-nav-icon
      @click.stop="toggleNavigationDrawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({
    title: ""
  }),
  methods: {
    toggleNavigationDrawer() {
      this.$navigation.toggleDrawer();
    }
  },
  created() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === "NAVIGATION_SET_TITLE") {
        this.title = state.navigation.title;
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  }
};
</script>
