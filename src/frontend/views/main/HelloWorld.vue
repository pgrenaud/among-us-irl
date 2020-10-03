<template>
  <v-container fluid>
    <v-btn color="primary" @click="showSnackbar1">
      Show snackbar
    </v-btn>
    <v-btn color="primary" @click="showSnackbar2">
      Show snackbar
    </v-btn>
    <v-btn color="primary" @click="showSnackbar3">
      Show snackbar
    </v-btn>
    <v-btn color="primary" @click="loading">
      Loading
    </v-btn>

    <v-btn fab color="error" elevation="6" fixed bottom right>
      <v-icon>mdi-bullhorn-outline</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    showSnackbar1() {
      this.$snackbar.showMessage({ content: "Hello, snackbar", close: true });
    },
    showSnackbar2() {
      this.$snackbar.showMessage({ content: "Hello, snackbar", color: "info" });
    },
    showSnackbar3() {
      this.$snackbar.showMessage({
        content: "Hello, snackbar",
        color: "error"
      });
    },
    loading() {
      this.$loading.showSpinner();
      setTimeout(() => {
        this.$loading.hideSpinner();
      }, 3000);
    }
  }
};
</script>

<style scoped></style>
