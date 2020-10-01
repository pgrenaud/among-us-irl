<template>
  <v-container fluid>
    <h1>{{ $t("lobby.title") }}</h1>
    <v-btn color="primary" @click="showSnackbar">
      Show snackbar
    </v-btn>
    <v-btn color="primary" @click="logout">
      {{ $t("general.logout") }}
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "Lobby",
  methods: {
    showSnackbar() {
      this.$snackbar.showMessage({ content: "Hello, snackbar", close: true });
    },
    logout() {
      this.$loading.showSpinner();
      setTimeout(() => {
        this.$container.loadLogin();
      }, 1000);
    }
  },
  mounted() {
    this.$loading.hideSpinner();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
