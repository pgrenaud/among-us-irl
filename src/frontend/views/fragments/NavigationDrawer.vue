<template>
  <v-navigation-drawer app v-model="drawer" temporary>
    <v-list v-if="login">
      <v-list-item>
        <v-list-item-avatar>
          <v-avatar color="grey" size="36">
            <span class="white--text headline">J</span>
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">
            John Doe
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link @click="logout">
        <v-list-item-icon>
          <v-icon>mdi-logout-variant</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            {{ $t("navigation.header.leave_room", { room: "1234" }) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider v-if="login"></v-divider>

    <v-list subheader dense>
      <v-subheader>{{ $t("navigation.settings.title") }}</v-subheader>

      <v-list-item @click="toggleLightDarkTheme">
        <v-list-item-icon>
          <v-icon>mdi-brightness-6</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            {{ $t("navigation.settings.toggle_theme") }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  data: () => ({
    drawer: false,
    login: false
  }),
  methods: {
    closeDrawer() {
      this.drawer = false;
    },
    toggleLightDarkTheme() {
      this.closeDrawer();

      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    logout() {
      this.closeDrawer();

      this.$loading.showSpinner();
      setTimeout(() => {
        this.$container.loadLogin();
      }, 1000);
    }
  },
  created() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === "NAVIGATION_TOGGLE_DRAWER") {
        this.drawer = !this.drawer;
      }
      if (mutation.type === "CONTAINER_COMPONENT_UPDATE") {
        this.login = state.container.component === "lobby";
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  }
};
</script>
