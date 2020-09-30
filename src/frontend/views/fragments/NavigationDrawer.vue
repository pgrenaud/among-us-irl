<template>
  <v-navigation-drawer app v-model="drawer" temporary>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          John Doe
        </v-list-item-title>
        <v-list-item-subtitle>
          Room: 1234
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list subheader dense>
      <v-subheader>User Controls</v-subheader>

      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-image</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Photos</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-help-box</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list subheader dense>
      <v-subheader>Settings</v-subheader>

      <v-list-item @click.stop="toggleLightDarkTheme">
        <v-list-item-icon>
          <v-icon>mdi-brightness-6</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Toggle Light/Dark theme</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  data: () => ({
    drawer: false
  }),
  methods: {
    toggleNavigationDrawer() {
      console.log("toggleNavigationDrawer from v-navigation-drawer");
      this.drawer = !this.drawer;
    },
    toggleLightDarkTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>
